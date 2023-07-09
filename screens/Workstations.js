import { Button, ScrollView, Text, TouchableOpacity } from "react-native";
import { StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function WorkStations({ route, navigation }) {
  const { name } = route.params;
  stations = Array.from(Array(21).keys());
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.textSpacing}>
          <Text style={styles.text}>Select Workstations</Text>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {stations.map((station) => {
            return (
              <TouchableOpacity
                key={station}
                onPress={() => console.log("Button Pressed")}
                style={styles.button}
              >
                <Text style={styles.buttonText}>{station}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.textSpacing}>
          <Text style={styles.text}>Sub-Workstations</Text>
        </View>
        <TouchableOpacity
          onPress={() => console.log("Button Pressed")}
          style={styles.substationButton}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 52,
    flex: 1,
    padding: 8,
    paddingBottom: 0,
  },
  text: { fontSize: 32, fontWeight: "800" },
  textSpacing: { marginVertical: 24, alignItems: "center" },
  buttonContainer: {
    justifyContent: "space-between",
    flex: -1,
    flexDirection: "row",
    flexWrap: "wrap",
    // backgroundColor: "yellow",
  },
  button: {
    marginTop: 20,
    marginRight: 20,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#012e89",
    // borderColor: "red",
    // borderWidth: 5,
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.8,
  },
  substationButton: {
    marginTop: 20,
    marginRight: 20,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    backgroundColor: "#d52a1d",
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 64,
    textAlign: "center",
    fontWeight: 500,
  },
});
