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
});

export default createAppContainer(AppNavigator);
