import React, { useState } from "react";
import { Button } from "react-native-paper";

import {
	PlayerBoardWrapper,
	PlayerBoardScrollView,
	PlayerCard,
	CardHeader,
	PlayerName,
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
		console.log(newScore, key);
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
					return (
						<PlayerCard key={player.name}>
							<CardHeader>
								<PlayerName>{player.name}</PlayerName>
								<PlayerScore> Score: {player.score} </PlayerScore>
							</CardHeader>
							<InputScore
								placeholder="Score"
								value={scores[key].score}
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
