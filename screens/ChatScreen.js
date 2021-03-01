import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";

const ChatScreen = ({ navigation, route }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			headerBackTitleVisible: false,
			headerTitleAlign: "left",
			headerTitle: () => (
				<View style={{ flexDirection: "row", alignItems: "center" }}>
					<Avatar rounded />
					<Text>{route.params.chatName}</Text>
				</View>
			),
		});
	}, [navigation]);

	return (
		<View>
			<Text></Text>
		</View>
	);
};

export default ChatScreen;

const styles = StyleSheet.create({});
