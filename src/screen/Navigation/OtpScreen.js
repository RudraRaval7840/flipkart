import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';

const OtpScreen = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState();

  const item = [
    {label: '+91', value: 'INDIA'},
    {label: '+44', value: 'UK'},
    {label: '+1', value: 'CANADA'},
    {label: '+61', value: 'AUSTRALIA'},
  ];

  const [data, setData] = useState('');

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('DATA', '123456');
      navigation.navigate('MobileNumScreen');
    } catch (e) {
      console.log('not store ');
    }
  };
  //@MySuperStore:key
  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        <Image
          source={require('../../assest/image/9391703.png')}
          style={{height: 100, width: 100, alignSelf:'center', marginVertical: 50}}
        />
      </View>
      <View style={{width: '25%', flexDirection: 'row', marginLeft: 5}}>
        <DropDownPicker
          items={item}
          open={isOpen}
          setOpen={() => setIsOpen(!isOpen)}
          value={currentValue}
          setValue={val => setCurrentValue(val)}
          style={{color: 'red'}}
          placeholder="+91"
        />
        <TextInput
          style={{
            borderWidth: 1,
            width: '290%',
            height: 50,
            borderRadius: 9,
            fontSize: 20,
          }}
          placeholder="0000000000"
          maxLength={10}
          keyboardType="number-pad"
          value={data}
          onChangeText={txt => setData(txt)}
        />
      </View>
      <TouchableOpacity
        disabled={data.length <= 0 ? true : false}
        style={{
          height: 50,
          width: '60%',
          backgroundColor: 'rgba(254,153,94,0.6)',
          justifyContent: 'center',
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 100,
        }}
        onPress={() => {
          saveData();
        }}>
        <Text style={{textAlign: 'center', fontSize: 20}}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;
