import React from 'react'
import { TouchableOpacity,Text } from 'react-native'
import styles from "./FloatingButton.style"

function FloatingButton({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.title}>+</Text>
    </TouchableOpacity>
  )
}

export default FloatingButton