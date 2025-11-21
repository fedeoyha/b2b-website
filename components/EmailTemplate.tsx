import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    company: string;
    website?: string;
    challenge: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    email,
    company,
    website,
    challenge,
    message,
}) => (
    <div style={{ fontFamily: 'sans-serif', color: '#333', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ color: '#5E6AD2' }}>Nueva Solicitud de Auditoría</h1>
        <p>Has recibido un nuevo lead calificado desde el sitio web.</p>

        <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
            <h3 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>Detalles del Cliente</h3>
            <p><strong>Nombre:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Empresa:</strong> {company}</p>
            <p><strong>Sitio Web:</strong> {website || 'No especificado'}</p>
            <p><strong>Desafío Principal:</strong> {challenge}</p>
        </div>

        <div style={{ marginTop: '20px' }}>
            <h3>Mensaje Adicional</h3>
            <p style={{ background: '#fff', padding: '15px', border: '1px solid #eee', borderRadius: '4px' }}>
                {message}
            </p>
        </div>
    </div>
);
