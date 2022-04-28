import React from "react";

import { 
  View, 
  Image, 
}from 'react-native';

export default function Logo(props) {
  return (
    <View>
      <Image 
        resizeMode = 'cover'
        source={require('../assets/mindBoosterLogo.png')}
        style={{width: props.logoSize, height: props.logoSize}}
      />
    </View>
  )
}

// const styles = StyleSheet.create({
//   p

// });