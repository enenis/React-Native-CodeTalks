import { StyleSheet } from 'react-native'

const base_style=StyleSheet.create({
    container:{
            padding:10,
            margin:10,
            borderRadius:10
        },
        text:{
            textAlign:"center",
            fontWeight:"bold",
            fontSize:17
        }
})

export default {
   
    primary:StyleSheet.create({
        container:{
            ...base_style.container,
            backgroundColor:"#FFA040",
        },
        text:{
            ...base_style.text,
            color:"white",
        }
    }),
    secondary:StyleSheet.create({
        container:{
            ...base_style.container,
            backgroundColor:"white",
            borderWidth:1,
            borderColor:"#FFA040",
            marginBottom:100
        },
        text:{
            ...base_style.text,
            color:"#FFA040"
        }
    })
}