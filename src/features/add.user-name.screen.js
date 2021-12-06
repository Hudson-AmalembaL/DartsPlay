import React, { useState } from "react";
import { View } from "react-native";
import {
	InnerCard,
	UserButton,
	UserName,
	InputsContainer,
	InputContainer,
	ConfirmButtonContainer,
	DeleteButton,
	DeleteText,
} from "./add.user-name.screen.styles";

import { Button as StyleButton } from "react-native-paper";

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
								placeholder="Player name"
								value={input.value}
								onChangeText={(text) => inputHandler(text, key)}
							/>
							<DeleteButton onPress={() => deleteHandler(key)}>
								<DeleteText>Delete</DeleteText>
							</DeleteButton>
						</InputContainer>
					))}
					<UserButton title="Add" color="green" onPress={addHandler} />
				</InputsContainer>
				<View style={{ alignSelf: "center" }}>
					<StyleButton onPress={() => navigation.navigate("Splash")}>
						Cancel
					</StyleButton>
				</View>
			</InnerCard>
		</>
	);
};
