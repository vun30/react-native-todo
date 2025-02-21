import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
export default function App() {
  // const [name, setName] = useState<String>("eric");
  // const [test, setTest] = useState({
  //   name:'vu',
  //   age: 22
  // })
  const [count, setCount] = useState<number>(0)
  return (
    <View style={styles.container}>
      <Text style={{ color: "red", fontSize: 30 }}>Count = {count}</Text>
      <View>
        <Button title="Increase" onPress={() => setCount(count + 1)}/>
      </View>
      <StatusBar style="auto" />
    </View>
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
