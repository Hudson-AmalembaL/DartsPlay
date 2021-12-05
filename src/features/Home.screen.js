import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import styled from "styled-components";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Header } from "../components/header/Header.component";
import { AddUserNamesScreen } from "./add.user-name.screen.js";
import { SplashScreen } from "../features/splash.screen";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
`;

const Wrapper = styled(View)`
	padding: 10px;
	margin-top: 70px;
	flex: 1;
`;

const Stack = createNativeStackNavigator();

export const HomeScreen = () => {
	return (
		<SafeArea>
			<Header />
			<Wrapper>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Splash" component={SplashScreen} />
					<Stack.Screen name="AddUserNames" component={AddUserNamesScreen} />
				</Stack.Navigator>
			</Wrapper>
		</SafeArea>
	);
};
