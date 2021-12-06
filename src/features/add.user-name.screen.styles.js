import React from "react";
import styled from "styled-components";
import { View, Text, TextInput, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export const InnerCard = styled(View).attrs({
	elevation: 5,
})`
	flex: 1;
	background-color: ${(props) => props.theme.colors.bg.secondary};
	border-radius: ${(props) => props.theme.sizes[0]};
	padding: ${(props) => props.theme.space[3]};
	margin: ${(props) => props.theme.space[2]};
`;

export const UserName = styled(TextInput)`
	height: ${(props) => props.theme.sizes[3]};
	padding: ${(props) => props.theme.space[2]};
	border-radius: ${(props) => props.theme.sizes[0]};
`;

export const InputsContainer = styled(ScrollView)`
	flex: 1;
	margin-bottom: ${(props) => props.theme.space[3]};
`;

export const InputContainer = styled(View)`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom-width: 1px;
	border-bottom-color: lightgray;
`;

export const ConfirmButtonContainer = styled(View)`
	align-self: flex-end;
	flex-direction: row;
`;

export const DeleteButton = styled(TouchableOpacity)``;
export const DeleteText = styled(Text)`
	color: ${(props) => props.theme.colors.bg.danger};
	font-size: ${(props) => props.theme.sizes[1]};
`;
