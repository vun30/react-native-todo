import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
export default function App() {
  const [student, setStudents] = useState([
    { id: 1, name: "vu1", age: "18" },
    { id: 2, name: "vu2", age: "18" },
    { id: 3, name: "vu3", age: "18" },
    { id: 4, name: "vu4", age: "18" },
    { id: 5, name: "vu5", age: "18" },
    { id: 6, name: "vu6", age: "18" },
    { id: 7, name: "vu6", age: "18" },
    { id: 8, name: "vu6", age: "18" },
    { id: 9, name: "vu6", age: "18" },
    { id: 10, name: "vu6", age: "18" },
  ]);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>hello world</Text>
      <ScrollView>
        {student.map((item) => {
          return (
            <View
              key={item.id}
              style={{ padding: 14, backgroundColor: "pink", marginBottom: 23 }}
            >
              <Text>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingHorizontal:50,
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
