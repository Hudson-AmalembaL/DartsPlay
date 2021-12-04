import React from "react";
import { View, Text } from "react-native";

import styled from "styled-components";
import { SvgXml } from "react-native-svg";
import darts_icon from "../../../assets/Svg/darts_icon";

const HeaderView = styled(View).attrs({
	elevation: 4,
})`
	align-items: center;
	background-color: #74d88e;
	border-radius: 5px;
	height: 40px;
	padding: 5px;
`;

const HeaderText = styled(Text)`
	font-weight: bold;
	font-size: 24px;
	color: gray;
`;

const Icon = styled(SvgXml).attrs({
	xml: darts_icon,
	width: 60,
	height: 60,
})``;

export const Header = () => {
	return (
		<HeaderView>
			<Icon />

			<HeaderText>DARTS</HeaderText>
		</HeaderView>
	);
};
