import { StyleSheet,Dimensions } from 'react-native'
const deviceSize=Dimensions.get("window")

export default StyleSheet.create({
    container:{
        backgroundColor:"white",
        height:deviceSize.height/3,
        marginHorizontal:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10

    },
    modal:{
        justifyContent:"flex-end",
        margin:0,
        
    },
    inner_container:{
        flex:1,
        padding:10
    }

})