import React,{useState,useEffect} from 'react'
import { View,Text,FlatList } from 'react-native'
import FloatingButton from '../../components/FloatingButton'
import ContentInput from '../../components/Modal/ContentInput'
import RoomCard from '../../components/RoomCard'
import styles from "./Room.style"
import database from "@react-native-firebase/database"
import parseContentData from '../../utils/parseContentData'
function Room({navigation}) {
    const[isModalVisible,setIsModalVisible]=useState(false)
    const[contentList,setContentList]=useState([])

    useEffect(()=>{
        database().ref("/rooms/").on("value",snapshot=>{
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
        database().ref("rooms/")
        handleSend(content)
    }

    function handleSend(content) {
       const currentObj={
            text:content
        }
        database().ref("/rooms/").push(currentObj)
    }

    function handleNavigate(item) {
        navigation.navigate("MessagePage",{item})
    }

    const renderShownCard=({item})=>(<RoomCard text={item.text} onPress={()=>handleNavigate(item)} />)

  return (
    <View style={styles.container}>
        <FlatList data={contentList} renderItem={renderShownCard} numColumns={2} columnWrapperStyle={{justifyContent:'space-between'}}  />
        <FloatingButton onPress={handleInputToggle} />
        <ContentInput visible={isModalVisible} onClose={handleInputToggle} onSend={handleSendContent} placeholder="Oda ismi.."/>
    </View>
  )
}

export default Room