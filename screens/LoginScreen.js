import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { auth } from "../firebase";
const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				navigation.replace("Home");
			}
		});

		return unsubscribe;
	}, []);

	const signIn = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.catch((error => alert(error.message)));
	};

	return (
		<KeyboardAvoidingView behavior='padding' style={styles.container}>
			<StatusBar style='light' />
			<Image
				source={{
					uri:
						"https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
				}}
				style={{ width: 150, height: 150 }}
			/>
			<View style={styles.inputContainer}>
				<Input
					placeholder='Email'
					autoFocus
					type='Email'
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					placeholder='Password'
					secureTextEntry
					type='password'
					value={password}
					onChangeText={(text) => setPassword(text)}
					onSubitEditing={signIn}
				/>
			</View>
			<Button containerStyle={styles.button} onPress={signIn} title='Login' />
			<Button
				containerStyle={styles.button}
				title='Register'
				type='outline'
				onPress={() => {
					navigation.navigate("Register");
				}}
			/>
			<View style={{ height: 100 }} />
		</KeyboardAvoidingView>
	);
};
//in react native by default takes flex column, not the row

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 15,
		backgroundColor: "white",
	},
	inputContainer: {
		width: 300,
	},
	button: {
		width: 200,
		marginTop: 5,
	},
});
