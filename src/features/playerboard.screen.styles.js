import styled from "styled-components";
import { Text, View, TextInput, ScrollView } from "react-native";

export const PlayerBoardWrapper = styled(View)`
	flex: 1;
`;

export const PlayerBoardScrollView = styled(ScrollView).attrs({
	showsVerticalScrollIndicator: false,
})`
	flex: 1;
`;

export const PlayerCard = styled(View).attrs({
	elevation: 3,
})`
	background-color: #74d88e;
	margin: 3px;
	border-radius: 12px;
	height: 150px;
	padding: 15px;
`;

export const PlayerName = styled(Text)`
	font-size: 20px;
	font-weight: bold;
	text-transform: uppercase;
`;

export const PlayerScore = styled(Text)`
	font-size: 20px;
	font-weight: bold;
`;

export const InputScore = styled(TextInput).attrs({
	elevation: 4,
})`
	height: 45px;
	padding: 10px;
	border-radius: 10px;
	border-color: white;
	background-color: #ffeeee;
`;

export const CardHeader = styled(View)`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
`;
