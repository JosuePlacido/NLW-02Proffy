import styled from 'styled-components';
export const ScheduleItems = styled.div`
	margin: 2rem 1rem;
	display:flex;
	& div {
		margin: 1rem;
		border-radius:20px;
		border: 1px solid var(--color-line-in-white);
		background-color: var(--color-box-footer);
		padding: 2rem;
		& p{
      		font-weight:600;
		}& p small{
      		font-weight:400;
		}
		& > p:first-of-type{
			margin-bottom: 1rem;
		}
	}
`;