import {
  View,
  FlatList,
  SafeAreaView,
  Image,
  Pressable,
  LogBox,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {useNavigation, useRoute} from '@react-navigation/native';
const back = require('../assets/back.png');
import Auth from '../auth';
let auth = new Auth();
LogBox.ignoreAllLogs();

const FavoriteScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const favorite = route?.params?.favorite;
  console.log(favorite);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View style={{marginTop: RFValue(20), paddingHorizontal: RFValue(20)}}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image
              source={back}
              style={{height: RFValue(16), width: RFValue(16)}}
            />
          </Pressable>
        </View>

        <View
          style={{
            alignItems: 'center',
            width: '100%',
            marginTop: RFValue(20),
          }}>
          <View style={{width: '85%'}}>
            <FlatList
              data={favorite}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <View
                  style={{
                    flex: 1,
                    marginBottom: RFValue(12),
                    alignItems: 'center',
                    alignContent: 'space-between',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                  }}>
                  <View>
                    <Image style={styles.imageThumbnail} source={item.src} />
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

export default FavoriteScreen;

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
