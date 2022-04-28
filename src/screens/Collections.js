import React from 'react';
import {useState} from "react";
import { 
  KeyboardAvoidingView, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  Linking,
  TouchableWithoutFeedback,
  Keyboard,
}from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Collection from '../components/Collection';
import 'react-native-gesture-handler';
import ButtonAdd from '../components/ButtonAdd';

export default function Collections({navigation}) {

  const state = [
    {
      cardImg: require('../assets/ballIcon.png'),
      cardText: 'Objetos'
    },
    {
      cardImg: require('../assets/colorsIcon.png'),
      cardText: 'Cores'
    },
    {
      cardImg: require('../assets/bearIcon.png'),
      cardText: 'Animais'
    },
    {
      cardImg: require('../assets/treeIcon.png'),
      cardText: 'Adjetivos'
    },
    {
      cardImg: require('../assets/arrowIcon.png'),
      cardText: 'Pronomes'
    },
  ]

 

  var collections = [];


  var isModalShow
  const pull_data = (data) => {
    isModalShow= data
  }

  for (let i = 0; i < state.length; i++) {
    collections.push(
      <View key={i}>
        <Collection 
            cardImg={state[i].cardImg}
            cardText={state[i].cardText}
            navigate={navigation.navigate}
            destination="UpdateCollection"
            func={pull_data}
          />
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <ScrollView>
          <View style={styles.background}>
            <View style={styles.container}>
              {collections}
            </View>
          </View>
        </ScrollView>
        <View style={styles.test}>
          <TouchableOpacity>
            <ButtonAdd 
              navigate={navigation.navigate}
              destination="NewCollection"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#332E56'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingBottom: 60
  },
  test: {
    position: 'absolute',
    right: 0, 
    bottom: 0, 
    paddingBottom: 21,
    paddingRight: 21
  }
});