import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
  Button
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

let rates=[50,100,200,500];

let goldRate=5500;

const App=()=>{
  const [val,setVal] =useState('');
  const [gold,setGold]=useState('')
  return(
    <KeyboardAwareScrollView>
      <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',backgroundColor:"#CBC3E3",height:Height,width:Width}}>
        <Text style={{fontSize:0.02*Height,margin:0.02*Height,alignSelf:'flex-start',color:'black'}}>
          Payable Amount
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(val)=>setVal(val)}
          onSubmitEditing={(val)=>setVal(val.nativeEvent.text)}
          keyboardType={'numeric'}
          value={(val==','|| val=='.') ? Alert.alert('Enter valid input'): val.toString()}
          placeholder={`${val}`}
        />
        <View style={{flexDirection:'row',alignSelf:'flex-start',marginVertical:0.02*Height}}>
          {rates.map((val,id)=>{
            return(
              <TouchableOpacity key={id} style={{marginRight:0.02*Height,marginLeft:0.02*Height,height:0.04*Height,width:0.09*Width,backgroundColor:"#ADD8E6"}} onPress={()=>{setVal(val)}}>
                <Text style={{fontSize:0.02*Height,padding:0.012*Width,color:"black"}}>{`${val}`}</Text>
              </TouchableOpacity>
            )
          })}
        </View>
        <Text style={{fontSize:0.02*Height,margin:0.02*Height,alignSelf:'flex-start',color:'black'}}>
          Gold
        </Text>
        <TextInput
          style={styles.input}
          value={`${(val/goldRate).toFixed(4)} gm`}
        />
        {
          (val==',' || val=='.' || val==0) ? null:
          <View style={{backgroundColor:"#7E8274",borderRadius:10,alignSelf:"flex-start",margin:0.02*Height}}>
            <Text style={{fontSize:0.02*Height,margin:0.02*Height,justifyContent:'center',alignSelf:'center',fontWeight:'bold',color:"white"}}>
              Breakdown
            </Text>
            <View style={{borderBottomColor: 'black',borderBottomWidth: 0.002*Height,marginVertical:0.02*Height,margin:0.02*Height,width:Width*0.8}}/>
            <View>
              <View style={{flexDirection:'row',justifyContent:"space-between",margin:5}}>
                <Text style={{marginHorizontal:10,color:"white",fontSize:0.02*Height}}>
                  Gold Quantity
                </Text>
                <Text style={{color:"white",fontSize:0.02*Height}}>
                  {`${(val/goldRate).toFixed(4)} gm`}
                </Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:"space-between",margin:5}}>
                <Text style={{marginHorizontal:10,color:"white",fontSize:0.02*Height}}>
                  Gold Value
                </Text>
                <Text style={{color:"white",fontSize:0.02*Height}}>
                  {`${val} Rs`}
                </Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:"space-between",margin:5}}>
                <Text style={{marginHorizontal:10,color:"white",fontSize:0.02*Height}}>
                  GST
                </Text>
                <Text style={{color:"white",fontSize:0.02*Height}}>
                  3 %
                </Text>
              </View>
              <View style={{borderBottomColor: 'black',borderBottomWidth: 0.002*Height,marginVertical:0.02*Height,margin:0.02*Height,width:Width*0.8}}/>
              <View style={{flexDirection:'row',justifyContent:"space-between",margin:5}}>
                <Text style={{marginHorizontal:10,color:"white",fontSize:0.02*Height}}>
                  Payable Amount
                </Text>
                <Text style={{color:"white",fontSize:0.02*Height}}>
                  {`${(val*1.03).toFixed(2)} rs`}
                </Text>
              </View>
            </View>
          </View>
        }
        <TouchableOpacity style={styles.button}>
          <Text style={{color:"black",fontSize:0.02*Height}} >
            Buy
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
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
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    height:0.06*Height,
    width:0.8*Width,
    padding:0.013*Height,
    fontSize:0.02*Height,
    alignSelf:"flex-start",
    marginHorizontal:0.02*Height,
    marginVertical:0.02*Height
  }
});

// function App() {
//   const [name, setName] = useState("");
//   return (
//     <View style={styles.container}>
//       <Text>Write name.</Text>
//       <TextInput
//         style={styles.input}
//         onSubmitEditing={(value) => setName(value.nativeEvent.text)}
//         placeholder={`${name}`}
//         value={name}
//       />
//       {name ? <Text>Welcome, {name}!</Text>:null}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor:"#FFDBE9"
//   },
//   input: {
//     height: 40,
//     margin:10,
//     width:'100%',
//     borderWidth: 1,
//     padding: 10,
//     borderRadius:10,
//     borderWidth:0,
//     alignSelf:'flex-start',
//     backgroundColor:"#7E8274",
//     color:'white'
//   },
// });

export default App;