import { StyleSheet,Dimensions} from 'react-native'
const deviceSize=Dimensions.get("window")
export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:"#bdbdbd",
        justifyContent:"center",
        margin:10,
        padding:10,
        borderRadius:10,
        flex:1,
        height:deviceSize.height/4,
        width:deviceSize.width/2

    },
    title:{
        textAlign:"center",
        textAlignVertical:"center",
        color:"#FF6F00",
        fontSize:20,
        fontWeight:"bold"
    }
})