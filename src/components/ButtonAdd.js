import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet,
   View
}from 'react-native';

export default function ButtonAdd(props) {
  return (
    <TouchableOpacity onPress={() => props.navigate(props.destination)}>
      <View style={styles.btnAdd}>
        <Text style={styles.btnText}>+</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnAdd: {
    backgroundColor: '#7A71AF',
    height: 55,
    width: 55,
    borderRadius: 100,
    justifyContent: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  }
});