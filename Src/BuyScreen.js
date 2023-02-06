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

let rates=[50,100,200,500];

let goldRate=5500;

const BuyScreen=({ navigation })=>{
  const [val,setVal] =useState(0);
  
  
  const NUM_REGEX = new RegExp(/^[0-9]*$/);

  return(
    <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',backgroundColor:"#CBC3E3",height:Height,width:Width,}}>
      <View style={{marginHorizontal:Width/30}}>
        <Text style={{fontSize:0.02*Height,margin:0.02*Height,alignSelf:'flex-start',color:'black'}}>
          Payable Amount
        </Text>
        <TextInput
          style={styles.input}
          placeholderTextColor='white'
          onChangeText={(val)=> NUM_REGEX.test(val.slice(2)) ? setVal(val.slice(2)):Alert.alert("Enter valid input")}
          keyboardType={'numeric'}
          value={`₹ ${val.toString()}`}
          placeholder={`${val}`}
        />
        <View style={{flexDirection:'row',alignSelf:'flex-start',marginVertical:0.02*Height}}>
          {rates.map((val,id)=>{
            return(
              <TouchableOpacity key={id} style={{marginRight:0.02*Height,marginLeft:0.02*Height,height:0.04*Height,width:0.09*Width,backgroundColor: 'transparent',borderColor:'black',borderWidth:0.001*Width,borderRadius:0.009*Height,justifyContent:"center"}} onPress={()=>{setVal(val)}}>
                <Text style={{fontSize:0.02*Height,color:"black",alignSelf:"center"}}>{`${val}`}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
        <Text style={{fontSize:0.02*Height,margin:0.02*Height,alignSelf:'flex-start',color:'black'}}>
          Gold
        </Text>
        <TextInput
          style={styles.input}
                    onChangeText={(val)=> NUM_REGEX.test(val.slice(2)) ? setVal(val.slice(2)):Alert.alert("Enter valid input")}

          value={`${(val/goldRate).toFixed(4)} gm`}
        />
        {
          NUM_REGEX.test(val) ? val==0 ? null:
          <View style={{backgroundColor:"#7E8274",borderRadius:10,alignSelf:"flex-start",margin:0.02*Height,width:0.8*Width}}>
            <Text style={{fontSize:0.02*Height,margin:0.02*Height,justifyContent:'center',alignSelf:'center',fontWeight:'bold',color:"white"}}>
              Breakdown
            </Text>
            <View style={{borderBottomColor: 'black',borderBottomWidth: 0.002*Height,marginVertical:0.02*Height,width:0.76*Width,marginLeft:0.02*Width}}/>
            <View>
              <View style={{flexDirection:'row',justifyContent:"space-between",margin:0.005*Height}}>
                <Text style={{marginHorizontal:10,color:"white",fontSize:0.02*Height}}>
                  Gold Quantity
                </Text>
                <Text style={{color:"white",fontSize:0.02*Height}}>
                  {`${(val/goldRate).toFixed(4)} gm`}
                </Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:"space-between",margin:0.005*Height}}>
                <Text style={{marginHorizontal:10,color:"white",fontSize:0.02*Height}}>
                  Gold Value
                </Text>
                <Text style={{color:"white",fontSize:0.02*Height}}>
                  {`${val} Rs`}
                </Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:"space-between",margin:0.005*Height}}>
                <Text style={{marginHorizontal:10,color:"white",fontSize:0.02*Height}}>
                  GST
                </Text>
                <Text style={{color:"white",fontSize:0.02*Height}}>
                  3 %
                </Text>
              </View>
              <View style={{borderBottomColor: 'black',borderBottomWidth: 0.002*Height,marginVertical:0.02*Height,width:Width*0.76,marginLeft:0.02*Width}}/>
              <View style={{flexDirection:'row',justifyContent:"space-between",margin:0.005*Height}}>
                <Text style={{marginHorizontal:10,color:"white",fontSize:0.02*Height}}>
                  Payable Amount
                </Text>
                <Text style={{color:"white",fontSize:0.02*Height}}>
                  {`${(val*1.03).toFixed(2)} rs`}
                </Text>
              </View>
            </View>
          </View>:null
        }
      </View>
      <TouchableOpacity style={styles.button} onPress={() => val>0 ? navigation.navigate('Pay',{payAmount:(val*1.03).toFixed(2),goldInGrams:(val/goldRate).toFixed(4)}):Alert.alert('Please enter Amount')}>
        <Text style={{color:"black",fontSize:0.04*Height,alignSelf:'center'}} >
          Buy
        </Text>
      </TouchableOpacity>
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
    margin:0.02*Height,
    width:Width*0.8,
    borderWidth: 1,
    padding: 0.02*Height,
    borderRadius:0.02*Height,
    borderWidth:0,
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

export default BuyScreen;