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
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Ionicons';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const BillScreen=({ route, navigation })=>{
    const {payAmount,goldInGrams} = route.params;
    return (
       <ScrollView>
        <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',backgroundColor:"#CBC3E3",height:Height,width:Width}}>
            <Icon name="checkmark-circle" size={100} color="green" style={{marginVertical:0.05*Height}} />
            <Text style={{color:'black',fontSize:0.043*Width,fontWeight:'400',alignSelf:'center',paddingHorizontal:0.025*Width}}>                        
               Transaction Successful
            </Text>
            <Text style={{color:'black',fontSize:0.07*Width,fontWeight:'bold',alignSelf:'center',paddingHorizontal:0.025*Width,marginVertical:0.02*Height}}>                        
               Purchased
            </Text>
            <Text style={{color:'black',fontSize:0.07*Width,fontWeight:'bold',alignSelf:'center',paddingHorizontal:0.025*Width,marginVertical:0.02*Height}}>                        
               {`${goldInGrams} gm Worth`}
            </Text>
            <Text style={{color:'black',fontSize:0.07*Width,fontWeight:'bold',alignSelf:'center',paddingHorizontal:0.025*Width,marginVertical:0.02*Height}}>                        
               {`Rs ${payAmount}`}
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Buy')}>
              <Text style={{color:"black",fontSize:0.04*Height,alignSelf:'center'}} >
                 Back to Home
              </Text>
            </TouchableOpacity>

        </View>
        </ScrollView>
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

export default BillScreen;