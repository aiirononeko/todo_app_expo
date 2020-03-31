import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './components/Form';
import TodoList from './components/TodoList';

export default function App() {

  const [list, setList] = useState([]);
  
  const addList = (item: string) => {
    const newList = [...list, item];
    setList(newList);
  }

  const deleteList = (item: string) => {
    const newList = list.filter(li => { return li !== item });
    setList(newList);
  }

  return (
    <View style={styles.container}>
      <TodoList deleteFunc={deleteList} list={list} />
      <Form addFunc={addList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  }
});
