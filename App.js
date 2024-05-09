import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import Lugar from './components/Lugar';


export default function App() {

  const [city, setCity] = useState('');
  const [nombreCiudad, setNombreCiudad] = useState('');

  const handlerCiudad = (texto) => {
    setNombreCiudad(texto)
  }

  const asignarCiudad = (e) => {
    setCity(nombreCiudad)
  }

  return (
    <View style={styles.container}>
      
      <Text>AppClima</Text>
      <StatusBar style="auto" />

      <TextInput style={styles.inputText} onChangeText={handlerCiudad}></TextInput>
      <TouchableOpacity onPress={asignarCiudad}>
        <Text>Buscar</Text>
      </TouchableOpacity>
      <Button title="Buscar" onPress={asignarCiudad} />
      <Lugar ciudad={city}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText:{
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 5,
    height: 40,
    width:200,
  }
});
