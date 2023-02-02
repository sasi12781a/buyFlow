import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView
} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const PayScreen=({ route, navigation })=>{
    const {payAmount} = route.params;
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:"#CBC3E3",height:Height,width:Width}}>
            <View style={{flex:0.7,backgroundColor:'#E1E1E1',height:0.5*Height,width:0.8*Width,borderRadius:0.04*Width}}>
                <Text style={{color:'black',fontSize:0.06*Width,fontWeight:'bold',alignSelf:'flex-start',paddingVertical:0.03*Width}}>
                    Select Payment Method
                </Text>
                <Text style={{color:'black',fontSize:0.05*Width,fontWeight:'400',alignSelf:'flex-start',padding:0.03*Width}}>
                    Amount
                </Text>
                <Text style={{color:'black',fontSize:0.07*Width,fontWeight:'bold',alignSelf:'flex-start',padding:0.03*Width}}>
                    {`Rs ${payAmount}`}
                </Text>
                
            </View>
        </View>
    )
}

export default PayScreen;