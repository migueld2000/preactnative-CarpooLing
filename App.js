import * as React from 'react';
import { SafeAreaView,StyleSheet, Text,TextInput } from 'react-native';
import { BottomNavigation} from 'react-native-paper';
import movRoute from './components/movRoute.js';
import inicio from'./components/inicio.js';
import Calificacion from './components/calificacion.js';

  const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState
  ([
    { key: 'sesion', title: 'Iniciar Sesión', icon: 'login' },
    { key: 'ruta', title: 'Rutas', icon: 'routes'},
    { key: 'calificacion', title: 'Calificacion', icon: 'car' },
  ]);

const redireccion = BottomNavigation.SceneMap({
  sesion: inicio,
  ruta: movRoute,
  calificacion: Calificacion,
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
