import React, { useLayoutEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";

const ChatScreen = ({ navigation, route }) => {
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
