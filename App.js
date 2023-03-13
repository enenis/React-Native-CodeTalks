import React,{useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/auth/Login';
import Sign from './src/pages/auth/Sign';
import FlashMessage from "react-native-flash-message";
import Room from './src/pages/Room';
import auth from "@react-native-firebase/auth"
import Messages from './src/pages/Messages';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';


const Stack=createNativeStackNavigator()

export default()=>{
  const [userSession,setUserSession]=React.useState()

  useEffect(()=>{
    auth().onAuthStateChanged(user=>{
      setUserSession(!!user)
    })
  },[])

  const AuthStack=()=>{
    return(
      
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='LoginPage' component={Login} />
        <Stack.Screen name='SignPage' component={Sign}/>
      </Stack.Navigator>
      
    )
  }

  return(
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
        <Stack.Screen name="AuthStacksPage" component={AuthStack} 
        options={{headerShown: false}}/>
        ) : (
        <>
        <Stack.Screen name="RoomsPage" component={Room} 
        options={{
          title: "Odalar",
          headerTitleAlign: "center",
          headerTintColor: '#FF7518',
        }}/>
        <Stack.Screen name="MessagePage" component={Messages} 
        options={({route}) => ({
          title: route.params.item.text,
          headerTitleAlign: "center",
          headerTintColor: '#FF7518',
          headerRight: () => (
            <Icon 
            name="logout" 
            size={30} 
            color='#FF7518' 
            onPress={() => auth().signOut()} />
          ),
        })}/>
        </>
        )}
      </Stack.Navigator>
    <FlashMessage position="top" />
  </NavigationContainer>
  )

}