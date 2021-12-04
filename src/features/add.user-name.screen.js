import React, { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components";
import { Button, TextInput } from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import { generateId } from "../utils/key.generator";

const InnerCard = styled(View).attrs({
	elevation: 5,
})`
	flex: 1;
	background-color: #e8eaf6;
	border-radius: 10px;
	padding: 15px;
	margin: 10px;
`;

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

export const AddUserNamesScreen = ({ route, navigation }) => {
	const { numberOfPlayers } = route.params;
	const listOfPlayers = Array.from(new Array(Math.floor(numberOfPlayers)));

	const renderItem = (item) => {
		return (
			<NumberOfPlayersInput
				placeholder={`Player ${item.index + 1}`}
				onChangeText={() => null}
			/>
		);
	};

	return (
		<InnerCard>
			<Text style={{ padding: 10 }}>Number of Players: {numberOfPlayers} </Text>
			<FlatList
				data={listOfPlayers}
				renderItem={renderItem}
				keyExtractor={() => `${generateId(5)}`}
			/>
			<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
				<Button
					mode="contained"
					color="lightgreen"
					onPress={() => {
						navigation.navigate("PlayersNumber");
					}}
				>
					Back
				</Button>
				<Button
					mode="contained"
					color="lightgreen"
					onPress={() => {
						navigation.navigate("PlayersNumber");
					}}
				>
					Next
				</Button>
			</View>
		</InnerCard>
	);
};
