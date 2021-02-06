import React, { Component } from 'react';
import { KeyboardAvoidingView,ScrollView,Modal,View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class AdministratorScreen extends Component{
   constructor(){
     super();
     this.state={
       firstName: ''  ,
       lastName: '',
       Contact: '',
       Address : '',
       class: '',
       classTeacherOf : '',
       division: '',
       rollNo: '',
       isStudentModalVisible:'false',
       isTeacherModalVisible:'false',
       emailId: '',
       password: '',
       confirmPassword: '',
     }  
   }
   
      showModalForStudents=()=>{
       return(
        <View>
         <Modal
           animationType="fade"
           transparent={true}
           visible={this.state.isStudentModalVisible}
             >
            <View style={styles.modalContainer}>
              <ScrollView>
               <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                <Text style={styles.modalTitle}>Registration for Students</Text>

                <TextInput
                  style={styles.formTextInput}
                  placeholder={"First Name"}
                  maxLength={8}
                  onChangeText={(text)=>{
                    this.setState({
                        firstName: text
                    })  
                  }}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder={"Last Name"}
                  maxLength={10}
                  onChangeText={(text)=>{
                    this.setState({
                       lastName: text 
                    })  
                  }}
                
                />
                <TextInput
                style={styles.formTextInput}
                  placeholder={"Roll no"}
                  maxLength={3}
                  onChangeText={(text)=>{
                    this.setState({
                      rollNo: text  
                    })  
                  }}
                />
                <TextInput
                style={styles.formTextInput} 
                placeholder={"Class"}
                  maxLength={1}
                  onChangeText={(text)=>{
                      this.setState({
                        class: text  
                      })
                  }}
                />
                <TextInput
                 style={styles.formTextInput}
                  placeholder={"Contact"}
                  maxLength={10}
                  keyboardType="numeric"
                  onChangeText={(text)=>{
                   this.setState({
                      Contact: text
                    })
                  }}
                />
                <TextInput
                 style={styles.formTextInput}
                  placeholder={"Address"}
                  multiline={true}
                  onChangeText={(text)=>{
                   this.setState({
                     Address: text  
                   })   
                  }}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder={"email-address"}
                  keyboardType="email-address"
                  onChangeText={(text)=>{
                    this.setState({
                      emailId: text  
                    })  
                  }}
                />
                <TextInput
                 style={styles.formTextInput}
                  placeholder={"password"}
                  secureTextEntry={true}
                  onChangeText={(text)=>{
                   this.setState({
                     password: text  
                   })
                  }}
                  />
                  <TextInput
                   style={styles.formTextInput}
                  placeholder={"confirm password"}
                  secureTextEntry={true}
                  onChangeText={(text)=>{
                   this.setState({
                     confirmPassword: text  
                   })
                  }}
                   />
                   
                   <View style={styles.modalContainer}>
                     <TouchableOpacity 
                       onPress={()=>{this.studentSignUp()}}
                       style={styles.registerButton}
                       >
                       <Text style={styles.registerButtonText}>Register Student</Text>  
                     </TouchableOpacity>
                     </View>
                     <View style={styles.modalContainer}>
                     <TouchableOpacity  style={styles.cancelButton} onPress={()=>{this.setState({"isStudentModalVisible": false})}}>
                        <Text>Cancel</Text> 
                     </TouchableOpacity>
                   </View>
                </KeyboardAvoidingView>    
              </ScrollView>  
            </View>

         </Modal>
        </View>   
       )
      }
      showModalForTeachers=()=>{
        return(
         <View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.isTeacherModalVisible}
          >
               <View style={styles.modalContainer}>
              <ScrollView>
               <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                <Text style={styles.modalTitle}>Registration for Teachers</Text>
 
                 <TextInput
                   style={styles.formTextInput}
                   placeholder={"First Name"}
                   maxLength={8}
                   onChangeText={(text)=>{
                     this.setState({
                         firstName: text
                     })  
                   }}
                 
                 />
                 <TextInput
                   style={styles.formTextInput}
                   placeholder={"Last Name"}
                   maxLength={10}
                   onChangeText={(text)=>{
                     this.setState({
                        lastName: text 
                     })  
                   }}
                 
                 />
                 
                 <TextInput
                   style={styles.formTextInput}
                   placeholder={"Class teacher of"}
                   maxLength={2}
                   keyboardType="numeric"
                   onChangeText={(text)=>{
                       this.setState({
                         classTeacherOf : text 
                       })
                   }}
                 />
                 <TextInput
                   style={styles.formTextInput}
                   placeholder={"Contact"}
                   maxLength={10}
                   keyboardType="numeric"
                   onChangeText={(text)=>{
                    this.setState({
                       Contact: text
                     })
                   }}
                 />
                 <TextInput
                   style={styles.formTextInput}
                   placeholder={"Address"}
                   multiline={true}
                   onChangeText={(text)=>{
                    this.setState({
                      Address: text  
                    })   
                   }}
                 />
                 <TextInput
                   style={styles.formTextInput}
                   placeholder={"email-address"}
                   keyboardType="email-address"
                   onChangeText={(text)=>{
                     this.setState({
                      emailId: text  
                     })  
                   }}
                 />
                 <TextInput
                   style={styles.formTextInput}
                   placeholder={"password"}
                   secureTextEntry={true}
                   onChangeText={(text)=>{
                    this.setState({
                      password: text  
                    })
                   }}
                   />
                   <TextInput
                   style={styles.formTextInput}
                   placeholder={"confirm password"}
                   secureTextEntry={true}
                   onChangeText={(text)=>{
                    this.setState({
                     confirmPassword: text  
                    })
                   }}
                    />
                    
                    <View style={styles.modalContainer}>
                      <TouchableOpacity style={styles.registerButton} onPress={()=>{this.teacherSignUp()}}>
                        <Text style={styles.registerButtonText}>Register Teacher</Text>  
                      </TouchableOpacity>
                      </View>
                      <View style={styles.modalContainer}>
                      <TouchableOpacity style={styles.cancelButton} onPress={()=>{this.setState({"isTeacherModalVisible": false})}}>
                         <Text>Cancel</Text> 
                      </TouchableOpacity>
                    </View>
                 </KeyboardAvoidingView>    
               </ScrollView>  
             </View>
 
          </Modal>
         </View>   
        )
       }
    studentSignUp=(emailId,password,confirmPassword)=>{
      if(password !== confirmPassword)
      {
        Alert.alert("Password does'nt match \n Check Your Password")
      }
      else{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then(()=>{
         db.collection('students').add({
            first_name: this.state.firstName,
            last_name: this.state.firstName,
            contact: this.state.Contact,
            email_id : this.state.emailId,
            address: this.state.Address,
            roll_no: this.state.rollNo,
            class: this.state.class,
            password: this.state.password
          })
          return Alert.alert( 'User Added Successfully', '', [
            {text: 'OK', onPress: () => this.setState({"isStudentModalVisible" : false})}, ] );   
        })
        .catch((error)=> { // Handle Errors here.
            var errorCode = error.code; 
            var errorMessage = error.message; 
            return Alert.alert(errorMessage) });
      }
    }

    teacherSignUp=(emailId,password,confirmPassword)=>{
        if(password !== confirmPassword)
        {
          Alert.alert("Password does'nt match \n Check Your Password")
        }
        else{
          firebase.auth().createUserWithEmailAndPassword(emailId,password )
          .then(()=>{
            db.collection('teachers').add({
              first_name: this.state.firstName,
              last_name: this.state.firstName,
              contact: this.state.Contact,
              email_id : this.state.emailId,
              address: this.state.Address,
              classTeacher_of: this.state.classTeacherOf,
              password: this.state.password  
            })
            return Alert.alert( 'User Added Successfully', '', [
              {text: 'OK', onPress: () => this.setState({"isTeacherModalVisible" : false})}, ] );   
          })
          .catch((error)=> { // Handle Errors here.
              var errorCode = error.code; 
              var errorMessage = error.message; 
              return Alert.alert(errorMessage) });
        }
      }

    render(){
    return(
     <View style={styles.container}>
      <View>{this.showModalForStudents()}</View>
      <View>{this.showModalForTeachers()}</View>
       <View style={styles.profileContainer}>
         <Text style={styles.title}>Registration </Text>
       </View>
       <View>
       <TouchableOpacity 
         style={[styles.button,{marginBottom: 100}]}
         onPress={()=>this.setState({"isStudentModalVisible":true})}>
           
        <Image source={require("../assets/student.png")} style={{width: 50,height: 50}} />   
       <Text style={styles.buttonText}>Create Student Id</Text>  
       </TouchableOpacity>
       </View>
       <TouchableOpacity 
         style={[styles.button,{marginBottom: 130}]}
         onPress={()=>{
          this.setState({"isTeacherModalVisible":true})
        }} 
           >
       <Image source={require("../assets/teacher.png")} style={{width: 50,height: 52}}/>      
       <Text style={styles.buttonText}>Create Teacher Id</Text>
       </TouchableOpacity>
     </View>   
    )   
   }
}

const styles = StyleSheet.create({
    container:{ flex:1, backgroundColor:'#1F3081', alignItems: 'center', justifyContent: 'center' },
    profileContainer:{ flex:1, justifyContent:'center', alignItems:'center', },
     title :{ fontSize:45, fontWeight:'300', paddingBottom:30, color : '#ff3d00' }, 
     loginBox:{ width: 300, height: 40, borderBottomWidth: 1.5, borderColor : '#ff8a65', fontSize: 20, margin:10, paddingLeft:10 }, 
     KeyboardAvoidingView:{ flex:1, justifyContent:'center', alignItems:'center' }, 
     modalTitle :{ justifyContent:'center', alignSelf:'center', fontSize:30, color:'#ff5722', margin:50 }
    ,
    modalContainer:{ 
     flex:1,
     borderRadius:20, 
     justifyContent:'center', 
     alignItems:'center', 
     backgroundColor:"#ffff", 
     marginRight:30, 
     marginLeft : 30, 
     marginTop:80, 
     marginBottom:80
     }, 
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
    registerButton:{ 
      width:200, 
      height:40, 
      alignItems:'center', 
      justifyContent:'center', 
      borderWidth:1, 
      borderRadius:10, 
      marginTop:30
     }, 
    registerButtonText:{ 
      color:'#ff5722', 
      fontSize:15, 
      fontWeight:'bold'
     }, 
    cancelButton:{ 
     width:200, 
     height:30, 
     justifyContent:'center', 
     alignItems:'center', 
     marginTop:5
     },

    button:{ 
      width:300, 
      height:75, 
      justifyContent:'center', 
      alignItems:'center', 
      borderRadius:25, 
      backgroundColor:"#ff9800", 
      shadowColor: "#000", 
      shadowOffset: { width: 0, height: 8, }, 
      shadowOpacity: 0.30, 
      shadowRadius: 10.32, 
      elevation: 16, 
      padding: 10
     }, 
     buttonText:{
       color:'#ffff', 
       fontWeight:'200', 
       fontSize:20 
    }

})