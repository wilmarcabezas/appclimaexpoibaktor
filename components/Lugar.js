import { View, Text, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import Temperatura from "./Temperatura";
import EmojiTemperatura from "./EmojiTemperatura";

function Lugar({ ciudad }) {
    //useState => Recordar objetos en el componente
    const [latitud, setLatitud] = useState(0);
    const [longitud, setLongitud] = useState(0);

    useEffect(() => {
        if (ciudad !== '') {
            fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + ciudad)
                .then(response => response.json())
                .then(data => {
                    //Como preguntar si hay "algo" en un objeto
                    // objeto &&
                    if (data.results && data.results.length > 0) {
                        //Destructuracion de objetos
                        const { latitude, longitude } = data.results[0];

                        setLatitud(latitude);
                        setLongitud(longitude);
                    } else {
                        throw new Error("Ciudad no encontrada");
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    setLatitud(0);
                    setLongitud(0);
                });
        } else {
            setLatitud(0);
            setLongitud(0);
        }
    }, [ciudad]);

    const valorTemperatura = Temperatura({latitud, longitud});

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Ciudad: {ciudad}
            </Text>
            <Text>
                Latitud: {latitud}
            </Text>
            <Text>
                Longitud: {longitud}
            </Text>
            <Text>
                Clima: {valorTemperatura}
            </Text>
            <EmojiTemperatura temperatura={valorTemperatura} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F4F4F4',
    },
    text: {
        fontSize: 20,
    }
});

export default Lugar;
