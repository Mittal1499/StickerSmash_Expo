import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to React native Expo App</Text>
      <Link href="/about" style={styles.btnTxt}>
        Go to about screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "700",
    color: "white",
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: "500",
    fontStyle: "normal",
    color: "coral",
    textDecorationLine: "underline",
    marginTop: 10,
  },
});
