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

export const SplashScreen = ({ navigation }) => {
	return (
		<InnerCard>
			<Text> Welcome </Text>
			<Button onPress={() => navigation.navigate("PlayersNumber")}>
				Start Game
			</Button>
		</InnerCard>
	);
};
