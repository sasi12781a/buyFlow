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
import Buy from './Src/Buy';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const App=()=>{
  return(
    <NavigationContainer>
      <Buy/>
    </NavigationContainer>
  )
}    

export default App;