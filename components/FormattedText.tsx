import React from 'react';

const BrandName = () => (
    <span className="brand-name">
        Auto<span>Mates</span>
    </span>
);

export default function FormattedText({ text }: { text: string }) {
    if (!text || !text.includes('AutoMates')) return <>{text}</>;

    const parts = text.split('AutoMates');
    return (
        <>
            {parts.map((part, i) => (
                <React.Fragment key={i}>
                    {part}
                    {i < parts.length - 1 && <BrandName />}
                </React.Fragment>
            ))}
        </>
    );
}
