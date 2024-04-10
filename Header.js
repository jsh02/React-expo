import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

export default class Header extends Component {
  state = {
    newTodo: '',
  };

  handleInputChange = (text) => {
    this.setState({ newTodo: text });
  };

  handleAddTodo = () => {
    if (this.state.newTodo.trim() !== '') {
      this.props.addTodo(this.state.newTodo);
      this.setState({ newTodo: '' });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter new todo"
          value={this.state.newTodo}
          onChangeText={this.handleInputChange}
        />
        <TouchableOpacity onPress={this.handleAddTodo}>
          <Text style={styles.addButton}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginRight: 10,
    paddingVertical: 5,
  },
  addButton: {
    color: 'blue',
    fontSize: 16,
  },
});