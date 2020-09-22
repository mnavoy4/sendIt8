import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput,
  Platform,
  StatusBar,
  Alert
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import signInStyles from '../styles/SignInStyles';

export default function SignIn(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (input) => {
    setEmail(input);
    console.log(email)
  }

  const handlePasswordChange = (input) => {
    setPassword(input);
    console.log(password)
  }

  return (
    <View style={signInStyles.container}>
      <Text>Email</Text>
      <View style={signInStyles.action}>
        <FontAwesome name='user-o' color='black' />
        <TextInput
          placeholder='Email' 
          placeholderTextColor='black'
          style={signInStyles.textInput}
          onChangeText={(input) => handleEmailChange(input)}
        />
      </View>
      <Text>Password</Text>
      <View style={signInStyles.action}>
        <Feather
          name='lock'
          color='black'
        />
        <TextInput
          placeholder='Password' 
          placeholderTextColor='black'
          style={signInStyles.textInput}
          onChangeText={(input) => handlePasswordChange(input)}
        />
      </View>
      <TouchableOpacity>
        <Text style={{color: '#352e5d', marginTop:15}}>Forgot password?</Text>
      </TouchableOpacity>
      

    </View>
  )
}