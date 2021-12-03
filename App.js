import "react-native-gesture-handler";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/features/Home.screen";

const Stack = createNativeStackNavigator();

export default function App() {
	const [numberOfUsers, setNumberOfUsers] = useState(0);
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
