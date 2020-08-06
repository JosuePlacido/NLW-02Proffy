import React,{SelectHTMLAttributes} from 'react';
import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label:string;
    name:string;
    options?:Array<{
        value:string;
        text:string;
    }>;
}

const Select:React.FunctionComponent<SelectProps> = ({label,name,options, ...rest}) => {
    return(        
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>
                {options?.map( o => <option key={o.value} value={o.value}>{o.text}</option>)}
            </select>
        </div>
    );
}

export default Select;