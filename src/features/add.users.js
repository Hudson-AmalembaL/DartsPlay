import React, { useState } from "react";
import { Text } from "react-native";
import { TextInput } from "react-native-paper";

import styled from "styled-components";

const UsersText = styled(Text)`
	font-weight: bold;
	font-size: 20px;
`;

const NumberOfUsersInput = styled(TextInput)`
	height: 40px;
	padding: 10px;
	border-radius: 10px;
	background-color: white;
`;

export const AddUsers = ({ setNumberOfUsers }) => {
	const [number, onChangeNumber] = useState(null);
	return (
		<>
			<UsersText> How many users want to have some fun </UsersText>
			<NumberOfUsersInput
				value={number}
				mode="outlined"
				keyboardType="numeric"
				activeOutlineColor="green"
				onChangeText={onChangeNumber}
				onEndEditing={() => setNumberOfUsers(number)}
			/>
		</>
	);
};
