import React,{useEffect,useState} from "react";
import {
    StyleSheet,
    TextInput,
    Text,
    View,
    Dimensions,
    Image,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

const Width = Dimensions.get('window').width;

const Height = Dimensions.get('window').height;

const KycScreen=({navigation})=>{
    return(
      <ScrollView>
        <View style={{flex:1,justifyContent:'flex-start',alignContent:'center',backgroundColor:"#CBC3E3",height:Height,width:Width}}>
            <Text style={{fontSize:0.03*Height,color:'black',fontWeight:'bold',alignSelf:"flex-start",marginHorizontal:Width/50,marginVertical:Width/50}}>
                    KYC Verification
            </Text>
            <View style={{marginHorizontal:Width/30,marginVertical:Width/30,alignSelf:'center',marginBottom:Width/10}}>
                <Text style={{fontSize:0.03*Height,color:'black',fontWeight:'bold',alignSelf:"center"}}>
                    Proof of ID Name
                </Text>
                <View style={{flexDirection:"row" ,backgroundColor:'white',alignSelf:'center',width:0.95*Width,marginTop:Width/10}}>
                  <Image style={{height:Width*0.3,width:Width*0.3,maxWidth:200,maxHeight:200,marginVertical:Width/30,marginHorizontal:Width/30}} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}/>
                  <View style={{marginHorizontal:Width/30,marginVertical:Width/30}}>
                    <Text style={{fontSize:0.02*Height,color:'black',fontWeight:'500',alignSelf:"flex-start"}}>
                       Name
                    </Text>
                    <Text style={{fontSize:0.02*Height,color:'black',fontWeight:'500',alignSelf:"flex-start",marginTop:Width*0.13}}>
                        ID Details
                    </Text>
                  </View>  
                </View>
            </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('KYCVerification')}}>
          <Text style={{color:"black",fontSize:0.04*Height,alignSelf:'center'}} >
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#FFDBE9"
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

export default KycScreen;