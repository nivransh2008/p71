import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
 

 export default class ReadStory extends  React.Component{
   render(){
     return(
       <View>
       <Text style={styles.submitButtonText}>This is the readstory page</Text>
       </View>
     )
   }
 }

 const styles = StyleSheet.create({
   submitButtonText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8a3ab9',
  }
 })