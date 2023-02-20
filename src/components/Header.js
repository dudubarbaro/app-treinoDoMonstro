import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.list}>
      <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
        TREINO DO MONSTRO
      </Text>
      <Text style={{ color: "white", fontSize: 12 }}>
        (recomendado somente para atletas veganos e alérgicos a água)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "red",
    width: "100%",
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
});
