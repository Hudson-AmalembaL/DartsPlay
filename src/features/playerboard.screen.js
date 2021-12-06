import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

// Game Logic goes here
export const PlayerBoardScreen = ({ route, navigation }) => {
	const players = route.params.players;

	const playerValueSetter = () => {
		const valuesList = [];
		for (let i = 0; i < players.length; i++) {
			valuesList.push({ key: players[i], value: 0 });
		}
		return valuesList;
	};

	const [scores, setScores] = useState(playerValueSetter);

	console.log(scores);

	return (
		<View style={{ flex: 1 }}>
			<Text> Player Board</Text>
			<Button onPress={() => null}>Score Board </Button>
			<View style={{ flex: 1, alignItems: "center" }}>
				<View
					style={{
						flexDirection: "row",
						flexWrap: "wrap",
						padding: 12,
					}}
				>
					{players.map((item) => (
						<View
							key={item}
							style={{
								padding: 55,
								backgroundColor: "#74d88e",
								margin: 3,
								flex: 1,
								borderRadius: 12,
							}}
							elevation={4}
						>
							<Text style={{ alignSelf: "center" }}>{item}</Text>
						</View>
					))}
				</View>
			</View>
		</View>
	);
};
