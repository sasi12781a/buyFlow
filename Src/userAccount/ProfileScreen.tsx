import React,{useState,useEffect,useRef} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ScrollView,Image
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ProfileScreen=({navigation})=>{
  const [name,setName]=useState('xxxx')
  const [show,setShow]=useState(false);
  const [phoneNo,setPhoneNo]=useState('')
  const [email,setEmail]=useState('');

  return(
    <View style={styles.container}>
      <View style={{paddingHorizontal:Width/30,marginVertical:Width/60}}>
        <Text style={{fontSize:0.03*Height,color:'black',fontWeight:'bold',marginHorizontal:Width/30}}>
          Profile
        </Text>
        <Image
          style={{height:0.3*Width,width:0.3*Width,alignSelf:"center",marginTop:Height/10,borderWidth:2,borderColor:'black',borderRadius:0.3*Width,maxWidth:200,maxHeight:200}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'space-between',marginTop:Width/30,width:Width,}}>
          {show ? <TextInput
            style={styles.input}
            blurOnSubmit={false}
            autoFocus={true}
            placeholderTextColor='green'
            onChangeText={(val)=>setName(val)}
            keyboardType='name-phone-pad'
            value={`${name.toString()}`}
            placeholder='Enter Name'/>:
            <Text style={{fontSize:0.03*Height,color:'black',fontWeight:'400',alignSelf:'flex-start',marginHorizontal:Width/25}}>
              Name: <Text style={{fontSize:0.03*Height,color:'green',fontWeight:'bold',alignSelf:'flex-start',marginHorizontal:Width/25}}>{name ? name[0].toUpperCase()+name.slice(1):'xxx'}</Text>
            </Text>}
          
          <TouchableOpacity onPress={()=>{setShow(!show)}}>
            <Icon name="pencil-outline" size={34} color="black" style={{marginRight:Width/30}}/>
          </TouchableOpacity>
        </View>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 0.003*Height,width:Width*0.95,alignSelf:'center'}}/>
        <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'space-between',marginTop:Width/40,width:Width,}}>
          <Text style={{fontSize:0.03*Height,color:'black',fontWeight:'400',alignSelf:'flex-start',marginHorizontal:Width/25}}>
            Phone Number: {phoneNo}
          </Text>
          <TouchableOpacity>
            <Icon name="pencil-outline" size={34} color="black" style={{marginRight:Width/30}}/>
          </TouchableOpacity>
        </View>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 0.003*Height,width:Width*0.95,alignSelf:'center'}}/>
        <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'space-between',marginTop:Width/40,width:Width,}}>
          <Text style={{fontSize:0.03*Height,color:'black',fontWeight:'400',alignSelf:'flex-start',marginHorizontal:Width/25}}>
            Email: {email}
          </Text>
          <TouchableOpacity onPress={()=>{}}>
            <Icon name="pencil-outline" size={34} color="black" style={{marginRight:Width/30}}/>
          </TouchableOpacity>
        </View>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 0.003*Height,width:Width*0.95,alignSelf:'center'}}/>
        <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'space-between',marginTop:Width/40,width:Width,}}>
          <Text style={{fontSize:0.03*Height,color:'black',fontWeight:'400',alignSelf:'flex-start',marginHorizontal:Width/25}}>
            KYC Verification
          </Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('Proof')}}>
            <Icon name="chevron-forward-circle" size={34} color="black" style={{marginRight:Width/30}}/>
          </TouchableOpacity>
        </View>
        <View style={{borderBottomColor: 'black',borderBottomWidth: 0.003*Height,width:Width*0.95,alignSelf:'center',paddingHorizontal:Width/30}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FFDBE9",
    width:Width,
    height:Height,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  input: {
    height: 0.06*Height,
    width:Width*0.8,
    borderRadius:0.027*Height,
    alignSelf:'flex-start',
    color:'green',
    fontSize:0.03*Height,
    paddingHorizontal:Width/30
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

export default ProfileScreen;