import React from 'react';
import {  Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appStyle';

interface Props {
    text: string,
    color? : string,
    ancho? : boolean,
    accion: ( numeroTexto : string ) => void,
}

export const BotonCalc = ( {text,color = '#2D2D2D', ancho = false, accion} : Props ) => {
   return (
       <TouchableOpacity
            onPress={() => accion(text)}
       >
        <View style={{
            backgroundColor: color,
            width: (ancho) ? 150 :70,
            ...styles.boton,
        }}>
            <Text style={{
                ...styles.botonText,
                color: (color==='#9B9B9B' ? 'black' : 'white')
            }}>{text}</Text>
        </View>
        </TouchableOpacity>
  );
}
