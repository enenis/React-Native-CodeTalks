import React,{useState} from 'react'
import Modal from "react-native-modal";
import { View,TextInput } from 'react-native'
import Button from '../Button';
import styles from "./ContentInput.style"
import { showMessage } from "react-native-flash-message";

function ContentInput({onClose,onSend,visible,placeholder}) {
    const[text,setText]=useState()

    function handleSend() {
        if(!text){
            showMessage({
                message: "Boş Alan Bırakmayınız!",
                type: "warning",
              });
              return;
        }

        onSend(text)
        setText(null)
    }
  return (
    <Modal
    animationOut={"slideOutUp"}
    style={styles.modal}
    isVisible={visible}
    onBackButtonPress={onClose}
    onBackdropPress={onClose}
    onSwipeComplete={onClose}
    swipeDirection={"down"}
    >
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <TextInput  placeholder={placeholder} onChangeText={setText} multiline/>
            </View>
            <Button text="Gönder" onPress={handleSend} />
        </View>
    </Modal>
  )
}

export default ContentInput