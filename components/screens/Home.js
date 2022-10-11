import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
function Home() {
  const [tasks, setTasks] = useState([
    {
      taskTitle: "Task#1",
    },
    {
      taskTitle: "Task#2",
    },
  ]);
  useEffect(() => {}, []);
  return (
    <View>
      <Text style={styles.welcome}>Hello, Your tasks of the day !</Text>
      <View style={styles.taskContainer}>
        {tasks.map((item, index) => {
          return <Task key={index} taskTitle={item.taskTitle} />;
        })}
      </View>
    </View>
  );
}

const Task = ({ taskTitle }) => {
  return (
    <View style={styles.task}>
      <Text>{taskTitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  welcome: {
    padding: 10,
    fontSize: 20,
    fontWeight: "400",
  },
  taskContainer: {
    paddingHorizontal: 20,
  },
  task: {
    marginVertical: 4,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
    elevation: 2,
  },
});
export default Home;
