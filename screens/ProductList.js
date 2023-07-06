import { ScrollView, Text, View } from "react-native";
import { StyleSheet, Image } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const products = [
  {
    id: 1,
    name: "M8  NX 55.3",
    image: require("../assets/products/m8_55-3.png"),
  },
  {
    id: 2,
    name: "M8 NX 55.4",
    image: require("../assets/products/m8_55-4.png"),
  },
  { id: 3, name: "PB 70", image: require("../assets/products/PB_70.jpg") },
  { id: 4, name: "PB 70", image: require("../assets/products/PB_70.jpg") },
  { id: 5, name: "PB 70", image: require("../assets/products/PB_70.jpg") },
  { id: 6, name: "PB 70", image: require("../assets/products/PB_70.jpg") },
];

export default function ProductList() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.text}>SELECT PRODUCT</Text>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={{
            paddingBottom: 140,
          }}
        >
          <View style={styles.cardContainer}>
            {products.map((product) => {
              return (
                <View style={styles.card} key={product.id}>
                  <Image style={styles.image} source={product.image} />
                  <View style={styles.cardBottom}>
                    <Text style={styles.cardText}>{product.name}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
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
  scroll: {
    // flex: 1,
    backgroundColor: "red",
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#fff",
  },
  text: { fontSize: 32, fontWeight: "800", marginVertical: 24 },
  cardContainer: {
    // flex: 1,
    // flexGrow: 1,
    // justifyContent: "center",
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
    minHeight: 250,
    maxHeight: 450,
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
    resizeMode: "cover",
  },
  cardBottom: { alignItems: "center", justifyContent: "center", flex: 1 },
  cardText: { fontSize: 32, fontWeight: 600 },
});
