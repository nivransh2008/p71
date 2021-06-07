import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,  TextInput, KeyboardAvoidingView} from 'react-native';
import MyHeader from './components/MyHeader'
import firebase from 'firebase'
import db from './components/config'
 

 export default class WriteStory extends  React.Component{
  constructor () {
    super()
    this.state={
      hasCameraPermissions : null,
      scanned : false,
      scannedBookId : '',
      scannedStudentId : '',
      buttonState : 'normal',
      transactionMessage : ''
    }
  }

  handleTransaction = async()=>{
    var transactionMessage = null;
    db.collection("books").doc(this.state.scannedBookId).get()
    .then((doc)=>{
         var book = doc.data()
         ToastAndroid.show(transactionMessage, ToastAndroid.SHORT)
        alert(transactionMessage)
       }


    )

    this.setState({
      transactionMessage : transactionMessage
    })
  }

   render(){
     return(
       <View style={{flex:1}}>
         <KeyboardAvoidingView>
       <View style={{flex:1}}>
        <MyHeader title = "Story Hub" navigation={this.props.navigation}/>
       </View>
       <View>
       <TextInput style={styles.formTextInput} 
        placeholder="Story title" keyboardType="text" onChangeText={(text)=>{
        this.setState({emailId:text})
    }}/>
    <View>
    <TextInput style={styles.formTextInput} 
        placeholder="Author" keyboardType="text" onChangeText={(text)=>{
        this.setState({emailId:text})
    }}/>
    </View>
    <View>
    <TextInput style={styles.formTextInput,{height:200, width:"55%", borderColor:'#ff0000', alignSelf:'center', marginTop:30}} 
        placeholder="Write your story" keyboardType="text" onChangeText={(text)=>{
        this.setState({emailId:text})
    }}/>
    </View>
       </View>
       <View>
       <TouchableOpacity
          style={{alignSelf:'center', width:300,
          height:50,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:25,
          backgroundColor:"#ff9800",
          shadowColor: "#000",
          shadowOffset: {
             width: 0,
             height: 8}}}
          onPress={async()=>{
            var transactionMessage = await this.handleTransaction();
            this.setState({scannedBookId:'', scannedStudentId:''})

          }}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        </View>
       </KeyboardAvoidingView>
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
    color: 'white',
  }, 

    loginBox: {
    width: 400,
    height: 50, 
    borderWidth: 1.5, 
    fontSize: 20, 
    margin:10, 
    marginLeft:600, 
    marginBottom:500, 
    marginTop: 200
  } ,
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  }, 
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:50
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    }
  },

 })