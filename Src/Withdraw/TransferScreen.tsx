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

const TransferScreen=({ route, navigation })=>{

    const [checked, setChecked] = useState([false,false,false]);

    const [add,setAdd]=useState(['Account 1','Account 2','Account 3',])

    // const {payAmount,goldInGrams} = route.params;

   const  twoOptionsAlertFunction = () => {
        Alert.alert(
          'Complete KYC Verification to Withdraw',
          '',
          [
            {text: 'Cancel', onPress: () => console.log('No Pressed'), style: 'cancel',},
            {text: 'Continue', onPress: () => navigation.navigate('KYC')},
            
          ],
          { cancelable: false }

        );
      }

    const check=(value:number)=>{
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
        setAdd([...add,`Account ${(add.length)+1}`])
    }

    return(
        <ScrollView>
        <View style={{justifyContent:'flex-start',alignItems:'center',backgroundColor:"#CBC3E3",height:Height,width:Width}}>
            <View style={{backgroundColor:'#E1E1E1',borderRadius:0.04*Width,marginVertical:Height/20,marginHorizontal:Width/30}}>
                <Text style={{color:'black',fontSize:0.06*Width,fontWeight:'bold',alignSelf:'flex-start',}}>
                    Select Saved Account
                </Text>
                <Text style={{color:'black',fontSize:0.05*Width,fontWeight:'400',alignSelf:'flex-start',paddingHorizontal:Width/60}}>
                    Amount
                </Text>
                <Text style={{color:'black',fontSize:0.07*Width,fontWeight:'bold',alignSelf:'flex-start',paddingHorizontal:Width/60}}>
                    {`Rs ${60}`}
                </Text>
                <View style={{justifyContent:"center",width:0.75*Width}}>
                    {
                        add.map((val,id)=>{
                           return(
                            <View key={id}>
                                <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:Width/60}} >
                                    <TouchableOpacity onPress={()=>check(id)}>
                                        <Text style={{color:'black',fontSize:0.043*Width,fontWeight:'400'}}>
                                            {val}
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={()=>check(id)}>
                                        <CheckBox
                                        style={{height:0.02*Width,width:0.02*Width}}
                                        isChecked={checked[id]}
                                        onClick={()=>{check(id)}}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={{borderBottomColor: 'black',borderBottomWidth: 0.002*Height,marginVertical:0.01*Height,width:Width*0.76,justifyContent:'flex-start',marginHorizontal:Width/50}}/>
                            </View>
                            )
                            
                        })
                    }
                </View>
                <View style={{flexDirection:"row",justifyContent:'space-between',width:0.75*Width,marginHorizontal:Width/40}}>
                    <TouchableOpacity onPress={()=>click()} >
                        <Text style={{color:'black',fontSize:0.043*Width,fontWeight:'400'}}>                        
                            Add new Account
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>click()} >
                        <Icon name="add-outline" size={30} color="black" />  
                    </TouchableOpacity>
                </View>
                <View style={{borderBottomColor: 'black',borderBottomWidth: 0.002*Height,width:Width*0.76,marginHorizontal:Width/50,marginVertical:0.01*Height}}/>
            </View>
            <TouchableOpacity style={styles.button}  onPress={()=> {checked.some(x=>x==true) ? navigation.navigate('Bill'):twoOptionsAlertFunction()}}>
                <Text style={{color:"black",fontSize:0.04*Height,alignSelf:'center'}} >
                    Confirm
                </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
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
export default TransferScreen;