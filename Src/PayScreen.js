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

import CheckBox from 'react-native-check-box';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const PayScreen=({ route, navigation })=>{

    const [checked, setChecked] = useState([false,false,false]);

    const [add,setAdd]=useState(['Payment Method 1','Payment Method 2','Payment Method 3',])

    const {payAmount,goldInGrams} = route.params;

    const check=(value)=>{
        const updatedChecked = [...checked];
        let up=[]
        if (checked[value]==true){
            updatedChecked[value] = !checked[value]
            setChecked(updatedChecked);
            up=[...updatedChecked]
        }else{
            up[value]=!updatedChecked[value]
            setChecked(up)
        }
        
    }
    const click=()=>{
        setAdd([...add,`Payment Method ${(add.length)+1}`])
    }

    return(
        
        <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',backgroundColor:"#CBC3E3",height:Height,width:Width}}>
            <View style={{backgroundColor:'#E1E1E1',height:0.5*Height,width:0.8*Width,borderRadius:0.04*Width,marginVertical:0.06*Height}}>
                <Text style={{color:'black',fontSize:0.06*Width,fontWeight:'bold',alignSelf:'flex-start',paddingVertical:0.01*Width}}>
                    Select Payment Method
                </Text>
                <Text style={{color:'black',fontSize:0.05*Width,fontWeight:'400',alignSelf:'flex-start',padding:0.01*Width,paddingHorizontal:0.03*Width}}>
                    Amount
                </Text>
                <Text style={{color:'black',fontSize:0.07*Width,fontWeight:'bold',alignSelf:'flex-start',padding:0.01*Width,paddingHorizontal:0.03*Width}}>
                    {`Rs ${payAmount}`}
                </Text>
                <View style={{justifyContent:"center",alignItems:'center'}}>
                    {
                        add.map((val,id)=>{
                           return(
                               <View key={id}>
                                    <View>
                                        <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between',padding:0.01*Width,paddingHorizontal:0.03*Width}} onPress={()=>check(id)}>
                                            <Text style={{color:'black',fontSize:0.043*Width,fontWeight:'400',alignSelf:'flex-start'}}>
                                                {val}
                                            </Text>
                                            <CheckBox
                                            style={{height:0.02*Width,width:0.02*Width,padding:0.03*Width,paddingHorizontal:0.03*Width}}
                                            isChecked={checked[id]}
                                            onClick={()=>{}}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{borderBottomColor: 'black',borderBottomWidth: 0.002*Height,marginVertical:0.01*Height,width:Width*0.76,justifyContent:"center",paddingHorizontal:0.02*Width}}/>
                               </View>
                            )
                            
                        })
                    }
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{color:'black',fontSize:0.043*Width,fontWeight:'400',alignSelf:'flex-start',padding:0.01*Width,paddingHorizontal:0.04*Width}}>                        
                        Add new Payment Method
                    </Text>
                    <TouchableOpacity onPress={()=>click()}>
                       <Icon name="add-outline" size={30} color="black" />  
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 0.002*Height,marginVertical:0.01*Height,width:Width*0.76,marginLeft:0.02*Width}}/>
            </View>
            <TouchableOpacity style={styles.button}  onPress={() => checked.some(x=>x==true) ? navigation.navigate('Bill',{payAmount:payAmount,goldInGrams:goldInGrams}):Alert.alert("Please select Payment Method")}>
                <Text style={{color:"black",fontSize:0.04*Height,alignSelf:'center'}} >
                    Pay
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'white',
        height:0.06*Height,
        width:'100%',
        position:'absolute',
        bottom:0,
        justifyContent:'center',
    }
})
export default PayScreen;