import styled from 'styled-components';

export const LabelCheckbox = styled.label`
  display: block;
  margin: 0.2em;
  cursor: pointer;
  padding: 0.2em;
  @media(min-width:900px){
    &:hover > input[type-checkbox]::after {
      border-color: var(--color-primary) !important;
    }
  }
`;
export const CheckboxDefault = styled.input`
  cursor: pointer;
  appearance: none;
  border-width:none;
  &:after {
    content: '\\2714';
    background-color: var(--color-input-background);
    border: solid 1px var(--color-line-in-white);
    border-radius: 0.5em;
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: bottom;
    color: transparent;
    text-align: center;
    transition: .2s;
  }
  &:checked::after{    
    background-color:var(--color-secundary);
    color: var(--color-box-base);    
    border-color: var(--color-secundary);
  }
  &:disabled::after{    
    border-color: #aaa;
    transform: scale(1);
  }
  &:checked:disabled::after{    
    background-color:var(--color-secundary);    
    border-color: var(--color-secundary);
  }
  @media(min-width:900px){
    &:hover::after {
      border-color: var(--color-primary) !important;
    }
  }
`;