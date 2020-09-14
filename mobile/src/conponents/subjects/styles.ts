import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	scheduleView: {
		paddingTop: 40,
		borderBottomWidth: 1,
		borderBottomColor: "#e6e6f0",
	},
	buttonRemove: {
		backgroundColor: "#fff",
		alignSelf: "center",
		paddingHorizontal: 20,
		marginBottom: -10,
	},
});

export const TextButtonNovo = styled.Text`
        color:#8257E5
`;
export const TextButtonRemove = styled.Text`
        color:red;
`;
export const ButtonRemove = styled.TouchableOpacity`
	background-color:#fff;
	align-self:center;
	padding:0 20px;
	margin-bottom:-20px;
`;
export default styles;