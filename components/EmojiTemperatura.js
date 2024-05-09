import { Image, View, StyleSheet } from "react-native";
import Frio from "../assets/frio.jpg";
import Calor from "../assets/calor.webp"

function EmojiTemperatura({temperatura}){
    return(
        <View>
            {
                temperatura < 15 ? 
                (
                    <Image 
                        source={
                            Frio
                        }
                        style={styles.imagen}/>
                ) : 
                <Image 
                source={
                    Calor
                }
                style={styles.imagen}/>
            
            }
        </View>
    )
    
};

const styles = StyleSheet.create({
    imagen: {
        width: 100,
        height: 100,
    }
})

export default EmojiTemperatura;