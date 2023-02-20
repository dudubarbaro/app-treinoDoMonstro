import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.works}>
        <Text style={styles.texts}>-Segunda-feira: Pernas e PEITO</Text>
        <Text style={styles.texts}>-Terça-feira: Bíceps, Tríceps e PEITO</Text>
        <Text style={styles.texts}>-Quarta-feira: Costas e PEITO </Text>
        <Text style={styles.texts}>-Quinta-feira: Ombros e PEITO</Text>
        <Text style={styles.texts}>-Sexta-feira: PEITO (academia vazia!)</Text>
        <Text style={styles.texts}>-Sábado: Descanso e PEITO</Text>
        <Text style={styles.texts}>-Domingo: PEITO e Missa!</Text>
      </View>
      <Image source={require("./assets/frango.jpg")} style={styles.foto} />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    display: "flex",
    flexWrap: "nowrap",
  },
  works: {
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "black",
    width: "100%",
    height: "45%",
    paddingLeft: 20,
    paddingBottom: 5,
  },
  texts: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingTop: 18,
  },
  foto: {
    width: "100%",
    height: "30%"
  },
});
