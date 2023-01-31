import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Dimensions,
  Button,
  Alert,
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
        <Text style={{fontSize:16,margin:10,alignSelf:'flex-start'}}>
          Payable Amount
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setVal}
          onSubmitEditing={(val)=>setVal(val.nativeEvent.text)}
          keyboardType={'numeric'}
          value={(val==','|| val=='.') ? Alert.alert('Enter valid input'): val.toString()}
          placeholder={`${val}`}
        />
        <View style={{flexDirection:'row',alignSelf:'flex-start'}}>
          {rates.map((val,id)=>{
            return(
              <View key={id} style={{marginRight:20,marginLeft:10}}>
                <Button title={`${val}`} style={{color:'#7E8274'}} onPress={()=>{setVal(val)}}/>
              </View>
            )
          })}
        </View>
        <Text style={{fontSize:16,margin:10,alignSelf:'flex-start'}}>
          Gold
        </Text>
        <TextInput
          style={styles.input}
          value={`${(val/goldRate).toFixed(4)} gm`}
        />
        {
          (val==',' || val=='.' || val==0) ? null:
          <View style={{backgroundColor:"#7E8274",borderRadius:10,alignSelf:"flex-start",margin:10}}>
            <Text style={{fontSize:16,margin:10,justifyContent:'center',alignSelf:'center',fontWeight:'bold',color:"white"}}>
              Breakdown
            </Text>
            <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginVertical:10,margin:10,width:Width*0.8}}/>
            <View>
              <View style={{flexDirection:'row',justifyContent:"space-between",margin:5}}>
                <Text style={{marginHorizontal:10,color:"white"}}>
                  Gold Quantity
                </Text>
                <Text style={{color:"white"}}>
                  {`${(val/goldRate).toFixed(4)} gm`}
                </Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:"space-between",margin:5}}>
                <Text style={{marginHorizontal:10,color:"white"}}>
                  Gold Value
                </Text>
                <Text style={{color:"white"}}>
                  {`${val} Rs`}
                </Text>
              </View>
              <View style={{flexDirection:'row',justifyContent:"space-between",margin:5}}>
                <Text style={{marginHorizontal:10,color:"white"}}>
                  GST
                </Text>
                <Text style={{color:"white"}}>
                  3 %
                </Text>
              </View>
              <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginVertical:20,margin:10,width:Width*0.8}}/>
              <View style={{flexDirection:'row',justifyContent:"space-between",margin:5}}>
                <Text style={{marginHorizontal:10,color:"white"}}>
                  Payable Amount
                </Text>
                <Text style={{color:"white"}}>
                  {`${(val*1.03).toFixed(2)} rs`}
                </Text>
              </View>
            </View>
          </View>
        }
        <View style={{width:Width*0.8,marginVertical:10,marginHorizontal:10,alignSelf:'flex-start'}}>
          <Button title='Buy'/>
        </View>
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
    height: 40,
    margin:10,
    width:Width*0.8,
    borderWidth: 1,
    padding: 10,
    borderRadius:10,
    borderWidth:0,
    alignSelf:'flex-start',
    backgroundColor:"#7E8274",
    color:'white'
  },
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