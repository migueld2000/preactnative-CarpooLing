import * as React from 'react';
import { StyleSheet,View,TextInput,Text,Button } from 'react-native';

const movRoute = () => {
  return(
    <View style={styles.container}>
    <Text >Rutas<hr/></Text>
    <Text>{"\n"}</Text>
    <Text>Ruta incial</Text>
    <TextInput 
    style={{borderBottomWidth:1}}  
    />
    <Text>{"\n"}</Text>
    <Text>Fin de ruta</Text>
    <TextInput 
    style={{borderBottomWidth:1}}
    />
    <Text>{"\n"}</Text>
    <Button
    title="Iniciar sección"
    />

    
  </View>


    
  );
}

export default movRoute;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});