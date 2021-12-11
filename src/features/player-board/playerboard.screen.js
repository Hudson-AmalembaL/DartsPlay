import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { showToastWithGravityAndOffset } from "../../utils/show-toast";

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
	const [score_history, setScoreHistory] = useState([]);
	const [points, setPoints] = useState(0);

	const handleSubmitButton = (key) => {
		const newScores = [...scores];
		const _currentScore = newScores[key].score;

		// Get the points from the state
		const _points = +points;

		// Get the current Score
		const currentScore = +_currentScore;
		if (currentScore < 301) {
			if (_points > 41 || _points === 41) {
				score_history.push(_points);
				const _newScore = _points + currentScore;
				newScores[key].score = _newScore;
				setScores(newScores);
			}
			if (_points < 41) {
				console.log(currentScore, _points);
				showToastWithGravityAndOffset(`${_points} points are less than 41`);
			}
		}
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
							<Text
								style={{
									alignSelf: "center",
									fontFamily: "Poppins_600SemiBold",
									backgroundColor: "#22222222",
									borderRadius: 5,
									padding: 5,
								}}
							>
								Score History
							</Text>
							<View
								style={{
									flex: 1,
									padding: 5,
									marginBottom: 5,
								}}
							>
								<View
									style={{
										alignSelf: "center",
										flexWrap: "wrap",
										marginBottom: 8,
									}}
								>
									{score_history.map((score) => (
										<Text
											style={{
												backgroundColor: "#11111111",
												borderRadius: 5,
												padding: 5,
												margin: 2,
											}}
										>
											{score}{" "}
										</Text>
									))}
								</View>
							</View>
							<View
								style={{
									flexDirection: "row",
								}}
							>
								<InputScore
									style={{ alignSelf: "center" }}
									// value={score}
									onChangeText={(newScore) => {
										setPoints(newScore);
									}}
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
