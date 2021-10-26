import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

const imagen1 = { uri: "https://static.motor.es/fotos-noticias/2021/06/dacia-duster-2022-202179037-1624353348_3.jpg" };
const imagen2 = { uri: "https://upload.wikimedia.org/wikipedia/commons/1/1f/2019_Kia_Sportage_2_CRDi_ISG_S-A_1.6_Front.jpg" };
const imagen3 = { uri: "https://autosdeprimera.com/v2/wp-content/uploads/2021/01/toyota-rav4-hybrid-frente.jpg" };
const imagen4 = { uri: "https://autonews-wire.com/wp-content/uploads/2021_mazda_cx-5_4dr-suv_signature_fq_oem_2_815.jpg" };

const vehiculo = () => {
  return (
    <View style={styles.container}>
      <Text>vehiculos<hr /></Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.imagen}>
          <ImageBackground source={imagen1} resizeMode="cover" style={styles.imagen} />
          <Text>{"\n"}</Text>
          <Text style={styles.container}> Propietario:</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.container}> Placa:</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.container}> Calificacion:</Text>
          <Text>{"\n"}</Text>
          <Button
            title="Seleccionar"
          />
          <Text>{"\n"}</Text>
          <Button
            title="Quitar"
          />
        </View>
        <View style={styles.imagen}>
          <ImageBackground source={imagen2} resizeMode="cover" style={styles.imagen} />
          <Text>{"\n"}</Text>
          <Text style={styles.container}> Propietario:</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.container}> Placa:</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.container}> Calificacion:</Text>
          <Text>{"\n"}</Text>
          <Button
            title="Seleccionar"
            style={styles.boton}
          />
          <Text>{"\n"}</Text>
          <Button
            title="Quitar"
          />
        </View>
        <View style={styles.imagen}>
          <ImageBackground source={imagen3} resizeMode="cover" style={styles.imagen} />
          <Text>{"\n"}</Text>
          <Text style={styles.container}> Propietario:</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.container}> Placa:</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.container}> Calificacion:</Text>
          <Text>{"\n"}</Text>
          <Button
            title="Seleccionar"
          />
          <Text>{"\n"}</Text>
          <Button
            title="Quitar"
          />
        </View>
        <View style={styles.imagen}>
          <ImageBackground source={imagen4} resizeMode="cover" style={styles.imagen} />
          <Text>{"\n"}</Text>
          <Text style={styles.container}> Propietario:</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.container}> Placa:</Text>
          <Text>{"\n"}</Text>
          <Text style={styles.container}> Calificacion:</Text>
          <Text>{"\n"}</Text>
          <Button
            title="Seleccionar"
          />
          <Text>{"\n"}</Text>
          <Button
            title="Quitar"
          />
        </View>


      </View>
    </View>
  );
}

export default vehiculo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 250,
    height: 150,
    borderWidth: 2,
    borderColor: "#c35547",
    resizeMode: "contain",
    margin: 6,
  }
});
//toyota corolla cross 2021 imagen 3
//renault duster 2021 imagen 1
//kia imagen 2
//mazda imagen 4