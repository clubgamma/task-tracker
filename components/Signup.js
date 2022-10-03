import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, TextInput, Button,Image ,Pressable,Text} from 'react-native'
import {Card} from 'react-native-paper'
import logo from '../assets/log2.png'
export default function Signup() {
    const [user,setUser] = useState({firstName:"",lastName:"",email:"",Nusername:"",password:""})
  return (
    <View style={styles.loginscreen}>
     <Image source={logo} style={styles.logo}/>
    <View style={styles.form}>
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
      <Pressable style={styles.button} onPress={()=>{}}>
      <Text style={{color:'white'}}>Signup</Text>
    </Pressable>
      
    </View>
    </View>
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
