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

const Stack = createNativeStackNavigator();

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Buy">
        <Stack.Screen name="Buy" component={BuyScreen} />
        <Stack.Screen name="Pay" component={PayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}    

export default App;