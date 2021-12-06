import React, { useState } from "react";
import {
	View,
	Text,
	Button,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import styled from "styled-components";
import { InnerCard, UserButton } from "./add.user-name.screen.styles";

import { Button as StyleButton } from "react-native-paper";

const UserName = styled(TextInput)`
	height: 45px;
	padding: 10px;
	border-radius: 10px;
	border-color: white;
`;

const InputsContainer = styled(ScrollView)`
	flex: 1;
	margin-bottom: 20px;
`;

const InputContainer = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-width: 1px;
	border-bottom-color: lightgray;
`;

const ConfirmButtonContainer = styled(View)`
	align-self: flex-end;
	flex-direction: row;
`;

export const AddUserNamesScreen = ({ navigation }) => {
	const [inputs, setInputs] = useState([{ key: "", value: "" }]);
	const addHandler = () => {
		const _inputs = [...inputs];
		if (_inputs.length > 5) {
			return null;
		}
		_inputs.push({ key: "", value: "" });
		setInputs(_inputs);
	};

	const deleteHandler = (key) => {
		const _inputs = inputs.filter((input, index) => index !== key);
		setInputs(_inputs);
	};

	const inputHandler = (text, key) => {
		const _inputs = [...inputs];
		_inputs[key].value = text;
		_inputs[key].key = key;
		setInputs(_inputs);
	};

	const namesList = inputs.map((item) => item.value);

	return (
		<>
			<ConfirmButtonContainer>
				<StyleButton
					onPress={() => {
						navigation.navigate("PlayersBoard", { players: namesList });
					}}
				>
					Confirm
				</StyleButton>
			</ConfirmButtonContainer>
			<InnerCard>
				<InputsContainer>
					{inputs.map((input, key) => (
						<InputContainer key={key}>
							<UserName
								placeholder={"Player name"}
								value={input.value}
								onChangeText={(text) => inputHandler(text, key)}
							/>
							<TouchableOpacity onPress={() => deleteHandler(key)}>
								<Text style={{ color: "red", fontSize: 13 }}>Delete</Text>
							</TouchableOpacity>
						</InputContainer>
					))}
					<UserButton title="Add" color="green" onPress={addHandler} />
				</InputsContainer>
				<View style={{ alignSelf: "center" }}>
					<Button
						title="cancel"
						color="darkred"
						onPress={() => navigation.navigate("Splash")}
					/>
				</View>
			</InnerCard>
		</>
	);
};
