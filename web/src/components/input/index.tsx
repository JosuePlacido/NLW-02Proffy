import React,{InputHTMLAttributes,TextareaHTMLAttributes,SelectHTMLAttributes,useRef,useEffect, useState} from 'react';
import {
	TextCondensed,
	DivInputCondensed,
	TogglePassword,
	InputDefault,
	TextAreaDefault,
	SelectDefault,
	PasswordCondensed,
	LabelCondensed,
	InputBlock,
	UlSelect,
	ButtonSelect,
} from "./styles";
    import { LabelCheckbox,CheckboxDefault } from './checkbox';
import { Label } from '../../assets/styles/styles';
import arrow from '../../assets/images/icons/select-arrow.svg';
import { HiOutlineEyeOff,HiOutlineEye } from 'react-icons/hi';
import InputMask from "react-input-mask";
import Select, { ValueType, ActionMeta } from "react-select";
interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label:string;
	name:string;
	mask?:string|RegExp[];
}
interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label:string;
    name:string;
}
interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	label: string;
	name: string;
	initialValue?: OptionSelect;
	changeState?(value: OptionSelect): void;
	refInput?: any;
	options?: OptionSelect[];
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
export type OptionSelect = { label: string; value: string };
export const SelectInput: React.FunctionComponent<SelectProps> = ({
	label,
	name,
	options,
	initialValue,
	refInput,changeState,
	...rest
}) => {
	const [isShow, setIsShow] = useState(false);
	const [value, setValue] = useState<OptionSelect | null>(
		initialValue ? initialValue : null
	);
	return (
		<InputBlock
			className="select-block"
			onMouseLeave={() => setIsShow(false)}
		>
			<Label htmlFor={name}>{label}</Label>
			<input
				type="hidden"
				ref={refInput}
				value={value ? value.value : ""}
			/>
			<ButtonSelect type="button" disabled={rest.disabled?true:false} onClick={() => setIsShow(!isShow)}>
				{value ? value.label : <span>Selecione</span>}
				<svg
					className={isShow ? "" : "open"}
					width="10"
					height="6"
					viewBox="0 0 10 6"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M9 5L5 1L1 5"
						stroke="#9C98A6"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</ButtonSelect>
			<UlSelect display={isShow ? "block" : "none"}>
				{options?.map((option, index) => (
					<li
						key={index}
						onClick={() => {
							setIsShow(false);
							setValue(option);
							if(changeState !== undefined){
								changeState(option);
							}
						}}
						value={option.value}
					>
						{option.label}
					</li>
				))}
			</UlSelect>
		</InputBlock>
	);
};
export default Input;
