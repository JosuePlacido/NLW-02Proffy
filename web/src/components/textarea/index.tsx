import React,{TextareaHTMLAttributes} from 'react';
import './styles.css';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label:string;
    name:string;
}

const TextArea:React.FunctionComponent<TextAreaProps> = ({label,name, ...rest}) => {
    return(        
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest}></textarea>
        </div>
    );
}

export default TextArea;