import { StyleSheet, Text, View, FlatList, Alert,TouchableWithoutFeedback, Keyboard } from 'react-native';
import TodoItem from '../todoitem';
import AddTodo from '../addtodo';
import { useState } from 'react';

const Task = () => {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);
  const pressHandler = (key) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };
  const submitHandler = (text) => {
    if(text.length > 3){
      setText('');
      setTodos(prevTodos => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS', 'Todo must be over 3 characters long', [
        {text: 'Understood', onPress: () => console.log('alert closed') }
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
      <View style={styles.container}>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f4f4f',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});


export default Task