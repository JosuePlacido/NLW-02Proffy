import styled from 'styled-components';

export const inputDefault = styled.input`
    border-radius: 0.8rem;
    background-color: var(--color-input-background);
    border:solid 1px var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
`;
export const ButtonAlternative = styled.button`    
    width:100%;
    height: 5.6rem;
    color: var(--color-text-complement);
    background-color: var(--color-button-background);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font:  700 1.6 Archivo;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    margin-top: 1.8rem;
    &:hover {
        background: var(--color-secundary-dark);
        color: var(--color-button-text);
    }
`;
export const ButtonPrimary = styled.button`   
    width:100%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font:  700 1.6 Archivo;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
    margin-top: 3.2rem;
    &:hover {
        background: var(--color-secundary-dark);
}`;
export const Label = styled.label`   
    font-size: 1.4rem;
    color: var(--color-text-complement);
`;
export const LegendDefault = styled.legend`   
    font-size: 1.4rem;
    color: var(--color-text-complement);
`;
export const LinkSecondary = styled.a`   
    font-size: 1.4rem;
    color: var(--color-text-complement);
    text-decoration:none;
    animation: 1s;
    &:hover{
        text-decoration:underline;
    }
`;
export const Title = styled.h1` 
    color:var(--color-text-title);
`;
export const PageAuth = styled.div` 
    width: 100vw;
    display: flex;
    flex-direction: column;
    @media(min-width: 900px) {
        grid-column: 1fr 1fr;
        flex-direction: row;
  }
`;
export const MainCentralized = styled.main` 
    @media(min-width: 900px) {
        height: 100vh;
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
  }
`;
export const FormCentralized = styled.form` 
    padding: 0.9rem;
    width: 100vw;
    @media(min-width: 900px) {
        width:65%;
  }
`;
export const IconInText = styled.img` 
    margin:0 10px;
`;
export const LinkPrimary = styled.a` 
    font-size: 1.6rem;
    font-weight:700;
    color: var(--color-primary);
    animation: 1s;
    &:hover{
        text-decoration:underline;
    }
`;
export const FooterCentralized = styled.footer`    
    margin-top: 5rem;
    display: flex;
    width: 100%;
    padding:3rem 1rem;
    align-items: flex-start;
    justify-content: space-between;
    @media(min-width: 900px) {
        width:65%;
        padding:0;
  }
`;
export const DivPaddingVerticalSpaceBetWeen = styled.span`    
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 2rem 0;
`;