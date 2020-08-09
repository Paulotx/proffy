import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TeaxtareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

const Teaxtarea:React.FC<TeaxtareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default Teaxtarea;