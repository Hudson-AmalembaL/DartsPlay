import "react-native-gesture-handler";
import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ActivityIndicator } from "react-native-paper";
import { ThemeProvider } from "styled-components";

import { useFonts, Poppins_700Bold } from "@expo-google-fonts/poppins";

import { HomeScreen } from "./src/features/Home.screen";
import { theme } from "./src/infrastructure/theme";

const Stack = createNativeStackNavigator();

export default function App() {
	const [poppinsLoaded] = useFonts({
		Poppins_700Bold,
	});

	if (!poppinsLoaded) {
		return (
			<ActivityIndicator
				animating={true}
				color={theme.colors.bg.primary}
				style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
			/>
		);
	}

	return (
		<ThemeProvider theme={theme}>
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
				<StatusBar style="dark" backgroundColor={theme.colors.bg.primary} />
			</SafeAreaProvider>
		</ThemeProvider>
	);
}
