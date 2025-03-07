import { StatusBar } from "expo-status-bar";
import { Alert, Button, FlatList, Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useState } from "react";

interface ITodo {
  id: number;
  name: string
}
export default function App() {
  const [todo, setTodo] = useState("")
  const [listTodo,setListTodo] = useState<ITodo[]>([])
  const handleAddTodo = () => {
    if(!todo) {
      Alert.alert("Lỗi input", "null",[
        {
          text: 'Cancel',
          onPress: () => console.log('cancel pressed'),
          style: 'cancel'
        },
        {text: 'OK', onPress: () => console.log('OK pressed')}
      ])
      return;
    }
    setListTodo([...listTodo, { id: randomInteger(2, 2000), name: todo }]);
    setTodo("")
  }

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const deleteTodo = (id: number) => {
    const newTodo = listTodo.filter(item => item.id !== id)
    setListTodo(newTodo)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.header}>TodoApp</Text>
        <View style={styles.body}>
          <TextInput
            style={styles.todoInput}
            onChangeText={(value) => setTodo(value)}
          />
          <Button title="Add Todo" onPress={handleAddTodo} />
        </View>
        <View style={styles.body}>
          <FlatList
            keyExtractor={(itme) => itme.id + ""}
            data={listTodo}
            renderItem={({ item }) => {
              return (
                <Pressable
                  style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
                  onPress={() => deleteTodo(item.id)}
                >
                  <Text style={styles.todoItem}>{item.name}</Text>
                </Pressable>
              );
            }}
          ></FlatList>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 40
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fff",

  },
  todoInput: {
    borderWidth: 1,
    borderBlockColor: "green",
    padding: 5,
    margin: 15
  },
  body: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  todoItem : {
    fontSize: 30,
    marginBottom: 10,
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 10
  }
});
