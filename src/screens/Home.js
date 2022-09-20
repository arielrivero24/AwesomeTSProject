import { useNavigation } from "@react-navigation/native";
import { React } from "react";
import { View,StyleSheet, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  return (
    <View style={style.container}>
      <Text style={style.textColor}>Página Home</Text>
      <TouchableHighlight onPress={() => navigation.navigate("Contact")}>
        <Text>Ir a la página contacto</Text>
      </TouchableHighlight>
    </View>
  );
}

const style = StyleSheet.create({
    textColor: {
      color: 'black',
      fontWeight: 'bold'
    },
    container: {
      flexDirection: 'column'
    }
  })