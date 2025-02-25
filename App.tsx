import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
export default function App() {
  // const [name, setName] = useState<String>("eric");
  // const [test, setTest] = useState({
  //   name:'vu',
  //   age: 22
  // })
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<String>("")
  const [age,setAge] = useState<number>(0)
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 30 }}>Name:{name}</Text>
        <TextInput
          multiline
          autoCapitalize={"words"}
          onChangeText={(value) => setName(value)}
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 200,
            padding: 15,
          }}
        ></TextInput>
      </View>
      <View>
        <Text style={{ fontSize: 30 }}>Age:{age}</Text>
        <TextInput
          onChangeText={(value) => setAge(+value)}
          style={{
            borderColor: "green",
            borderWidth: 1,
            width: 200,
            padding: 15,
            
          }}
          keyboardType="numeric"
          maxLength={2}
        ></TextInput>
      </View>
      <Text style={{ color: "red", fontSize: 30 }}>Count = {count}</Text>
      <View>
        <Button title="Increase" onPress={() => setCount(count + 1)} />
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
