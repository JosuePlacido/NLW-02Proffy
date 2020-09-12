import React,{InputHTMLAttributes,TextareaHTMLAttributes,SelectHTMLAttributes, useState} from 'react';
import {TextCondensed,DivInputCondensed,TogglePassword,InputDefault
    ,TextAreaDefault,SelectDefault,
    PasswordCondensed,LabelCondensed,InputBlock} from './styles';
    import { LabelCheckbox,CheckboxDefault } from './checkbox';
import { Label } from '../../assets/styles/styles';
import { HiOutlineEyeOff,HiOutlineEye } from 'react-icons/hi';
import InputMask from "react-input-mask";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
	name:string;
	mask?:string|RegExp[];
}
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label:string;
    name:string;
}
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label:string;
    name:string;
    options?:Array<{
        value:string;
        text:string;
    }>;
}

export const InputCondensed:React.FunctionComponent<InputProps> = ({label,name, ...rest}) => {
    return(
        <DivInputCondensed>
            <LabelCondensed htmlFor={name}>{label}</LabelCondensed>
            <TextCondensed id={name} {...rest}/>
        </DivInputCondensed>
    );
}

export const Password:React.FunctionComponent<InputProps> = ({label,name, ...rest}) => {
    const [visible,setVisible] = useState(false);
    return(
        <DivInputCondensed>
            <LabelCondensed htmlFor={name}>{label}</LabelCondensed>
            <PasswordCondensed id={name} {...rest} type={!visible ? 'password' : 'text'}/>
            <TogglePassword className={!visible ? '' : 'visible'} onClick={()=>{
                setVisible(!visible);
            }}>
                {!visible ? <HiOutlineEye size={24}/> : <HiOutlineEyeOff size={24}/>}
            </TogglePassword>
        </DivInputCondensed>
    );
}
export const TextArea:React.FunctionComponent<TextAreaProps> = ({label,name, ...rest}) => {
    return(
        <InputBlock>
            <Label htmlFor={name}>{label}</Label>
            <TextAreaDefault id={name} {...rest}></TextAreaDefault>
        </InputBlock>
    );
}
const Input:React.FunctionComponent<InputProps> = ({label,name,mask, ...rest}) => {
	return (
		<InputBlock>
			<Label htmlFor={name}>{label}</Label>
			{mask ? (
				<InputMask id={name} mask={mask} className="mask" {...rest} />
			) : (
				<InputDefault id={name} {...rest} />
			)}
		</InputBlock>
	);
}
export const Checkbox:React.FunctionComponent<InputProps> = ({label,name, ...rest}) => {
    return(
        <>
            <LabelCheckbox htmlFor={name}>
                <CheckboxDefault type="checkbox" name={name} id={name} {...rest}/>
                { '  '+label }
            </LabelCheckbox>
        </>
    );
}
export const Select:React.FunctionComponent<SelectProps> = ({label,name,options, ...rest}) => {
    return(
        <InputBlock className="select-block">
            <Label htmlFor={name}>{label}</Label>
            <SelectDefault value="" id={name} {...rest}>
                <option value="" disabled hidden>Selecione uma opção</option>
                {options?.map( o => <option key={o.value} value={o.value}>{o.text}</option>)}
            </SelectDefault>
        </InputBlock>
    );
}
export default Input;
