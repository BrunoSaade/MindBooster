import React from "react";

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
  Dimensions
}from 'react-native';

import 'react-native-gesture-handler';

export default function Collection(props, {navigation}) {
  return (
    <TouchableOpacity>
      <View style={styles.card}>
        <View style={styles.cardImgContainer}>
          <Image 
            resizeMode = 'cover'
            style={[styles.cardImg,{overflow: 'visible'}]}
            source={props.cardImg}
          />
        </View>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardText}>{props.cardText}</Text>
        </View>
        <View style={styles.cardIconsContainer}>
          <TouchableOpacity onPress={() => props.navigate(props.destination)}>
            <Image style={styles.cardIconEdit}
              source={require('../assets/pencilIcon.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.func(true)}>  
            <Image style={styles.cardIconDelete}
              source={require('../assets/trashIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}

var {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
      width: 345,
      height: 120,
      backgroundColor: '#fff',
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 19
  },  
  cardImgContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  cardTextContainer: {
    flex: 2,
    paddingLeft: 15
  },
  cardIconsContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  cardImg: {
    maxWidth: 70,
    maxHeight: 70
  },
  cardText: {
    fontWeight: 'bold',
    color: '#27aca7',
    fontSize: 32
  },
  cardIconDelete: {
    maxWidth: 30,
    maxHeight: 30,
    marginTop: 25
  },
  cardIconEdit: {
    maxWidth: 30,
    maxHeight: 30,
  }
});