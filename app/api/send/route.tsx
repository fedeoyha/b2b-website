import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, website, challenge, message } = body;

        // Graceful fallback if API key is missing (for demo purposes)
        if (!process.env.RESEND_API_KEY) {
            console.warn('RESEND_API_KEY is missing. Simulating email send.');
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return Response.json({ data: { id: 'simulated_id' }, message: 'Simulated success' });
        }

        const { data, error } = await resend.emails.send({
            from: 'Auditoría <onboarding@resend.dev>', // Update this with your verified domain later
            to: ['federico.oyhamburu@gmail.com'], // Replace with your actual email
            subject: `Nueva Solicitud de Auditoría: ${company}`,
            react: <EmailTemplate name={name} email={email} company={company} website={website} challenge={challenge} message={message} />,
            replyTo: email,
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json({ data });
    } catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}
