import { View, Text } from "react-native";

import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import darts_icon from "../../../assets/Svg/darts_icon";

export const HeaderView = styled(View).attrs({
	elevation: 5,
})`
	align-items: center;
	background-color: ${(props) => props.theme.colors.bg.primary};
	border-radius: ${(props) => props.theme.borderRadius.small};
	height: 40px;
	padding: ${(props) => props.theme.space[2]};
`;

export const HeaderText = styled(Text)`
	font-weight: bold;
	font-size: 24px;
	color: gray;
`;

export const Icon = styled(SvgXml).attrs({
	xml: darts_icon,
	width: 60,
	height: 60,
})``;
