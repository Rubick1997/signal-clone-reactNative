import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";

const LoginScreen = () => {
	return (
		<View>
			<StatusBar style='light' />
			<Image
				source={{
					uri:
						"https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
				}}
				style={{ width: 200, height: 200 }}
			/>
			<View style={styles.inputContainer}>
				<Input placeholder='Email' autoFocus type='Email' />
			</View>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	inputContainer: {},
});
