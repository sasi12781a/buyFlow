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
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Ionicons';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

interface props{
  item:string;
  quantity:any;
}


const Sample=(p:props)=>{
  return(
    <View>
      <Text>
        {p.item}
      </Text>
      <Text>
        {p.quantity}
      </Text>
    </View>
  )
}

const KycVerification=({navigation})=>{
    return(
        <View style={{flex:1,backgroundColor:'#CBC3E3'}}>
            <Text style={{fontSize:0.03*Height,color:'black',fontWeight:'bold',alignSelf:"flex-start",marginHorizontal:Width/50,marginVertical:Width/50}}>
                KYC Verification
            </Text>
            <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                <Icon name="checkmark-circle" size={100} color="green" style={{marginHorizontal:Width/30}} />
                <Text style={{color:'black',fontSize:0.043*Width,fontWeight:'400',marginHorizontal:Width/30}}>                        
                  Verification Successful
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Withdraw')}>
              <Text style={{color:"black",fontSize:0.04*Height,alignSelf:'center'}} >
                Withdraw
              </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
      backgroundColor: "#7E8274",
      height:0.06*Height,
      width:'100%',
      position:'absolute',
      bottom:0,
      justifyContent:'center',
    }
});

export default KycVerification;