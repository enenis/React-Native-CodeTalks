import React,{useState,useEffect} from 'react'
import { View,FlatList,Text } from 'react-native'
import styles from "./Messages.style"
import FloatingButton from '../../components/FloatingButton'
import ContentInput from '../../components/Modal/ContentInput'
import auth from "@react-native-firebase/auth"
import database from "@react-native-firebase/database"
import parseContentData from '../../utils/parseContentData'
import MessageCard from '../../components/MessageCard'

function Messages({route}) {
    const{item}=route.params
    const [isModalVisible,setIsModalVisible]=useState(false)
    const [contentList,setContentList]=useState([])

    useEffect(()=>{
        database().ref(`/rooms/${item.id}/messages`).on("value",snapshot=>{
            const contentData=snapshot.val()
            const parsedData=parseContentData(contentData||{})
            setContentList(parsedData)
        })
    },[])

    function handleInputToggle() {
        setIsModalVisible(!isModalVisible)
    }

    function handleSendContent(content) {
        handleInputToggle()
        sendContent(content)
    }

    function sendContent(content) {
        const usermail=auth().currentUser.email

        const currentObj={
            username:usermail.split("@")[0],
            content:content,
            date:(new Date()).toISOString(),
            title:item.text
        }
        database().ref(`rooms/${item.id}/messages`).push(currentObj)
    }

    const renderShownCard=({item})=><MessageCard message={item} />

    function getHeader() {
        return(
            <View style={{borderWidth:1,borderStyle:"dotted",borderColor:"white",margin:10,padding:10,borderRadius:10}}>
                <Text style={{textAlign:"center",color:"white",fontSize:17}}>{route.params.item.text} Odası Kuruldu!</Text>
            </View>
        )
    }

  return (
    <View style={styles.container}>
        <FlatList data={contentList} renderItem={renderShownCard } ListHeaderComponent={getHeader}/>
        <FloatingButton onPress={handleInputToggle}/>
        <ContentInput visible={isModalVisible} onClose={handleInputToggle} onSend={handleSendContent} placeholder="Mesajınız..." />
    </View>
  )
}

export default Messages