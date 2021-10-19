import * as React from 'react';
import { SafeAreaView,StyleSheet, Text,TextInput } from 'react-native';
import { BottomNavigation} from 'react-native-paper';
import movRoute from './components/movRoute.js';
import inicio from'./components/inicio.js';
import vehiculo from './components/vehiculos.js';

  const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState
  ([
    { key: 'sesion', title: 'Iniciar Sesión', icon: 'login' },
    { key: 'ruta', title: 'Rutas', icon: 'routes'},
    { key: 'vehiculo', title: 'Veiculos', icon: 'car' },
  ]);

const redireccion = BottomNavigation.SceneMap({
  sesion: inicio,
  ruta: movRoute,
  vehiculo: vehiculo,
});

return (
  <BottomNavigation
    navigationState={{ index, routes }}
    onIndexChange={setIndex}
    renderScene={redireccion}
  />
);
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
