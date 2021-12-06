import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";

export const UserButton = ({ title, onPress }) => {
	return (
		<View style={{ padding: 10 }}>
			<Button mode="contained" color={colors.bg.primary} onPress={onPress}>
				{title}
			</Button>
		</View>
	);
};
