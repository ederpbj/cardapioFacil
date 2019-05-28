import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeList from './HomeList';
import HomeProducts from './HomeProducts';

const AppNavigator = createStackNavigator({
    HomeList:{
		screen:HomeList
	},
	HomeProducts:{
		screen:HomeProducts
	}
},
//Teste
{
  tabBarPosition:'top',
  animationEnable:true,
  initialRouteName:'HomeList',
  tabBarOptions:{
    showIcon:true,
    showLabel:true,
		activeTintColor:'#FF0000'
	}}
);

export default createAppContainer(AppNavigator);
