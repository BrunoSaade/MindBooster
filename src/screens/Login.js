import React from 'react';
import {useState} from "react";
import { 
  KeyboardAvoidingView, 
  View, 
  Image, 
  TouchableOpacity, 
  Text, 
  StyleSheet,
  Linking,
  TouchableWithoutFeedback,
  Keyboard,
}from 'react-native';

import { TextInput } from 'react-native-paper';
import 'react-native-gesture-handler';
import Logo from '../components/Logo'


export default function Login({navigation}) {

  const login = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Collections"}]
    })
  }

  const register = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Register"}]
    })
  }

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [showPassword, setShowPassword] = useState(true)

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.background}>
        <View style={styles.containerLogo}>
          <Logo logoSize={132}/>
          <Text style={styles.containerLogoText}>MindBooster</Text>
        </View>
        <View style={styles.container}>
          <TextInput 
            label="E-mail"
            style={[styles.input, {marginBottom: 11, marginTop: 60}]}
            placeholder='Email'
            autoCorrect={false}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
          />

          <TextInput 
            label="Senha"
            style={styles.input}
            placeholder='Senha'
            autoCorrect={false}
            onChangeText={value => setPassword(value)}
            secureTextEntry={showPassword}
            right={ 
              showPassword ?  
              <TextInput.Icon 
                name="eye" 
                size={25} 
                color="black" 
                onPress={() => setShowPassword(!showPassword)}
              /> 
                :  
              <TextInput.Icon 
                name="eye-off" 
                size={25} 
                color="black" 
                onPress={() => setShowPassword(!showPassword)}
              />  
            }
          />
          <Text style={[{color: 'white'}, styles.textForgotPassword]}
            onPress={() => Linking.openURL('http://google.com')}>
            Esqueci a senha
          </Text>
          <TouchableOpacity style={styles.btnSubmit} onPress={() => login()}>
            <Text style={styles.btnText}>ENTRAR</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.container}>
          <TouchableOpacity style={[styles.btnRegister, {marginTop: 90}]} onPress={() => register()}>
            <Text style={styles.btnText}>CADASTRE-SE</Text>
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
    backgroundColor: '#43405E'
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
  },
  btnSubmit: {
    width: 335,
    height: 53,
    backgroundColor: '#6a61a1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    borderRadius: 3,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 14,
  },
  btnRegister: {
    width: 335,
    height: 53,
    backgroundColor: '#b58d97',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  textForgotPassword: {
    alignSelf: 'flex-end',
    paddingEnd: 22,
    marginTop: 8,
    fontSize: 14,
  },
  containerLogoText: {
    fontSize: 48,
    color: 'white',
    marginTop: -20
  }
});