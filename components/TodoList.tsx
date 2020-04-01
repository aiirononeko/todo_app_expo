import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TodoList = ({deleteFunc, list}) => {
  return (
    <View style={styles.list}>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <View>
            <Text style={styles.item}>{item}
              <Text onPress={() => { deleteFunc(item) }}>×</Text>
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    alignItems: 'center',
    marginBottom: 50
  },
  item: {
    fontSize: 22
  },
})

export default TodoList;
