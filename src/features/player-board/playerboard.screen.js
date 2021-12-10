import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";

import {
	PlayerBoardWrapper,
	PlayerBoardScrollView,
	PlayerCard,
	CardHeader,
	PlayerName,
	PreviousScoreText,
	PlayerScore,
	InputScore,
} from "./playerboard.screen.styles";

// Game Logic goes here
export const PlayerBoardScreen = ({ route, navigation }) => {
	// console.log(`Players are ${route.params.players} `);
	const playerValueSetter = () => {
		const players = route.params.players;
		const valuesList = [];
		for (let i = 0; i < players.length; i++) {
			valuesList.push({ name: players[i], score: 0 });
		}
		return valuesList;
	};

	const [scores, setScores] = useState(playerValueSetter);
	const [points, setPoints] = useState(0);

	const handleSubmitButton = (key) => {
		const newScores = [...scores];
		const currentScore = newScores[key].score;
		const currentScoreNumber = +currentScore;

		// check when the max score has been reached
		const pointsNumber = +points;
		newScores[key].score = pointsNumber + currentScoreNumber;
		if (currentScoreNumber > 301) {
			const currentScorePlayer = newScores[key].name;
			console.log(
				`${currentScorePlayer}'s marks of ${currentScoreNumber} is more than 301`
			);
		}
		setScores(newScores);
	};

	// console.log(scores);

	return (
		<PlayerBoardWrapper>
			<Button onPress={() => null}>Score Board </Button>
			<PlayerBoardScrollView>
				{scores.map((player, key) => {
					const { name, score } = player;
					return (
						<PlayerCard key={name}>
							<CardHeader>
								<PlayerName>{name}</PlayerName>
								<PreviousScoreText>current-score: {score}</PreviousScoreText>
							</CardHeader>
							<View style={{ flexDirection: "row" }}>
								<InputScore
									placeholder="Score"
									// value={score}
									onChangeText={(newScore) => {
										setPoints(newScore);
									}}
									clearButtonMode={true}
								/>
								<Button onPress={() => handleSubmitButton(key)}>Confirm</Button>
							</View>
						</PlayerCard>
					);
				})}
			</PlayerBoardScrollView>
			<View style={{ flex: 4 }}></View>
		</PlayerBoardWrapper>
	);
};
