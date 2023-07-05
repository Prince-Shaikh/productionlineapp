import { Text, View } from "react-native";
import { StyleSheet, Image } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductList() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text}>SELECT PRODUCT</Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require("../assets/Logo.png")}
            />
            <View style={styles.cardBottom}>
              <Text style={styles.cardText}>Product Name</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require("../assets/Logo.png")}
            />
            <View style={styles.cardBottom}>
              <Text style={styles.cardText}>Product Name</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Image
              style={styles.image}
              source={require("../assets/Logo.png")}
            />
            <View style={styles.cardBottom}>
              <Text style={styles.cardText}>Product Name</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingBottom: 0,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  text: { fontSize: 32, fontWeight: "800", marginVertical: 24 },
  cardContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    height: "100%",
    // backgroundColor: "red",
  },

  card: {
    // flex: 1,
    margin: 16,
    padding: 8,
    justifyContent: "space-between",
    alignItems: "center",
    width: "45%",
    height: "45%",
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.4,
  },
  image: {
    width: "100%",
    height: "80%",
    backgroundColor: "#CFCFCF",
    resizeMode: "center",
  },
  cardBottom: { alignItems: "center", justifyContent: "center", flex: 1 },
  cardText: { fontSize: 32, fontWeight: 600 },
});
