import React from "react";
import { Modal } from 'react-native-paper';

import { 
  View, 
  Image, 
}from 'react-native';

const [visible, setVisible] = React.useState(false);
const showModal = () => setVisible(true);
const hideModal = () => setVisible(false);
const containerStyle = {backgroundColor: 'white', padding: 20};

export default function ModalPopUp(props) {
  return (
    <View>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
        <Text>Example Modal.  Click outside this area to dismiss.</Text>
      </Modal>  
    </View>
  )
}

// const styles = StyleSheet.create({
//   p

// });