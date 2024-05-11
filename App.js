import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react"; //Hooks
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import Lugar from './components/Lugar';

//React es mejor con la programacion Funcional
//Es posible que encuentren ejemplo con POO clases

function App() {

  const [city, setCity] = useState('Bogota');
  const [nombreCiudad, setNombreCiudad] = useState('');

  //Controlando el envio de la propiedad al componente Lugar
  //Hay que controlar el renderizado del componente
  //Todos los servicios son gratuitos hasta que toca pagar
  const handlerCiudad = (texto) => {
    setNombreCiudad(texto)   
  }

  const asignarCiudad = (e) => {
    setCity(nombreCiudad)
  }

  
  return (
    <>
      <View style={styles.container}>

        <Text>AppClima</Text>
        <StatusBar style="auto" />

        <TextInput style={styles.inputText} onChangeText={handlerCiudad}></TextInput>
        <TouchableOpacity onPress={asignarCiudad}>
          <Text>Buscar</Text>
        </TouchableOpacity>
        <Button title="Buscar" onPress={asignarCiudad} />
        <Lugar ciudad={city} />

      </View>
      <Text>Clima!</Text>
    </>
  );
}
//Estilos totalmente CSS
//TailwindCSS -> Creada META, Practica, simple y sobre todo permite controlar el estilo
const styles = StyleSheet.create(
  {
    container: 
      {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    inputText: 
      {
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 5,
        height: 40,
        width: 200,
      }
  }
);

export default App;