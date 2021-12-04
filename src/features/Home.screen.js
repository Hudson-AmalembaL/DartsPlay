import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import styled from "styled-components";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Header } from "../components/header/Header.component";
import { PlayersNumberScreen } from "./player.numbers.screen";
import { AddUserNamesScreen } from "./add.user-name.screen.js";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
`;

const Wrapper = styled(View)`
	padding: 10px;
	margin-top: 70px;
	flex: 1;
`;

const InnerCard = styled(View).attrs({
	elevation: 5,
})`
	flex: 0.4;
	background-color: #e8eaf6;
	border-radius: 10px;
	padding: 15px;
	margin: 10px;
`;

const Stack = createNativeStackNavigator();

export const HomeScreen = () => {
	return (
		<SafeArea>
			<Header />
			<Wrapper>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="PlayersNumber" component={PlayersNumberScreen} />
					<Stack.Screen name="AddUserNames" component={AddUserNamesScreen} />
				</Stack.Navigator>
			</Wrapper>
		</SafeArea>
	);
};
