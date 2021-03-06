import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

export default class Contato extends Component {

	static navigationOptions = {
		tabBarLabel:'Contato',
		//Teste
		tabBarOptions:{
			showIcon:true,
			showLabel:true,
			activeTintColor:'#FF0000'
		},
		//<

		tabBarIcon:({focused, tintColor}) => {
			if(focused) {
				return (
					<Image source={require('../assets/images/contato_azul.png')} style={styles.icone} />
				);
			} else {
				return (
					<Image source={require('../assets/images/contato_preto.png')} style={styles.icone} />
				);
			}
		}
	};

	render() {
		return (
			<View>
				<Text>Contatos sljadlksaj</Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	icone:{
		width:26,
		height:26
	}
});