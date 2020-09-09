import styled from 'styled-components/native';
import {
	Poppins24Base,
} from "../../assets/styles/texts";
import { ViewHorizontalCenter } from "../../assets/styles/views";
export const ContainerOnBoard = styled.View`
	padding:24px;
	flex:1;
`;
export const TextOnBoard = styled(Poppins24Base)`
	max-width: 240px;
	margin: 24px 0;
`;
export const ViewButtonOnBoard = styled(ViewHorizontalCenter)`
	align-self: flex-end;
	position: absolute;
	bottom: 24px;
`;