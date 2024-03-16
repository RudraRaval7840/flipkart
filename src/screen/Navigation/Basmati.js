import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Basmati = ({navigation}) => {
  const Packet = [
    {
      id: '1',
      img: require('../../assest/image/Atta1.png'),
      off: '25%',
      text: 'Chakki Fresh Atta(Akho Ghauno Lot)',
      btn: 'Add',
      price: 'MRP',
      mrp: '480',
      MRP: '$349',
      Brand: 'Fortune',
      EXP: 'EXP.14 May 2024',
    },
    {
      id: '2',
      img: require('../../assest/image/juhik-removebg-preview.png'),
      off: '25%',
      text: 'Chakki Fresh Atta(Akho Ghauno Lot)',
      btn: 'Add',
      price: 'MRP',
      mrp: '245',
      MRP: '$189',
      Brand: 'Fortune',
      EXP: 'EXP.14 May 2024',
    },
    {
      id: '3',
      img: require('../../assest/image/abc.png'),
      off: '25%',
      text: 'Wheat fresh Atta by Flipkart Grocery\n(Akha Ghouno LOT) ',
      btn: 'Add',
      price: 'MRP',
      mrp: '300',
      MRP: '$181',
      Brand: 'Classic',
      EXP: 'EXP.14 May 2024',
    },
    {
      id: '4',
      img: require('../../assest/image/Atta1.png'),
      off: '25%',
      text: 'Chakki Fresh Atta(Akho Ghauno Lot)',
      btn: 'Add',
      price: 'MRP',
      mrp: '258',
      MRP: '$245',
      Brand: 'Pillsbury',
      EXP: 'EXP.14 May 2024',
    },
    {
      id: '5',
      img: require('../../assest/image/Atta1.png'),
      off: '25%',
      text: 'Yello Toor/Arhar Dal (Tuver Dal)\n(Split)',
      btn: 'Add',
      price: 'MRP',
      mrp: '583',
      MRP: '$554',
      Brand: 'TATA SAMPANN',
      EXP: 'EXP.14 May 2024',
    },
    {
      id: '6',
      img: require('../../assest/image/Atta1.png'),
      off: '25%',
      text: 'Everyday Basmati Rice (Basmati \n Chokha) (Medium Grain, Raw)',
      btn: 'Add',
      price: 'MRP',
      mrp: '495',
      MRP: '$369',
      Brand: 'INDIA GATE',
      EXP: 'EXP.14 May 2024',
    },
    {
      id: '7',
      img: require('../../assest/image/Atta1.png'),
      off: '25%',
      text: 'Atta With Multigrains (Mulitigrain\n Lot)',
      btn: 'Add',
      price: 'MRP',
      mrp: '364',
      MRP: '$319',
      Brand: 'AASHIRVAAD',
      EXP: 'EXP.01 May 2024',
    },
    {
      id: '8',
      img: require('../../assest/image/Atta1.png'),
      off: '25%',
      text: 'Chakki Fresh Atta(Akho Ghauno Lot)',
      btn: 'Add',
      price: 'MRP',
      mrp: '480',
      MRP: '$349',
      Brand: 'Fortune',
      EXP: 'EXP.14 May 2024',
    },
    {
      id: '9',
      img: require('../../assest/image/Atta1.png'),
      off: '25%',
      text: 'Chakki Fresh Atta(Akho Ghauno Lot)',
      btn: 'Add',
      price: 'MRP',
      mrp: '480',
      MRP: '$349',
      Brand: 'Fortune',
      EXP: 'EXP.14 May 2024',
    },
    {
      id: '10',
      img: require('../../assest/image/Atta1.png'),
      off: '25%',
      text: 'Chakki Fresh Atta(Akho Ghauno Lot)',
      btn: 'Add',
      price: 'MRP',
      mrp: '480',
      MRP: '$349',
      Brand: 'Fortune',
      EXP: 'EXP.14 May 2024',
    },]
  return (
    <View>
      <View style={styles.header}>
        <View
          style={{
            marginLeft: 15,
            flexDirection: 'row',
            width: 170,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assest/image/back.png')}
              style={styles.headerimg}
            />
           
          </TouchableOpacity>
          <Text style={{fontSize: 20, color: 'black'}}>Basmati Rice</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 80,
            marginRight: 15,
          }}>
          <TouchableOpacity>
            {/* <Image
              source={require('../../assest/image/search.png')}
              style={styles.headerimg}
            /> */}
             <Ionicons name='search-outline' size={26} color='black'/>
          </TouchableOpacity>
          <TouchableOpacity>
            {/* <Image
              source={require('../../assest/image/cart.png')}
              style={styles.headerimg}
            /> */}
             <Ionicons name='cart-outline' size={26} color='black'/>

          </TouchableOpacity>
        </View>
      </View>
      <View>
      <View style={{}}>
        <FlatList
          //   numColumns={2}
          //   columnWrapperStyle={styles.row}
          data={Packet}
          renderItem={({item}) => (
            <>
              <View style={styles.item}>
                <View style={{}}>
                <Image source={item.img} style={styles.img} />
                </View>
                <View style={styles.part2}>
                  <Text style={styles.tet}>{item.Brand}</Text>
                  <Text style={styles.text}>{item.text}</Text>
                  
                  <Text style={styles.EXP}>{item.EXP}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      //   backgroundColor: 'red',
                      justifyContent: 'space-between',
                      width: 250,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: 120,
                        justifyContent: 'space-between',
                        //   backgroundColor: 'red',
                        // borderWidth: 1,
                      }}>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: 60,
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Text style={styles.price}>{item.price}</Text>
                        <Text style={styles.mrp}>{item.mrp}</Text>
                      </View>
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <Text style={styles.MRP}>{item.MRP}</Text>
                      </View>
                    </View>
                    <TouchableOpacity style={styles.AddBtn}>
                      <Text style={styles.AddBtnText}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <Image
                source={require('../../assest/image/Vector14.png')}
                style={{height: 2, marginTop: 20}}
              />
            </>
          )}
        />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerimg: {
    height: 25,
    width: 25,
    // alignSelf:'center',
  },

//  FlatList

item: {
  flexDirection: 'row',
  // height: 200,
  // borderWidth:1
},
img: {
  height: 120,
  width: 100,
  marginLeft: 10,
  marginTop: 15,
},
part2: {
  marginLeft: 10,
  marginTop: 15,
},
text: {
  fontSize: 15,
  color: 'black',
},
EXP: {
  marginVertical: 2,
  marginBottom: 20,
},
mrp: {
  textDecorationLine: 'line-through',
},
price: {},
MRP: {
  fontSize: 20,
  color: 'black',
},

AddBtn: {
  height: 35,
  width: 80,
  borderWidth: 1.5,
  justifyContent: 'center',
  marginRight: 15,
  borderColor: 'blue',
  borderRadius: 3,
},
AddBtnText: {
  textAlign: 'center',
  fontSize: 16,
  color: 'blue',
},

});

export default Basmati;
