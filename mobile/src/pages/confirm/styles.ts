import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#8257e5',
        justifyContent:"center",
        padding:40
    },
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontFamily:'Archivo_700Bold',
        color:'#fff',
        fontSize:32,
        lineHeight:37,
        maxWidth:180,
        textAlign:'center',
        marginTop:24,
    },
    description: {
        marginTop:24,
        color:'#d4c2ff',
        fontSize: 16,
        lineHeight:26,
        fontFamily:'Poppins_400Regular',
        textAlign:'center'
    },
    button:{
        marginVertical:40,
        backgroundColor:'#04d361',
        height:58,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8
    },
    buttonText:{
        fontFamily:'Archivo_700Bold',
        color:"#fff",
        fontSize:16
    },
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