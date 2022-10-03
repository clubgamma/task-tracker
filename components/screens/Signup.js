import React from 'react'
import { useState } from 'react'
import { useEffect, useRef } from 'react'
import { StyleSheet, View, TextInput, Button,Image ,ScrollView,Text,Alert, TouchableWithoutFeedback,Keyboard} from 'react-native'
import {Card} from 'react-native-paper'
import logo from '../../assets/log2.png'
export default function Signup({navigation}) {
    const [user,setUser] = useState({firstName:"",lastName:"",email:"",username:"",password:""})
    const [allusers,setallusers] = useState([])
    const isFirstRender = useRef(true);
    useEffect(() => {                       // will wait for allusers state to change
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return; // 👈️ return early if initial render
      }
       console.log("all ",allusers)
       setUser({firstName:"",lastName:"",email:"",username:"",password:""})
       Alert.alert('Success','Registeration successfull!', [
      {text: 'ok', onPress: () => {navigation.navigate('Login',{allusers})} }
    ])
  
    }, [allusers]);
   
    const submitHandler =  async (user) => {
      var found; 
      const search = () => allusers.find(singleuser =>  singleuser['user']?.username === user?.username)
      found = search()

      
      if(user.username === "" || user.password === "" || user.email === "" || user.firstName === "",user.lastName === ""){
        Alert.alert('OOPS', 'Input fields cannot be empty!', [
          {text: 'Understood', onPress: () => console.log('alert closed') }
        ]);

      }
      else{
      if(found){
        Alert.alert('OOPS', 'Username already exists!', [
          {text: 'Understood', onPress: () => console.log('alert closed') }
        ]);
      }
        
       else {

        setallusers(prevallusers => {
          return [
            ...prevallusers,{ user, key: Math.random().toString() }, //appending
          ];
        })


        
    };
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
    <ScrollView>
        <TextInput
        style={styles.input}
        value={user.firstName}
        placeholder={"First Name"}
        onChangeText={(text) => setUser({...user, firstName: text})}
        autoCapitalize={"none"}
      />
       <TextInput
        style={styles.input}
        value={user.lastName}
        placeholder={"Last Name"}
        onChangeText={(text) => setUser({...user, lastName: text})}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={user.username}
        placeholder={"Username"}
        onChangeText={(text) => setUser({...user, username: text})}
        autoCapitalize={"none"}
      />
       <TextInput
        style={styles.input}
        value={user.email}
        placeholder={"email"}
        onChangeText={(text) => setUser({...user, email: text})}
        autoCapitalize={"none"}
      />
       
      <TextInput
        style={styles.input}
        value={user.password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setUser({...user, password: text})}
      />
       <Button color='coral'  onPress={() => {submitHandler(user)}} title='SignUp' />
       
      
       </ScrollView>
    </View>
    
    </View>
    </TouchableWithoutFeedback>
   
  )
}
const styles = StyleSheet.create({
  loginscreen: {
    flex:1,
    alignItems:'center',
    marginTop:8,
    
    
  },

  form: {
    flex:1,
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
      marginBottom:80,
      
      
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
