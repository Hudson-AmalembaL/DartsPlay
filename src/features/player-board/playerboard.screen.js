import React, { useState } from "react";
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
	const playerValueSetter = () => {
		const players = route.params.players;
		const valuesList = [];
		for (let i = 0; i < players.length; i++) {
			valuesList.push({ name: players[i], score: 0 });
		}
		return valuesList;
	};

	const [scores, setScores] = useState(playerValueSetter);

	const updateScoreHandler = (newScore, key) => {
		const newScores = [...scores];
		newScores[key].score = newScore;
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
								<PreviousScoreText style={{ padding: 10, color: "slategray" }}>
									current-score: {score}
								</PreviousScoreText>
							</CardHeader>
							{/* <PlayerScore> : {score} </PlayerScore> */}
							<InputScore
								placeholder="Score"
								value={score}
								onChangeText={(newScore) => {
									updateScoreHandler(newScore, key);
								}}
							/>
						</PlayerCard>
					);
				})}
			</PlayerBoardScrollView>
		</PlayerBoardWrapper>
	);
};
