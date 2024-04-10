import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './Header';
import Body from './Body';

export default class App extends Component {
  state = {
    todos: [],
  };

  addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Header addTodo={this.addTodo} />
        <Body todos={this.state.todos} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
});