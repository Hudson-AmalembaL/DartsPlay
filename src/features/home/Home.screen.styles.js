import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
	flex: 1;
`;

export const Wrapper = styled(View)`
	flex: 1;
	padding: ${(props) => props.theme.space[2]};
	margin-top: ${(props) => props.theme.sizes[3]};
`;
