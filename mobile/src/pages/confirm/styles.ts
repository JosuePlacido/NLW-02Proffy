import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {TitleLight} from '../../assets/styles/texts';
export const Title = styled(TitleLight)`
    font-size:32px;
    line-height:37px;
    max-width:180px;
    text-align:center;
    margin-top:24px;
`;
export const Description = styled.Text`
    margin-top:24px;
    color: #d4c2ff;
    font-size: 16px;
    line-height:26px;
    font-family:Poppins_400Regular;
    text-align:center;
`;
const styles = StyleSheet.create({
    icon:{
        borderWidth:3,
        borderColor:'#04d361',
        color:'#04d361',
        borderRadius:20,
        paddingHorizontal:20,
        paddingLeft:27,
        paddingTop:5
    }
});

export default styles;