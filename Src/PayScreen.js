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
            <ScrollView style={{marginBottom:Width/10}}>
            <View style={{backgroundColor:'#E1E1E1',borderRadius:0.04*Width,marginVertical:Height/30,marginHorizontal:Width/30,}}>
                <Text style={{color:'black',fontSize:0.06*Width,fontWeight:'bold',alignSelf:'flex-start',paddingVertical:0.01*Width}}>
                    Select Payment Method
                </Text>
                <Text style={{color:'black',fontSize:0.05*Width,fontWeight:'400',alignSelf:'flex-start',marginHorizontal:Width/30}}>
                    Amount
                </Text>
                <Text style={{color:'black',fontSize:0.07*Width,fontWeight:'bold',alignSelf:'flex-start',marginHorizontal:Width/30,marginBottom:Width/60}}>
                    {`Rs ${payAmount}`}
                </Text>
                {
                add.map((val,id)=>{
                    return(
                        <View key={id}>
                            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}} >
                                <TouchableOpacity onPress={()=>check(id)}>
                                    <Text style={{color:'black',fontSize:0.043*Width,fontWeight:'400',paddingLeft:Width/30}}>
                                        {val}
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>check(id)}>
                                    <CheckBox
                                        style={{height:0.02*Width,width:0.02*Width,paddingRight:Width/10}}
                                        isChecked={checked[id]}
                                        onClick={()=>{check(id)}}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{borderBottomColor: 'black',borderBottomWidth: 0.002*Height,marginVertical:0.02*Height,width:Width*0.85,justifyContent:'flex-start',marginHorizontal:Width/30,alignSelf:'center'}}/>
                        </View>
                        )
                    })
                }
                <View style={{flexDirection:"row",alignItems:"flex-start",justifyContent:'space-between',}}>
                    <TouchableOpacity style={{paddingHorizontal:Width/30}} onPress={()=>click()} >
                        <Text style={{color:'black',fontSize:0.043*Width,fontWeight:'400'}}>                        
                            Add new Payment Method
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>click()} style={{paddingRight:Width/25,alignSelf:"center"}} >
                        <Icon name="add-outline" size={30} color="black" />  
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 0.002*Height,width:Width*0.85,marginHorizontal:Width/30,marginVertical:0.01*Height}}/>
            </View>
            </ScrollView>
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