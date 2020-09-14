import styled from 'styled-components';

export const TopBar = styled.nav`
	width: 100%;
	margin: 0;
	display: flex;
	background-color: var(--color-primary-darker);
	justify-content: space-around;
	align-items: center;
	color: var(--color-text-in-primary);
	padding: 1.2rem 0;
	& a {
		height: 3.2rem;
		transition: opacity 0.2s;
	}
	& > img {
		height: 1.6rem;
	}
`;
export const Container = styled.header`
	display: flex;
	flex-direction: column;
	background-color: var(--color-primary);
	@media (min-width: 700px) {
		height: 340px;
	}
`;
export const Content = styled.div`
	width: 100%;
	margin: 0 auto;
	position: relative;
	margin: 3.2rem auto;
	& strong {
		font: 700 3rem Archivo;
		line-height: 4.2rem;
		color: var(--color-title-in-primary);
	}
	& p {
		max-width: 30rem;
		font-size: 1.6rem;
		line-height: 2.6rem;
		color: var(--color-text-in-primary);
	}
	@media (min-width: 700px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		flex: 1;
		max-width: 740px;
		margin: 0 auto;
		padding-bottom: 48px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;
export const ContentFlex = styled(Content)`
	display: flex;
	@media (min-width: 700px) {
		display: flex;
	}
`;