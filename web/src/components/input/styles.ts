import styled from 'styled-components';

export const TextCondensed = styled.input`
    background-color: var(--color-input-background);
    width:100%;
    border:none;
    outline: 0;
`;
export const DivInputCondensed = styled.fieldset`    
    display:flex;
    flex-direction:column;
    position:relative;
    margin-top:-1px;
    padding: 1rem 1.6rem;
    background-color: var(--color-input-background);
    border:solid 1px var(--color-line-in-white);
    &:first-of-type {
        border-top-left-radius:0.8rem;
        border-top-right-radius:0.8rem;
    }
    &:last-of-type {
        border-bottom-left-radius:0.8rem;
        border-bottom-right-radius:0.8rem;
    }
    &:focus-within::before{
        width: 2px;
        content: '';
        background: var(--color-primary-light);
        position: absolute;
        left:0;
        bottom:1rem;
        top:1rem;
    }
    &:focus-within > label{
        color:var(--color-text-complement);
    }
`;
export const LabelCondensed = styled.label`
    color:var(--color-input-background);
    font-size:80%;
    transition: 1s;
`;
export const PasswordCondensed = styled(TextCondensed)`
    background-color: var(--color-input-background);
    width:100%;
    border:none;
    outline: 0;
`;
export const TogglePassword = styled.span`
    position: absolute;
    right:2rem;
    cursor:pointer;
    width:3rem;
    top:35%;
    &.visible{
        color:var(--color-primary);
    }
`;
export const InputBlock = styled.div`    
    position: relative;
    margin-top: 1.4rem;
    &:focus-within::after{
        width: calc(100% - 3.2rem);
        height: 2px;
        content: '';
        background: var(--color-primary-light);
        left:1.6rem;
        right: 1.6rem;
        position: absolute;
        bottom: 0;
    }
`;
export const InputDefault = styled.input`
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background-color: var(--color-input-background);
    border:solid 1px var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
`;
export const TextAreaDefault = styled.textarea`    
    height: 16rem;
    min-height: 8rem;
    resize:vertical;
    padding: 1.2rem 1.6rem;
    width: 100%;
    margin-top: 0.8rem;
    margin-bottom: -0.8rem;
    border-radius: 0.8rem;
    background-color: var(--color-input-background);
    border:solid 1px var(--color-line-in-white);
    outline: 0;
    font: 1.6rem Archivo;
`;
export const SelectDefault = styled.select`
    width: 100%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background-color: var(--color-input-background);
    border:solid 1px var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
`;