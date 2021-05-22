import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-end',
        backgroundColor:'black'
    },
    calculadoraScreen:{
        paddingHorizontal:25,
        marginBottom:10
    },
    resultadoPeque:{
        fontSize:20,
        color:'rgba(255,255,255,0.5)',
        textAlign:'right'
    },
    resultado:{
        fontSize:40,
        color:'white',
        textAlign:'right',
        marginBottom:10
    },
    fila:{
        flexDirection:'row',
        paddingHorizontal:10,
        justifyContent:'center',
        marginBottom:18,
    },
    boton:{
        height:70,
        justifyContent:'center',
        borderRadius:100,
        marginHorizontal:5,
    },
    botonText:{
        textAlign:'center',
        fontSize:30,
        padding:10,
        fontWeight:'300'
    }
});