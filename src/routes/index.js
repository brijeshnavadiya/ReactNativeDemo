import * as React from 'react';
import {Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import ProfileScreen from '../screens/ProfileScreen';
import HomeScreen2 from '../screens/HomeScreen2';
import HomeScreen3 from '../screens/HomeScreen3';
import {RFValue} from 'react-native-responsive-fontsize';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const home = require('../assets/home.png');
const profile = require('../assets/user.png');
const cart = require('../assets/cart.png');
const home2 = require('../assets/home2.png');
const menu = require('../assets/menu.png');

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Stack.Navigator>
  );
}

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#FFF',
          },
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarIcon: ({focused}) => (
                <Image
                  source={home}
                  style={styles.imgStyle}
                />
              ),
          }}
        />
        <Tab.Screen
          name="HomeScreen2"
          component={HomeScreen2}
          options={{
            tabBarIcon: ({focused}) => (
                <Image
                  source={home2}
                  style={styles.imgStyle}
                />
              ),
          }}
        />
        <Tab.Screen
          name="HomeScreen3"
          component={HomeScreen3}
          options={{
            tabBarIcon: ({focused}) => (
                <Image
                  source={menu}
                  style={styles.imgStyle}
                />
              ),
          }}
        />
        <Tab.Screen
          name="ShoppingScreen"
          component={ShoppingScreen}
          options={{
            tabBarIcon: ({focused}) => (
                <Image
                  source={cart}
                  style={styles.imgStyle}
                />
              ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => (
                <Image
                  source={profile}
                  style={styles.imgStyle}
                />
              ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const styles = StyleSheet.create({
    imgStyle: {
      height: RFValue(20),
      width: RFValue(20),
    },
    img2Style: {
      height: RFValue(70),
      width: RFValue(70),
    },
  });