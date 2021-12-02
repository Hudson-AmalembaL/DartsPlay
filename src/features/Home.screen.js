import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import styled from "styled-components";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Header } from "../components/header/Header.component";
import { AddUserScreen } from "./add.users";
import { Game301 } from "./Chose.game";

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
	const [numberOfUsers, setNumberOfUsers] = useState(0);

	const AddUsersComponent = ({ navigation }) => {
		return (
			<AddUserScreen
				navigation={navigation}
				setNumberOfUsers={setNumberOfUsers}
			/>
		);
	};
	return (
		<SafeArea>
			<Header />
			<Wrapper>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					<Stack.Screen name="AddUsers" component={AddUsersComponent} />
					<Stack.Screen name="ChoseGame" component={Game301} />
				</Stack.Navigator>
				<Text>{numberOfUsers}</Text>
			</Wrapper>
		</SafeArea>
	);
};
