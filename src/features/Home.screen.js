import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import styled from "styled-components";

import { Header } from "../components/header/Header.component";
import { AddUsers } from "./add.users";

const SafeArea = styled(SafeAreaView)`
	flex: 1;
	background-color: #e8eaf6;
`;

const InnerCard = styled(View).attrs({
	elevation: 5,
})`
	flex: 0.4;
	background-color: #e8eaf6;
	border-radius: 10px;
	padding: 15px;
`;

const Wrapper = styled(View)`
	padding: 10px;
	margin-top: 70px;
	flex: 1;
`;

export const HomeScreen = () => {
	const [numberOfUsers, setNumberOfUsers] = useState(0);
	return (
		<SafeArea>
			<Header />
			<Wrapper>
				<InnerCard>
					<AddUsers setNumberOfUsers={setNumberOfUsers} />
					<Text>{numberOfUsers}</Text>
				</InnerCard>
			</Wrapper>
		</SafeArea>
	);
};
