import { ToastAndroid } from "react-native";

export const showToastWithGravityAndOffset = (message) => {
	ToastAndroid.showWithGravityAndOffset(
		message,
		ToastAndroid.LONG,
		ToastAndroid.BOTTOM,
		25,
		100
	);
};
