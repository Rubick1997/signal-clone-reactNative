import React, { useLayoutEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Platform,
	KeyboardAvoidingView,
	SafeAreaView,
	ScrollView,
	TouchableWithoutFeedback,
} from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native";
import { Keyboard } from "react-native";
import { db, auth } from "../firebase";
import * as firebase from "firebase";

const ChatScreen = ({ navigation, route }) => {
	const [input, setInput] = useState("");

	useLayoutEffect(() => {
		navigation.setOptions({
			headerBackTitleVisible: false,
			headerTitleAlign: "left",
			headerTitle: () => (
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Avatar
						rounded
						source={{
							uri:
								"https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg",
						}}
					/>
					<Text style={{ color: "white", marginLeft: 10, fontWeight: "700" }}>
						{route.params.chatName}
					</Text>
				</View>
			),
			headerLeft: () => (
				<TouchableOpacity
					style={{ marginLeft: 10 }}
					onPress={navigation.goBack}>
					<AntDesign name='arrowleft' size={24} color='white' />
				</TouchableOpacity>
			),
			headerRight: () => (
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						width: 80,
						marginRight: 20,
					}}>
					<TouchableOpacity>
						<FontAwesome name='video-camera' size={24} color='white' />
					</TouchableOpacity>
					<TouchableOpacity>
						<Ionicons name='call' size={24} color='white' />
					</TouchableOpacity>
				</View>
			),
		});
	}, [navigation]);

	const sendMessage = () => {
		Keyboard.dismiss;

		db.collection("chats").doc(route.params.id).collection("messages").add({
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			message: input,
			displayName: auth.currentUser.displayName,
			email: auth.currentUser.email,
			photoURL: auth.currentUser.photoURL,
		});

		setInput("");
	};

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "white",
			}}>
			<StatusBar style='light' />
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={styles.container}
				keyboardVerticalOffset={90}>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<>
						<ScrollView></ScrollView>
						<View style={styles.footer}>
							<TextInput
								placeholder='Signal Message'
								style={styles.textInput}
								value={input}
								onChangeText={(text) => setInput(text)}
								onSubmitEditing={sendMessage}
							/>
							<TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
								<Ionicons name='send' size={24} color='#2B68E6' />
							</TouchableOpacity>
						</View>
					</>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default ChatScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	footer: {
		flexDirection: "row",
		alignItems: "center",
		width: "100%",
		padding: 15,
	},
	textInput: {
		bottom: 0,
		height: 40,
		flex: 1,
		marginRight: 15,
		borderColor: "transparent",
		backgroundColor: "#ECECEC",
		padding: 10,
		color: "grey",
		borderRadius: 30,
	},
});
