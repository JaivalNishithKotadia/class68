import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './screens/SearchScreen';
import BookTransactionScreen from './screens/BookTransactionScreen'
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component() {
  render(){
  return (
    

    <AppContainer/>



  )
  }

}
const TabNavigator=createBottomTabNavigator({
  BookTransaction:{screen:BookTransactionScreen},
  Search:{screen:SearchScreen}

})
const AppContainer=createAppContainer(TabNavigator);



