import { useEffect, useState } from "react";

function Temperatura({latitud, longitud}){

    const [temperaturaCiudad, setTemperaturaCiudad] = useState(0);

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
}

export default Temperatura;