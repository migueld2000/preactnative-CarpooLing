import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, Text, Button, Picker } from "react-native";

export default function App() {
  const [rutaincial, setRutaincial] = useState("");
  const [rutafinal, setRutafinal] = useState("");

  return (
    <View style={styles.container}>
      <Text>
        Rutas
        <hr />
      </Text>
      <Text>{"\n"}</Text>
      <Text>Ruta incial</Text>
      <Picker
        selectedValue={rutaincial}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setRutaincial(itemValue)}
      >
        <Picker.Item label="Campo Valdés - Poblado" value="1" />
        <Picker.Item label="Laureles - Centro" value="2" />
        <Picker.Item label="Castilla - Envigado" value="3" />
      </Picker>

      <Text>{"\n"}</Text>

      <Text>Ruta final</Text>
      <Picker
        selectedValue={rutafinal}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setRutafinal(itemValue)}
      >
        <Picker.Item label="Campo Valdés - Poblado" value="1" />
        <Picker.Item label="Laureles - Centro" value="2" />
        <Picker.Item label="Castilla - Envigado" value="3" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
