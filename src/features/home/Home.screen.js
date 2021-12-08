import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AddUserNamesScreen } from "../add-user-name/add.user-name.screen.js";
import { SplashScreen } from "../home/splash.screen";
import { PlayerBoardScreen } from "../player-board/playerboard.screen";

import { Header } from "../../components/header/Header.component";
import { SafeArea, Wrapper } from "./Home.screen.styles";

const Stack = createNativeStackNavigator();

export const HomeScreen = () => {
	return (
		<SafeArea>
			<Header />
			<Wrapper>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Splash" component={SplashScreen} />
					<Stack.Screen name="AddUserNames" component={AddUserNamesScreen} />
					<Stack.Screen name="PlayersBoard" component={PlayerBoardScreen} />
				</Stack.Navigator>
			</Wrapper>
		</SafeArea>
	);
};
