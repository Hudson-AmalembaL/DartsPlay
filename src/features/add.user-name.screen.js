import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { Button } from "react-native-paper";

const InnerCard = styled(View).attrs({
	elevation: 5,
})`
	flex: 0.4;
	background-color: #e8eaf6;
	border-radius: 10px;
	padding: 15px;
	margin: 10px;
`;

export const AddUserNamesScreen = ({ route, navigation }) => {
	return (
		<InnerCard>
			<Text>Number of users: {route.params.numberOfPlayers}</Text>
			<Text> Game 301 </Text>
			<Button
				mode="contained"
				color="lightgreen"
				onPress={() => {
					navigation.navigate("PlayersNumber");
				}}
			>
				Back
			</Button>
		</InnerCard>
	);
};