import React, { useState } from "react";
import { Text, View, ToastAndroid, Image, WebView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { UserButton } from "./add.user-name.screen.styles";

import styled from "styled-components";

const UsersText = styled(Text)`
	font-weight: bold;
	font-size: 18px;
`;
// font-family: Poppins_100Thin;
// font-family: Poppins_500Medium;

const NumberOfPlayersInput = styled(TextInput).attrs({
	mode: "outlined",
	keyboardType: "numeric",
	activeOutlineColor: "green",
})`
	flex: 1;
	height: 40px;
	padding: 10px;
	border-radius: 10px;
	border-color: white;
`;

const InnerCard = styled(View).attrs({
	elevation: 5,
})`
	flex: 0.8;
	background-color: #e8eaf6;
	border-radius: 10px;
	padding: 15px;
	margin: 10px;
`;

export const PlayersNumberScreen = ({ navigation }) => {
	const [number, onChangeNumber] = useState(null);

	const showToastWithGravityAndOffset = (message) => {
		ToastAndroid.showWithGravityAndOffset(
			message,
			ToastAndroid.LONG,
			ToastAndroid.BOTTOM,
			25,
			100
		);
	};

	return (
		<InnerCard>
			<UsersText>How many players want to have some fun </UsersText>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<NumberOfPlayersInput value={number} onChangeText={onChangeNumber} />
			</View>
			<View
				style={{
					padding: 20,
					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<UserButton
					title="Cancel"
					onPress={() => navigation.navigate("Splash")}
				/>
				<UserButton
					title="Confirm"
					onPress={() => {
						number > 5
							? showToastWithGravityAndOffset(
									`Players can not be more than 6. Yours ${number} !`
							  )
							: navigation.navigate("AddUserNames", {
									numberOfPlayers: number,
							  });
					}}
				>
					Confirm
				</UserButton>
			</View>
		</InnerCard>
	);
};
