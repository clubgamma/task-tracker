import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import Task from "./Task";
function Home({ navigation }) {
  return (
    <View style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
      <TouchableOpacity
              onPress={() => {
                navigation.navigate("Task");
              }}
            >
              <Text style={{ color: "green", marginTop: 6, fontSize:20,fontWeight:'bold' }}>
                Click to Open Tasks!
              </Text>
            </TouchableOpacity>
        
      </View>
    
  );
}


const styles = StyleSheet.create({
  welcome: {
    padding: 10,
    fontSize: 20,
    fontWeight: "400",
  },
  taskContainer: {
    paddingHorizontal: 20,
  },
  task: {
    marginVertical: 4,
    padding: 10,
    borderColor: "yellow",
    borderWidth: 1,
    borderRadius: 2,
    elevation: 2,
  },
});
export default Home;
