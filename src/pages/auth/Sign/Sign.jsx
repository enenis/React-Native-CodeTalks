import React,{useState} from 'react'
import { View,Text } from 'react-native'
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import styles from './Sign.style';
import { Formik } from 'formik';
import auth from "@react-native-firebase/auth"
import { showMessage } from "react-native-flash-message";
import authErrorCode from '../../../utils/authErrorCode';

function Sign({navigation}) {
    const[loading,setLoading]=useState(false)
    const initalFormValues={
        usermail:"",
        password:"",
        repassword:""
    }

   async function handleFormSubmit(formValues) {
    if(!formValues.password||!formValues.usermail||!formValues.repassword){
        showMessage({
            message: "Boş Alan Bırakmayınız!",
            type: "warning",
          });
          return
    }
    if(formValues.password!==formValues.repassword){
        showMessage({
            message: "Şifreler Uyuşmuyor",
            type: "danger",
          });
          return
    }
        try {
            console.log(formValues);
            setLoading(true)
            await auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.password
                )
            setLoading(false)
            showMessage({
                message: "Kullanıcı Başarıyla Oluşturuldu!",
                type: "success",
              });
              navigation.navigate("LoginPage")
        } catch (error) {
            setLoading(false)
            showMessage({
                message: authErrorCode(error.code),
                type: "danger",
              });
              console.log(error);
        }
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>codetalks</Text>
        <Formik initialValues={initalFormValues} onSubmit={handleFormSubmit}>
            {({values,handleChange,handleSubmit})=>(
            <>
            <Input value={values.usermail} onChange={handleChange("usermail")} placeholder="e-postanızı giriniz..." />
            <Input value={values.password} onChange={handleChange("password")} placeholder="şifrenizi giriniz..." isSecure={true}/>
            <Input value={values.repassword} onChange={handleChange("repassword")} placeholder="şifrenizi tekrar giriniz..." isSecure={true} />
            <Button text="Kayıt Ol" onPress={handleSubmit} loading={loading}/>
            </>
            )}
        </Formik>
        <Button text="Geri" theme='secondary'  onPress={()=>navigation.goBack()} />
    </View>
  )
}

export default Sign