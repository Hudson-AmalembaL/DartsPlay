import React from "react";
import { Button } from "react-native-paper";

export const UserButton = ({ title, onPress }) => {
	return (
		<Button mode="contained" color="#74d88e" onPress={onPress}>
			{title}
		</Button>
	);
};
