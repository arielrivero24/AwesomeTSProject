
import React, {useEffect, useReducer, useEffect} from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from "./style";
import styles from "./src/screens/style";


const Login  = (props) => {

    const [name, setName] = useState = ('')

    useEffect ( () => {

        console.log('Creación')

    },[])

    useEffect ( () => {

        if (name != ''){
            console.log('Actualizado')
        }
        

    },[name])
    
    useEffect ( () => {

       return () => {
        console.log('Eliminado')
       }

    },[name])


    const handleButton = () => {
        setName('Ariel')
    }

    return(
        <View>
            <Text style={styles.sectionTitle}>Iniciar Sesión como : {name} {props.lastname}</Text>
            <Button onPress={handleButton} title="Iniciar Sesión"/> 
        </View>
    )

}


export default Login