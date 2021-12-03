import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

import styled from "styled-components";

const UsersText = styled(Text)`
	font-weight: bold;
	font-size: 18px;
	font-family: Poppins_700Bold;
`;
// font-family: Poppins_500Medium;

const NumberOfUsersInput = styled(TextInput)`
	height: 40px;
	padding: 10px;
	border-radius: 10px;
	background-color: white;
`;

const InnerCard = styled(View).attrs({
	elevation: 5,
})`
	flex: 0.4;
	background-color: #e8eaf6;
	border-radius: 10px;
	padding: 15px;
	margin: 10px;
`;

export const AddUserScreen = ({ navigation }) => {
	const [number, onChangeNumber] = useState(null);
	return (
		<InnerCard>
			<UsersText> How many users want to have some fun </UsersText>
			<NumberOfUsersInput
				value={number}
				mode="outlined"
				keyboardType="numeric"
				activeOutlineColor="green"
				onChangeText={onChangeNumber}
			/>
			<Button
				mode="contained"
				color="#74d88e"
				onPress={() => {
					navigation.navigate("ChoseGame", { numberOfUsers: number });
				}}
			>
				Confirm
			</Button>
		</InnerCard>
	);
};
