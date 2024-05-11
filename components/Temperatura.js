import { useEffect, useState } from "react";

//{latitud, longitud} -> destructuracion de objetos
function Temperatura({latitud, longitud}){

    const [temperaturaCiudad, setTemperaturaCiudad] = useState(0);
    // const [dataEmpleados, setDataEmpleados] = useState([]);
    // const [info, setInfo] = useState({coordenas: {latitud: 0, longitud: 0}, temperatura: 0});

    useEffect(() => {

        if(longitud !== 0 && latitud !== 0)
        {
            fetch('https://api.open-meteo.com/v1/forecast?latitude=' + latitud + "&longitude=" + longitud + "&hourly=temperature_2m" )
            .then(response => response.json())
            .then(data => {
                setTemperaturaCiudad(data.hourly.temperature_2m[0])
            })

        }

    }, [latitud, longitud])

    return temperaturaCiudad;
    // return(
    //     <Text>La temperatura es: {temperaturaCiudad}</Text>
    // )
}

export default Temperatura;