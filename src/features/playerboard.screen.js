import React from "react";
import { View, Text } from "react-native";
// Game Logic goes here
export const PlayerBoardScreen = ({ route, navigation }) => {
	const players = route.params.players;

	return (
		<View style={{ flex: 1 }}>
			<Text> Player Board</Text>
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
