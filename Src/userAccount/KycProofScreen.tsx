import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,Image
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const list =['Pan Card',"Aadhaar Card",'Passport',"Driver's License"]

const ProofScreen=({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={{paddingHorizontal:Width/30,marginVertical:Width/60}}>
            <Text style={{fontSize:0.03*Height,color:'black',fontWeight:'bold',marginHorizontal:Width/30}}>
                KYC Verification
            </Text>
            <Text style={{fontSize:0.025*Height,color:'black',fontWeight:'600',marginHorizontal:Width/30,alignSelf:"center",marginVertical:Width/10}}>
                Select the Proof of ID
            </Text>
            {
                list.map((val,id)=>{
                    return(
                        <View key={id}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
                                <Text style={{color:'black',fontSize:0.043*Width,fontWeight:'400',paddingLeft:Width/30}}>
                                    {val}
                                </Text>
                                <TouchableOpacity onPress={()=>{navigation.navigate('KYC')}}>
                                    <Icon name="chevron-forward-circle" size={34} color="black" style={{paddingRight:Width/20}}/>  
                                </TouchableOpacity>
                            </View>
                            <View style={{borderBottomColor: 'black',borderBottomWidth: 0.002*Height,marginVertical:0.01*Height,width:Width*0.85,justifyContent:'flex-start',marginHorizontal:Width/30}}/>
                        </View>
                    )
                })
            }
            
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#FFDBE9",
      width:Width,
      height:Height,
    },
    input: {
      height: 0.06*Height,
      width:Width*0.8,
      marginVertical:Width/50,
      borderRadius:0.027*Height,
      alignSelf:'flex-start',
      backgroundColor:"#7E8274",
      color:'white',
      fontSize:0.02*Height
    },
    button:{
      backgroundColor: "#7E8274",
      height:0.06*Height,
      width:'100%',
      position:'absolute',
      bottom:0,
      justifyContent:'center',
    }
  });


export default ProofScreen;