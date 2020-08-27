import React, { ReactNode } from 'react';
import { ViewHeader,ViewContainer,TextTitle } from './styles';

interface SectionProps{
    title:string;
    right?:ReactNode;
}

const InputSection:React.FC<SectionProps> = ({title,right,children}) => {
    return (
        <ViewContainer>  
            <ViewHeader>
                <TextTitle>
                    {title}    
                </TextTitle>
                {right}  
            </ViewHeader>
            {children}
        </ViewContainer>
    );
}
export default InputSection;