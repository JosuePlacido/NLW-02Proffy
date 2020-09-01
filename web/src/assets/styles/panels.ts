import styled from 'styled-components';

export const ContainerDefault = styled.div`
	width:90vw;
	max-width: 1000px;
`;
export const ContainerFlexCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const SpanTextFooter = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size:1.4rem;
`;
export const ContainerFullFlexCenter = styled.div`
    width:100vw;
    min-height:100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`;
export const PageBanner = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    @media(min-width: 900px) {
        grid-column: 1fr 1fr;
        flex-direction: row;
  }
`;
export const PageBannerReverse = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column-reverse;
    @media(min-width: 900px) {
        grid-column: 1fr 1fr;
        flex-direction: row;
  }
`;