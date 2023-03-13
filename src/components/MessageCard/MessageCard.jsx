import React from 'react'
import { View,Text } from 'react-native'
import styles from "./MessageCard.style"
import { format, formatDistance, formatRelative, parseISO, subDays } from 'date-fns'
import { tr } from 'date-fns/locale'

function MessageCard({message}) {
   const formattedDate= formatDistance(parseISO(message.date), new Date(), { addSuffix: true, locale:tr })

  return (
    <View style={styles.container}>
      {/* <Text style={{color:"black"}}>{message.title}</Text> */}
        
        <View style={styles.inner_container}>
            
            <Text style={styles.username}>{message.username}</Text>
            <Text style={styles.date}>{formattedDate}</Text>
        </View>
        <Text style={styles.text}>{message.content}</Text>
    </View>
  )
}

export default MessageCard