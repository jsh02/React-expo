import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Body = ({ todos }) => {
  return (
    <View style={styles.container}>
      {todos.map((todo) => (
        <Text key={todo.id} style={styles.todo}>
          {todo.text}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  todo: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default Body;