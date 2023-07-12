import { ScrollView, Text, TouchableHighlight, View } from "react-native";
import { StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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

export default function ProductList({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#e80808", "#082f6f"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.container}
      >
        <View style={styles.main}>
          <View
            style={{
              backgroundColor: "#191818",
              width: "100%",
              padding: 10,
              elevation: 10,
              shadowOffset: { width: 1, height: 1 },
              shadowColor: "#333",
              shadowOpacity: 0.8,
              shadowRadius: 10,
            }}
          >
            <Text style={styles.text}>SELECT PRODUCT</Text>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={styles.scroll}
            contentContainerStyle={{
              paddingBottom: 0,
            }}
          >
            <View style={styles.cardContainer}>
              {products.map((product) => {
                return (
                  <TouchableHighlight
                    style={styles.card}
                    key={product.id}
                    onPress={() => {
                      navigation.navigate("Workstations", {
                        name: product.name,
                      });
                    }}
                  >
                    <View style={{ width: "100%", height: "100%" }}>
                      <Image style={styles.image} source={product.image} />
                      <View style={styles.cardBottom}>
                        <Text style={styles.cardText}>{product.name}</Text>
                      </View>
                    </View>
                  </TouchableHighlight>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 8,
    paddingBottom: 0,
  },
  scroll: {
    // flex: 1,
    // backgroundColor: "red",/
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor: "#fff",
  },
  text: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "800",
    marginVertical: 24,
    color: "#fff",
  },
  cardContainer: {
    marginTop: 16,
    // flex: 1,
    // flexGrow: 1,
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
    minHeight: 200,
    maxHeight: 350,
    width: "40%",
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
