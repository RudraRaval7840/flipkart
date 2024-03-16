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
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MobileNumScreen from './MobileNumScreen';
import {launchCamera} from 'react-native-image-picker';
import OtpScreen from './OtpScreen';

const RegistrationScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  console.log('selectedImage', selectedImage);
  const handleCameraOpen = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        // console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  const handleRegister = async () => {
    if (!selectedImage) {
      Alert.alert('Error', 'take a photo ');
      return;
    }
    if (!username) {
      Alert.alert('Error', 'Fill The username ');
      return;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      Alert.alert('Error', 'please valid email. ');
      return;
    }
    if (!password.match('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')) {
      Alert.alert('Error', 'This is not a strong password ');
      return;
    }
    if (!confirmPassword) {
      Alert.alert('Error', 'Fill The confirmPassword ');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    if (password.length < 8) {
      Alert.alert('Error', '8 characters');
      return;
    }

    // Store user registration data in AsyncStorage
    try {
      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('email', email);
      // You might want to encrypt the password before storing it in AsyncStorage
      await AsyncStorage.setItem('password', password);
      await AsyncStorage.setItem('image', selectedImage);

      // Navigate to the next screen upon successful registration
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error saving data:', error);
      Alert.alert('Error');
    }
  };

  return (
    <KeyboardAvoidingView
    // style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}
    >
      <ScrollView>
        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity onPress={handleCameraOpen} style={styles.profile}>
            <Image
              source={
                selectedImage == ''
                  ? require('../../assest/image/user.png')
                  : {uri: selectedImage}
              }
              style={{
                height: '100%',
                width: '100%',
                alignSelf: 'center',
                borderRadius: 100,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* <Text>Register</Text> */}

        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.inputbox}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.inputbox}
        />

        {/* <TouchableOpacity
        // onPress={handleCameraOpen}
        style={{
          height: 40,
          width: '70%',
          alignSelf: 'center',
          backgroundColor: 'skyblue',
          justifyContent: 'center',
        }}>
        <Text style={{textAlign: 'center'}}>Open camera</Text>
      </TouchableOpacity> */}

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.inputbox}
        />
        <TextInput
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          style={styles.inputbox}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <Image
            source={require('../../assest/image/Vector144.png')}
            style={{height: 1, width: '40%', alignSelf: 'center'}}
          />
          <Text style={{fontSize: 17}}>OR</Text>
          <Image
            source={require('../../assest/image/Vector144.png')}
            style={{height: 1, width: '40%', alignSelf: 'center'}}
          />
        </View>
        <TouchableOpacity
          style={{marginTop: 30}}
          onPress={() => {
            navigation.navigate(OtpScreen);
          }}>
          <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
            Login With Mobile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 50,
            width: '40%',
            backgroundColor: 'rgba(254,153,94,0.6)',
            borderRadius: 20,
            justifyContent: 'center',
            alignSelf: 'center',
            marginVertical: 30,
          }}
          onPress={handleRegister}>
          <Text style={{textAlign: 'center', fontSize: 20, color: 'black'}}>
            Register
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  profile: {
    height: 194,
    width: 194,
    backgroundColor: 'rgba(254,153,94,255)',
    borderRadius: 100,
    justifyContent: 'center',
    marginVertical: 20,
  },
  inputbox: {
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
});

export default RegistrationScreen;
