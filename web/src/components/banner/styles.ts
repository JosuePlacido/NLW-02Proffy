import styled from 'styled-components';
export const BannerContainer = styled.div`
    background-color:var(--color-primary);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    width: 100vw;
    padding: 5rem 0;
    @media (min-width:900px){
        width: 50vw;
    }
`;
export const BackgroundBanner = styled.img`
    z-index: 0;
    width: 80vw !important;
    height: 30vh;
    position: absolute;
    @media (min-width:900px){
        transform: rotate(90deg);
        z-index: 0;
        width: 50vw !important;
        height: 80vh;
        padding: 0 5rem;        
    }
`;
export const LogoInBanner = styled.img`
    width: 20rem;
    height: auto;
    z-index: 1;
    @media(min-width:900px){        
        width: 30rem;
        height: auto;
    }
`;
export const TitleInBanner = styled.h2`
    color: var(--color-text-in-primary);
    font-weight: 400;
    max-width: 30rem;
    margin-top: 2.6rem;
    z-index: 1;    
    font-size: 90%;
    @media (min-width:900px){
        font-size: 140%;
        margin-top: 0;
    }
`;

