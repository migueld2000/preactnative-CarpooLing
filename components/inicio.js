import * as React from 'react';
import { StyleSheet,View,TextInput,Text,Button } from 'react-native';


const inicio = () => {
  return(
    <View style={styles.container}>
      <Text >Inicio:</Text>
      <Text>{"\n"}</Text>
      <Text>Usuario:</Text>
      <TextInput 
      style={{borderBottomWidth:1}}  
      />
      <Text>{"\n"}</Text>
      <Text>Contraseña:</Text>
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

export default inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});