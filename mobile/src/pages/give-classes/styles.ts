import {StyleSheet,View} from 'react-native';
import styled from 'styled-components';

export const ViewUser = styled.View`
	flex-direction:row;
`;
const styles = StyleSheet.create({
    formClass:{
        marginTop:-40,
        backgroundColor:'#fff',
        marginHorizontal:18,
        borderWidth:1,
        borderColor:'#e6e6f0',
        borderRadius:8,
        marginBottom:16,
        overflow:"hidden"
    },
    searchForm:{
        marginBottom:24
    },
    inputGroup:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    submitButtonText:{
        fontFamily:'Archivo_700Bold',
        color:'#fff',
        fontSize:16
    },
    buttonNovo:{
        color:'#8257E5'
    },
    footer:{
        borderTopWidth:1,
        borderColor:'#e6e6f0',
        padding:20,
        margin:-20
    },
    footerWarn:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        padding:16
    },
    textFooter:{
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        lineHeight:25,
        color:'#A0A0B2'
    },
    textFooterWarn:{
        color:'#8257E5',
        width:'100%'
    },
    image:{
        height:40,
        width:40
    },
    inputGroupInline:{
        flexDirection:'row',
        justifyContent:'space-between',
    },subGroup:{
        width:"48%"
    }
});

export default styles;