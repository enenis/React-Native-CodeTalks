import React from 'react'
import { View,Text,TouchableOpacity,ActivityIndicator } from 'react-native'
import styles from './Button.style'
function Button({text,onPress,loading,theme="primary"}) {
  return (
        <TouchableOpacity style={styles[theme].container} onPress={onPress}>
          {
            loading?<ActivityIndicator size={23} color="#FF6F00"/>:<Text style={styles[theme].text}>{text}</Text>
          }
        </TouchableOpacity>
  )
}

export default Button