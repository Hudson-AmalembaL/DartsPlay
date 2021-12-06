import React from "react";
import styled from "styled-components";
import { View, Text, TextInput, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

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

export const UserName = styled(TextInput)`
	height: 45px;
	padding: 10px;
	border-radius: 10px;
	border-color: white;
`;

export const InputsContainer = styled(ScrollView)`
	flex: 1;
	margin-bottom: 20px;
`;

export const InputContainer = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-width: 1px;
	border-bottom-color: lightgray;
`;

export const ConfirmButtonContainer = styled(View)`
	align-self: flex-end;
	flex-direction: row;
`;

export const DeleteButton = styled(TouchableOpacity)``;
export const DeleteText = styled(Text)`
	color: red;
	font-size: 13px;
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
