import React from "react";
import styled from "styled-components";
import { View, Text } from "react-native";
import { Button, TextInput } from "react-native-paper";

export const InnerCard = styled(View).attrs({
	elevation: 5,
})`
	flex: 1;
	background-color: #e8eaf6;
	border-radius: 10px;
	padding: 15px;
	margin: 10px;
`;

export const PlayerNamesInput = styled(TextInput).attrs({
	mode: "outlined",
	activeOutlineColor: "green",
})`
	flex: 1;
	height: 40px;
	padding: 10px;
	border-radius: 10px;
	border-color: white;
`;

export const UserButton = ({ title, onPress, color }) => {
	return (
		<View style={{ padding: 10 }}>
			<Button mode="contained" color="#74d88e" onPress={onPress}>
				{title}
			</Button>
		</View>
	);
};
