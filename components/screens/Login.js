import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, TextInput, Button,Image ,Pressable,Text, TouchableOpacity,Alert, ScrollView,TouchableWithoutFeedback,Keyboard} from 'react-native'
import logo from '../../assets/log2.png'
export default function Login({route, navigation}) {
    const [cred,setCred] = useState({username:"",password:""})
    const allusers = route.params
    const loginHandler = () =>{
      var found;
      const search = () => allusers['allusers']?.find(singleuser =>  singleuser['user']?.username === cred?.username && singleuser['user']?.password === cred?.password )
      found = search()
      if(cred.username === "" || cred.password === ""){
        Alert.alert('OOPS', 'Input fields cannot be empty!', [
          {text: 'Understood', onPress: () => console.log('alert closed') }
        ]);

      }
      else{
      if (found) {
        navigation.navigate("Home")
      }
      else{
        Alert.alert('OOPS', 'Credentials not found!', [
          {text: 'Try again', onPress: () => console.log('alert closed') }
        ]);
      }
    }
  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dismissed');
    }}>
    <View style={styles.loginscreen}>
     <Image source={logo} style={styles.logo}/>
    <View style={styles.form}>
        <TextInput
        style={styles.input}
        value={cred.username}
        placeholder={"Username"}
        onChangeText={(text) => setCred({...cred, username: text})}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={cred.password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setCred({...cred, password: text})}
      />
      <Button color='coral' onPress={() => {loginHandler()}} title='Login' />
      <TouchableOpacity onPress={()=>{navigation.navigate('Signup')}}>
        <Text style={{color:'blue', marginTop:6}}>
          Don't have an account? SignUp!
        </Text>
      </TouchableOpacity>
    </View>
    
    </View>
    </TouchableWithoutFeedback>
  )
}
const styles = StyleSheet.create({
  loginscreen: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    
    
  },

  form: {
        
    justifyContent:'center',
    alignItems:'center',
    borderColor:'blue',
    borderRadius:8,
    height:300,
    width:300,
    
    
  },
    input: {
      height: 60,
      width:260,
      marginBottom: 18,
      backgroundColor: '#fff',
      borderRadius:6,
      padding:8,
      
    },
    logo: {
      height: 100,
      width:100,
      borderRadius:6,
      marginBottom:16,
      
      
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        
      },
    }
      
  );