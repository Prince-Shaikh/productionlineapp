import { Button, Text } from "react-native";
import { StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function WorkStations() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Select Workstations</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
