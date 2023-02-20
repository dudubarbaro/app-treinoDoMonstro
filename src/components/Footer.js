import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.texts}>
        App em React Native Desenvolvido por @dudubarbaro
      </Text>
      <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
        FORGET
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "red",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  texts: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
  },
});
