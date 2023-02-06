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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuyScreen from './Src/BuyScreen';
import PayScreen from './Src/PayScreen';
import BillScreen from './Src/BillScreen';
import WithdrawScreen from './Src/Withdraw/WithdrawScreen';
import KycScreen from './Src/Withdraw/KycScreen';
import TransferScreen from './Src/Withdraw/TransferScreen';
import WithdrawBill from './Src/Withdraw/WithdrawBill';
import KycVerification from './Src/Withdraw/KycVerification';


const Stack = createNativeStackNavigator();

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Buy">
        <Stack.Screen name="Buy" component={BuyScreen} />
        <Stack.Screen name="Pay" component={PayScreen} />
        <Stack.Screen name="Bill" component={BillScreen} />
      </Stack.Navigator>
      {/* <Stack.Navigator initialRouteName="Withdraw">
        <Stack.Screen name='Withdraw' component={WithdrawScreen}/>
        <Stack.Screen name='Transfer' component={TransferScreen}/>
        <Stack.Screen name='KYC' component={KycScreen}/>
        <Stack.Screen name='Bill' component={WithdrawBill}/>
        <Stack.Screen name='KYCVerification' component={KycVerification}/>
      </Stack.Navigator> */}
      
    </NavigationContainer>
  )
}    

export default App;