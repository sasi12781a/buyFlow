import React,{useEffect,useState} from "react";
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

const NUM_REGEX = new RegExp(/^[0-9]*$/);

let percentage=['25%','50%','70%','100%'];

const WithdrawScreen=()=>{
    const [goldPercent,setGoldPercent] =useState('');
    const [amount,setAmount]=useState('');
    return(
        <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',backgroundColor:"#CBC3E3",height:Height,width:Width}}>
            <View style={{marginHorizontal:Width/30,marginVertical:Width/10}}>
                <Text style={{fontSize:0.02*Height,alignSelf:'flex-start',color:'black'}}>
                    Gold
                </Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor='white'
                    onChangeText={(val)=> parseInt(val)>100 ?? val.length>=4 ? Alert.alert('value should be less than 100'):NUM_REGEX.test(val) ? setGoldPercent(val):Alert.alert("Enter valid input")}
                    keyboardType={'numeric'}
                    value={`${parseInt(goldPercent)>=101 ? goldPercent.slice(0,2):parseInt(goldPercent)<100 ? goldPercent.slice(0,2): goldPercent.slice(0,3)}`}
                    placeholder={goldPercent}
                />
                <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:Width/50}}>
                    {percentage.map((val,id)=>{
                        return(
                            <TouchableOpacity key={id} style={{height:0.04*Height,width:0.14*Width,backgroundColor: '#7E8274',borderRadius:0.016*Height,justifyContent:"center"}} onPress={()=>{setGoldPercent(val)}}>
                               <Text style={{fontSize:0.02*Height,color:"black",alignSelf:"center"}}>{`${val}`}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                <Text style={{fontSize:0.02*Height,alignSelf:'flex-start',color:'black',marginTop:Width/5}}>
                    Amount
                </Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor='white'
                    onChangeText={(val)=> NUM_REGEX.test(val) ? setAmount(val):Alert.alert("Enter valid input")}
                    keyboardType={'numeric'}
                    value={amount}
                />
                
            </View>
        </View>
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
   
export default WithdrawScreen;