import React from 'react';
import { SafeAreaView, StatusBar} from 'react-native';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { styles } from './src/theme/appStyle';

export const App = () => {
   return (
     <SafeAreaView style={styles.container}>
        <StatusBar 
         backgroundColor={'black'}
         barStyle='dark-content'
        />
        <CalculadoraScreen />
     </SafeAreaView>
  );
}
