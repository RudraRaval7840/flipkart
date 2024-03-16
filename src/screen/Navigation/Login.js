import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegistrationScreen from './Register';


const LoginScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Retrieve user registration data from AsyncStorage
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

      if (username !== storedUsername) {
        Alert.alert('Error', 'username not match');
        return;
      }
      if (password !== storedPassword) {
        Alert.alert('Error', 'password not match');
        return;
      }

      // Navigate to the home screen upon successful login
      navigation.navigate('DrawerNavigator');
    } catch (error) {
      console.error('Error retrieving data:', error);
      Alert.alert('Error', 'An error occurred while retrieving data');
    }
  };

  return (
    <View>
      <Image
        source={require('../../assest/image/9391703.png')}
        style={styles.image}
      />
      <View>
        <Text style={styles.login}>Login</Text>
        <Text style={styles.loginText}>please Login to continue</Text>
      </View>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          placeholderTextColor={'black'}
        />
      </View>

      <View
        style={[
          styles.inputBox,
          {flexDirection: 'row', justifyContent: 'space-between'},
        ]}>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor={'black'}
        />
        <TouchableOpacity style={{alignSelf: 'center', marginRight: 9}}>
          <Text style={{fontSize: 17, color: 'black'}}>Forgot</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.loginbox} onPress={handleLogin}>
          <Text style={{alignSelf: 'center', fontSize: 20}}>Login</Text>
          <Image
            source={require('../../assest/image/fast-forward.png')}
            style={{height: 25, width: 30, alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lastText}>
        <Text style={styles.regTex}>Don't have an account?</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate(RegistrationScreen)}} >
          <Text style={[styles.regTex,{color:'rgba(254,153,94,255)'}]}> Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: 50,
  },
  login: {
    fontSize: 40,
    fontWeight: '900',
    fontStyle: 'italic',
    marginLeft: 20,
    color: 'black',
  },
  loginText: {
    marginLeft: 20,
    marginVertical: 10,
    fontSize: 20,
  },
  inputBox: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    alignSelf: 'center',
    marginVertical: 10,
    shadowColor: 'black',
    shadowColor: '#000000',
    justifyContent: 'center',
    borderRadius: 10,
  },
  loginbox: {
    height: 50,
    width: '40%',
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(254,153,94,255)',
    justifyContent: 'space-around',
    marginVertical: 10,
    borderRadius: 30,
    flexDirection: 'row',
    marginRight: 20,
  },
  lastText: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  regTex:{
    fontSize:17,
    
  }
});
export default LoginScreen;
