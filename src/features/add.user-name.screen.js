import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import { generateId } from "../utils/key.generator";
import { TextInput, Card } from "react-native-paper";
import styled from "styled-components";
import {
	InnerCard,
	PlayerNamesInput,
	UserButton,
} from "./add.user-name.screen.styles";

const UserName = styled(TextInput)`
	height: 40px;
	padding: 10px;
	border-radius: 10px;
	border-color: white;
`;

export const AddUserNamesScreen = ({ route, navigation }) => {
	const [inputs, setInputs] = useState({});
	function addInput() {
		setInputs({ ...inputs, [Object.keys(inputs).length]: "" });
	}
	function handleChange(e) {
		setInputs({ ...inputs, [e.target.id]: e.target.value });
	}
	return (
		<View>
			<Card>
				<Button onPress={() => addInput()}>Add </Button>
				<TextInput onChangeText={handleChange} />
				{Object.keys(inputs).map((i) => (
					<TextInput key={i} id={i} onChangeText={handleChange} />
				))}
			</Card>
		</View>
	);
};
