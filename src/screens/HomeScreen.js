import {
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Image,
  TextInput,
  FlatList,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {DataSource} from '../resources/data';
import Auth from '../auth';
const search = require('../assets/search.png');
const favoriteIcon = require('../assets/heart.png');
const cart = require('../assets/cart.png');
const logo = require('../assets/logo.png');
const whiteheart = require('../assets/whiteheart.png');
const redHeart = require('../assets/red-heart.png');
let auth = new Auth();
const HomeScreen = () => {
  const navigation = useNavigation();

  const [favorite, setFavorite] = useState([]);
  var [imgData, setImgData] = useState(DataSource);
  const addToFavorite = item => {
    if (!favorite.includes(item.id)) {
      // auth.setValue('favorite', data);
      let data = favorite.concat(item);
      setFavorite(data);
      let dd = [...imgData];
      for (let object of dd) {
        if (object.id === item.id) {
          object.isSeleted = true;
          break;
        } 
      }
      console.log(dd);
    }
  };

  const removeFavorite = item => {
    let index = favorite.indexOf(item);
    let temp = [...favorite.slice(0, index), ...favorite.slice(index + 1)];
    let dd = [...imgData];
      for (let object of dd) {
        if (object.id === item.id) {
          object.isSeleted = false;
          break;
        } 
      }
    setFavorite(temp);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFF'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#FFFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: RFValue(14),
          }}>
          <Image source={logo} style={styles.logoStyle} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: RFValue(30),
              width: '50%',
              borderWidth: 1,
              borderRadius: RFValue(12),
              paddingLeft: RFValue(5),
              marginBottom: RFValue(10),
            }}>
            <Image source={search} style={styles.searchIconStyle} />
            <TextInput
              placeholder="search"
              style={{width: '30%', marginLeft: RFValue(8)}}
            />
          </View>
          <Pressable
            onPress={() =>
              navigation.navigate('FavoriteScreen', {favorite: favorite})
            }>
            <Image source={favoriteIcon} style={styles.imgStyle} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ShoppingScreen')}>
            <Image source={cart} style={styles.imgStyle} />
          </Pressable>
        </View>

        <View
          style={{
            alignItems: 'center',
            width: '100%',
            marginBottom: RFValue(90),
            marginTop: RFValue(20),
          }}>
          <View style={{width: '85%'}}>
            <Text style={styles.subHeadingText}>the long wait is over</Text>
            <Text style={styles.headeringText}>winter collection</Text>
            <FlatList
              data={imgData}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View
                  style={{
                    flex: 1,
                    marginBottom: RFValue(12),
                    alignItems: 'center',
                  }}>
                  <View>
                    <Image style={styles.imageThumbnail} source={item.src} />
                    <Pressable
                      onPress={() => {
                        if (item.isSeleted) {
                          removeFavorite(item);
                        } else {
                          addToFavorite(item);
                        }
                      }}
                      style={{
                        position: 'absolute',
                        bottom: RFValue(5),
                        right: RFValue(5),
                      }}>
                      <Image
                        style={styles.imgStyle}
                        source={item.isSeleted ? redHeart : whiteheart}
                      />
                    </Pressable>
                  </View>
                </View>
              )}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logoStyle: {
    height: RFValue(30),
    width: RFValue(50),
  },
  imgStyle: {
    height: RFValue(20),
    width: RFValue(20),
  },
  searchIconStyle: {
    height: RFValue(14),
    width: RFValue(14),
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: RFValue(150),
    width: RFValue(90),
  },
  headeringText: {
    fontSize: RFValue(20),
    textTransform: 'uppercase',
    fontWeight: '700',
    color: 'lightgray',
    marginBottom: RFValue(20),
  },
  subHeadingText: {
    fontSize: RFValue(14),
    textTransform: 'uppercase',
    fontWeight: '400',
    color: 'lightgray',
  },
});
