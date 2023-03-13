import React from 'react'
import { View,TextInput } from 'react-native'
import styles from "./Input.style"
function Input({placeholder,value,onChange,isSecure}) {
  return (
    <View style={styles.container}>
        <TextInput placeholderTextColor={"white"} style={styles.Input} placeholder={placeholder} value={value} onChangeText={onChange} secureTextEntry={isSecure}/>
    </View>
  )
}

export default Input