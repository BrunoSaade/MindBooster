import React from 'react';
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
  Keyboard
}from 'react-native';

import Ionicons from '@expo/vector-icons';

export default function Register() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView style={styles.background}>
        {/* <View style={styles.containerLogo}>
          <Image style={styles.logo}
            source={require('../assets/mindBoosterLogo.png')}
          />
        </View> */}
        <View style={styles.container}>
          <Text style={styles.title}>Preencha os dados do seu cadastro</Text>
        </View>
        <View style={styles.container}>
          <TextInput 
            style={[styles.input, {marginBottom: 18}]}
            placeholder='Email'
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <TextInput 
            style={[styles.input, {marginBottom: 18}]}
            placeholder='Senha'
            autoCorrect={false}
            onChangeText={() => {}}
          />
          <TextInput 
            style={[styles.input, {marginBottom: 18}]}
            placeholder='Repetir senha'
            autoCorrect={false}
            onChangeText={() => {}}
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btnRegister}>
            <Text style={styles.btnText}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#43405E'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 133,
    height: 133
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  input: {
    backgroundColor: '#fff',
    width: 329,
    height: 57,
    color: 'rgba(0,0,0,0.8705882352941177 )',
    fontSize: 16,
    borderRadius: 3,
    paddingLeft: 16,
    paddingTop: 26
  },
  btnText: {
    color: '#ffffff',
    fontSize: 14,
  },
  btnRegister: {
    width: 335,
    height: 53,
    backgroundColor: '#6a61a1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textForgotPassword: {
    alignSelf: 'flex-end',
    paddingEnd: 10,
    marginTop: 8,
    fontSize: 14,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    textAlign: 'center',
  }
});