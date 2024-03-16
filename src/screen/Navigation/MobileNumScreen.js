import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNavigator from '../drawer/DrawerNavigator';

const MobileNumScreen = ({navigation}) => {
  const et1 = useRef();
  const et2 = useRef();
  const et3 = useRef();
  const et4 = useRef();
  const et5 = useRef();
  const et6 = useRef();

  const [f1, setF1] = useState('');
  const [f2, setF2] = useState('');
  const [f3, setF3] = useState('');
  const [f4, setF4] = useState('');
  const [f5, setF5] = useState('');
  const [f6, setF6] = useState('');

  const [count, setCount] = useState(60);
  useEffect(() => {
    const interval = setInterval(() => {
      if (count == 0) {
        clearInterval(interval);
      } else {
        setCount(count - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [count]);

  const [num, setNum] = useState('');
  console.log({num});
  const getotp = async () => {
    AsyncStorage.getItem('DATA')
      .then(data => {
        setNum(data);
      })
      .catch(e => {
        console.log(e);
      });
  };
  useEffect(() => {
    getotp();
  }, []);

  const otpValidate = () => {
    let otp = num;
    let enterdOtp = f1 + f2 + f3 + f4 + f5 + f6;
    if (enterdOtp == otp) {
      // Alert.alert('otp matched');
      navigation.navigate('Main');
      AsyncStorage.removeItem('DATA');
    } else {
      Alert.alert('wrong otp');
    }
  };
  return (
    <View style={styles.conatiner}>
      <View style={styles.yourotp}>
        <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
          Your OTP
        </Text>

        <Text
          style={{
            fontSize: 20,
            color: 'rgba(254,153,94,10)',
            textAlign: 'center',
          }}>
          {num}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 50,
          alignSelf: 'center',
          color: 'black',
        }}>
        OTP verification
      </Text>
      <View style={styles.otpView}>
        <TextInput
          ref={et1}
          style={[
            styles.inputView,
            {borderColor: f1.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f1}
          onChangeText={txt => {
            setF1(txt);
            if (txt.length >= 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et2}
          style={[
            styles.inputView,
            {borderColor: f2.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f2}
          onChangeText={txt => {
            setF2(txt);
            if (txt.length >= 1) {
              et3.current.focus();
            } else if (txt.length < 1) {
              et1.current.focus();
            }
          }}
        />
        <TextInput
          ref={et3}
          style={[
            styles.inputView,
            {borderColor: f3.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f3}
          onChangeText={txt => {
            setF3(txt);
            if (txt.length >= 1) {
              et4.current.focus();
            } else if (txt.length < 1) {
              et2.current.focus();
            }
          }}
        />
        <TextInput
          ref={et4}
          style={[
            styles.inputView,
            {borderColor: f4.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f4}
          onChangeText={txt => {
            setF4(txt);
            if (txt.length >= 1) {
              et5.current.focus();
            } else if (txt.length < 1) {
              et3.current.focus();
            }
          }}
        />
        <TextInput
          ref={et5}
          style={[
            styles.inputView,
            {borderColor: f5.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f5}
          onChangeText={txt => {
            setF5(txt);
            if (txt.length >= 1) {
              et6.current.focus();
            } else if (txt.length < 1) {
              et4.current.focus();
            }
          }}
        />
        <TextInput
          ref={et6}
          style={[
            styles.inputView,
            {borderColor: f6.length >= 1 ? 'blue' : '#000'},
          ]}
          keyboardType="number-pad"
          maxLength={1}
          value={f6}
          onChangeText={txt => {
            setF6(txt);
            if (txt.length >= 1) {
              et6.current.focus();
            } else if (txt.length < 1) {
              et5.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.resendView}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: count == 0 ? 'blue' : 'gray',
          }}
          onPress={() => {
            setCount(60);
          }}>
          Resend
        </Text>
        <Text style={{marginLeft: 10, fontSize: 20}}>{count + ' second'}</Text>
      </View>
      <TouchableOpacity
        disabled={
          f1 !== '' &&
          f2 !== '' &&
          f3 !== '' &&
          f4 !== '' &&
          f5 !== '' &&
          f6 !== ''
            ? false
            : true
        }
        style={[
          styles.verifyOtpBtn,
          {
            backgroundColor:
              f1 !== '' &&
              f2 !== '' &&
              f3 !== '' &&
              f4 !== '' &&
              f5 !== '' &&
              f6 !== ''
                ? 'rgba(254,153,94,10)'
                : '#949494',
          },
        ]}
        onPress={() => otpValidate()}>
        <Text style={styles.btnText}>Verify OTP</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {flex: 1},

  otpView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 100,
    // borderRadius:7
  },
  inputView: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 5,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
  },
  verifyOtpBtn: {
    width: '50%',
    height: 55,
    backgroundColor: 'blue',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
  },
  resendView: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  yourotp: {
    marginVertical: 20,
    backgroundColor: 'rgba(192,100,255,0.4)',
    width: '50%',
    borderRadius: 20,
    alignSelf: 'center',
  },
});

export default MobileNumScreen;
