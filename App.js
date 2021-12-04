import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator } from "react-native-paper";

import {
	useFonts,
	Poppins_600SemiBold_Italic,
	Poppins_700Bold,
	Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";

import { HomeScreen } from "./src/features/Home.screen";

const Stack = createNativeStackNavigator();

export default function App() {
	const [numberOfUsers, setNumberOfUsers] = useState(0);

	let [poppinsFontsLoaded] = useFonts({
		Poppins_600SemiBold_Italic,
		Poppins_700Bold,
		Poppins_900Black_Italic,
	});
	if (!poppinsFontsLoaded) {
		return (
			<ActivityIndicator
				animating={true}
				color="#74d88e"
				style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
			/>
		);
	} else {
		return (
			<SafeAreaProvider>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Home"
							component={HomeScreen}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
				<StatusBar style="auto" backgroundColor="#74d88e" />
			</SafeAreaProvider>
		);
	}
}
