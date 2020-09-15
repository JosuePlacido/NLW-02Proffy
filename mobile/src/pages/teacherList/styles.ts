import styled from 'styled-components/native';
import {Label, TextInputDefault} from '../../conponents/inputs/styles';

export const SearchForm = styled.View`
	margin-bottom:60px;
	margin-top:-40px;
	padding: 0 20px;
`;
export const LabelInPrimary = styled(Label)`
    color:#f4c2ff;
`;
export const ScrollViewDefault = styled.FlatList`
    margin-top:-40px;
    padding: 0 16px;
    padding-bottom:16px;
`;
export const ViewRight = styled.View`
	flex-direction:row;
	align-items:center;
	justify-content:flex-end;
	width:35%;
`;
export const ViewFilter = styled.View`
	flex-direction:row;
	padding:0px 20px;
	padding-bottom:10px;
	border-color:#9871F5;
	border-bottom-width:1px;
	margin:0 20px;
	margin-bottom:60px;
`;