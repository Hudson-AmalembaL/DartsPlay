import styled from "styled-components";
import { Text, View, TextInput, ScrollView } from "react-native";

export const PlayerBoardWrapper = styled(View)`
	flex: 1;
`;

export const PlayerBoardScrollView = styled(ScrollView).attrs({
	horizontal: true,
	showsHorizontalScrollIndicator: false,
})``;

export const PlayerCard = styled(View).attrs({
	elevation: 3,
})`
	background-color: ${(props) => props.theme.colors.bg.primary};
	padding: ${(props) => props.theme.space[3]};
	border-radius: ${(props) => props.theme.sizes[0]};
	margin: ${(props) => props.theme.space[1]};
	height: 300px;
	width: 300px;
	align-self: center;
`;

export const PlayerName = styled(Text)`
	font-size: ${(props) => props.theme.sizes[1]};
	text-transform: uppercase;
	font-family: "Poppins_500Medium";
	color: royalblue;
`;

export const PlayerScore = styled(Text)`
	font-size: ${(props) => props.theme.sizes[1]};
	font-family: "Poppins_600SemiBold";
`;
// font-weight: bold;

export const InputScore = styled(TextInput).attrs({
	placeholder: "Submit Score",
	elevation: 4,
	keyboardType: "numeric",
})`
	height: ${(props) => props.theme.space[4]};
	padding: ${(props) => props.theme.space[2]};
	border-radius: ${(props) => props.theme.sizes[0]};
	background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const PreviousScoreText = styled(Text)`
	font-weight: bold;
	padding: 10px;
	color: slategray;
`;

export const CardHeader = styled(View)`
	flex: 0.3;
	flex-direction: row;
	justify-content: space-between;
`;
