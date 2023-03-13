import React,{useState} from 'react'
import { View,Text, } from 'react-native'
import Button from '../../../components/Button'
import Input from '../../../components/Input'
import styles from "./Login.style"
import { Formik } from 'formik';
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";
import authErrorCode from '../../../utils/authErrorCode'

function Login({navigation}) {
    const[loading,setLoading]=useState(false)

    const initalFormValues={
        usermail:"",
        password:"",
    }

   async function handleFormSubmit(formValues) {
    if(!formValues.usermail||!formValues.password){
            showMessage({
                message: "Boş Alan Bırakmayınız!",
                type: "warning",
              });
              return;
    }
        try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(
                formValues.usermail,
                formValues.password,
            )
            setLoading(false)
            showMessage({
                message: "Giriş Yapıldı! Yönlendiriliyorsunuz..",
                type: "success",
              });
              navigation.navigate("RoomPage")
        } catch (error) {
            setLoading(false)
            showMessage({
                message: authErrorCode(error.code),
                type: "danger",
              });
        }
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>codetalks</Text>
        <Formik initialValues={initalFormValues} onSubmit={handleFormSubmit}>
            {({values,handleChange,handleSubmit})=>(
            <>
                <Input value={values.usermail} onChange={handleChange("usermail")} placeholder="e-postanızı giriniz.." />
                <Input value={values.password} onChange={handleChange("password")} placeholder="şifrenizi giriniz.." isSecure={true}/>
                <Button text="Giriş Yap" onPress={handleSubmit} loading={loading}/>
            </>
            )}
        </Formik>
        <Button text="Kayıt Ol" theme='secondary' onPress={()=>navigation.navigate("SignPage")}/>
    </View>
  )
}

export default Login