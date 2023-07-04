import { Button } from "react-native";
import { SafeAreaView, StyleSheet, Image } from "react-native";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={require("../assets/Logo.png")} />
      <Button
        color={"#d52a1d"}
        title="Get Started"
        onPress={() => navigation.navigate("Workstations")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E0E0E",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 12,
    width: 800,
    height: 350,
    resizeMode: "contain",
  },
});
