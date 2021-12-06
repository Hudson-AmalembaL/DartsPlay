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

	return (
		<PlayerBoardWrapper>
			<Button onPress={() => null}>Score Board </Button>
			<PlayerBoardScrollView>
				{scores.map((item) => {
					const { name, score } = item;
					return (
						<PlayerCard>
							<CardHeader>
								<PlayerName>{name}</PlayerName>
								<PlayerScore> Score: {score} </PlayerScore>
							</CardHeader>
							<InputScore placeholder="Score" />
						</PlayerCard>
					);
				})}
			</PlayerBoardScrollView>
		</PlayerBoardWrapper>
	);
};
