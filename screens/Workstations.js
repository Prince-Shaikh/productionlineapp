import { Button, ScrollView, Text, TouchableOpacity } from "react-native";
import { StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
export default function WorkStations({ route, navigation }) {
  const { name } = route.params;
  const stations = Array.from(Array(21).keys());
  const substations = [
    "Pre-Assembly",
    "Set Down ",
    "Wheel Motor",
    "Diff Block",
    "Hydraulic Tank Cover ",
    "Valve Bank ",
    "Seat",
    "Steering Column",
    "Engine & Pumps",
    "Bonnet Bracket & Battery Lead",
    "Panels & Exhaust",
    "Roll Cage",
    "Mast",
  ];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#e80808", "#082f6f"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.container}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
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
          <View style={styles.buttonContainer}>
            {substations.map((station) => {
              return (
                <TouchableOpacity
                  key={station}
                  onPress={() => console.log("Button Pressed")}
                  style={styles.substationButton}
                >
                  <Text style={styles.substationbuttonText}>{station}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 52,
    flex: 1,
  },
  text: { fontSize: 32, fontWeight: "800", color: "#fff" },
  textSpacing: { marginVertical: 24, alignItems: "center" },
  buttonContainer: {
    justifyContent: "space-between",
    alignContent: "center",
    flex: -1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 32,
    paddingTop: 0,
    borderRadius: 25,
    backgroundColor: "#fff",
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
    width: 200,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
    borderRadius: 12,
    backgroundColor: "#da0a0f",
    elevation: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.8,
  },
  substationbuttonText: {
    color: "#fff",
    fontSize: 28,
    textAlign: "center",
    fontWeight: 500,
  },
  buttonText: {
    color: "#fff",
    fontSize: 64,
    textAlign: "center",
    fontWeight: 500,
  },
});
