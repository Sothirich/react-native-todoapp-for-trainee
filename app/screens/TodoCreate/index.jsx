import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const TodoCreate = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Todo Create</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TodoCreate;
