import React,{useEffect,useState} from "react";
import {
    StyleSheet,
    TextInput,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';

const Width = Dimensions.get('window').width;

const Height = Dimensions.get('window').height;

const NUM_REGEX = new RegExp(/^[0-9]*$/);

let percentage=['25%','50%','70%','100%'];
let goldContain=23;


const WithdrawScreen=({ route, navigation })=>{
    const [goldPercent,setGoldPercent] =useState('');
    const [amount,setAmount]=useState('');
    const goldToSell=((parseInt(goldPercent)/100)*goldContain).toFixed(4).toString()
    
    const  alertScreen = () => {
      Alert.alert(
        "Why don't you save now,",
        `Grow your savings to RS.${40}. in just few years  `,
        [
          {text: 'Save', onPress: () => console.log('No Pressed'), style: 'cancel',},
          {text: 'Withdraw', onPress: () => navigation.navigate('Transfer')},
          
        ],
        { cancelable: false }

      );
    }


    return(
      <ScrollView>
        <View style={{justifyContent:'flex-start',alignItems:'center',backgroundColor:"#CBC3E3",height:Height,width:Width}}>
          <View style={{marginHorizontal:Width/30,marginVertical:Width/10}}>
            <Text style={{fontSize:0.02*Height,alignSelf:'flex-start',color:'black'}}>
                Gold
            </Text>
            <TextInput
                style={styles.input}
                placeholderTextColor='white'
                onChangeText={(val)=> parseInt(val)>100 ?? val.length>=4 ? Alert.alert('value should be less than 100'):NUM_REGEX.test(val) ? setGoldPercent(val):Alert.alert("Enter valid input")}
                keyboardType='number-pad'
                value={`${parseInt(goldPercent)>=101 ? parseInt(goldPercent.slice(0,2))/100*goldContain:parseInt(goldPercent)<100 ? goldPercent.slice(0,2): goldPercent.slice(0,3)}`}
                placeholder={goldPercent || amount ? amount : goldPercent}
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
            <Text style={{fontSize:0.02*Height,alignSelf:'flex-start',color:'black',marginTop:Width/15}}>
                Amount
            </Text>
            <TextInput
                style={styles.input}
                placeholderTextColor='white'
                onChangeText={(val)=> NUM_REGEX.test(val) ? setAmount(val):Alert.alert("Enter valid input")}
                keyboardType='number-pad'
                value={amount}
                placeholder={amount || goldPercent ? goldToSell:amount}
            />
            {(parseInt(goldPercent)>0 || parseInt(amount)>0) ??  (goldPercent || amount) ? 
            <View style={{backgroundColor:'#7E8274',borderBottomLeftRadius:Width/20,borderBottomRightRadius:Width/20}}>
              <Text style={{fontSize:0.02*Height,margin:0.02*Height,justifyContent:'center',alignSelf:'center',fontWeight:'bold',color:"white"}}>
                Breakdown
              </Text>
              <View style={{borderBottomColor: 'black',borderBottomWidth: 0.002*Height,marginVertical:Width/60}}/>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:Width/50,marginHorizontal:Width/60}}>
                <Text style={{marginHorizontal:10,color:"white",fontSize:0.02*Height}}>
                  Gold Quantity
                </Text>
                <Text style={{color:"white",fontSize:0.02*Height}}>
                {`${7} gm`}
                </Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:Width/50,marginHorizontal:Width/60}}>
                <Text style={{marginHorizontal:10,color:"white",fontSize:0.02*Height}}>
                  Gold Value
                </Text>
                <Text style={{color:"white",fontSize:0.02*Height}}>
                {`${8} gm`}
                </Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:Width/50,marginHorizontal:Width/60}}>
                <Text style={{marginHorizontal:10,color:"white",fontSize:0.02*Height}}>
                    GST
                </Text>
                <Text style={{color:"white",fontSize:0.02*Height}}>
                {`${8} gm`}
                </Text>
              </View>
              <View style={{borderBottomColor: 'black',borderBottomWidth: 0.002*Height,marginVertical:Width/60,width:0.70*Width,alignSelf:"center"}}/>         
              <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:Width/50,marginHorizontal:Width/60}}>
                <Text style={{marginHorizontal:10,color:"white",fontSize:0.02*Height}}>
                    Payable Amount
                </Text>
                <Text style={{color:"white",fontSize:0.02*Height}}>
                {`${8} gm`}
                </Text>
              </View>
            </View>:null}
          </View>
          <TouchableOpacity style={styles.button} onPress={()=>{alertScreen()}}>
              <Text style={{color:"black",fontSize:0.04*Height,alignSelf:'center'}} >
              Withdraw
              </Text>
          </TouchableOpacity>
        </View>
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
   
export default WithdrawScreen;