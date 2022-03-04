import { Linking } from "react-native";

const openURL = (url) => {
	return new Promise(async (done, reject) => {
		const supported = await Linking.canOpenURL(url);
		if (!supported) {
			reject();
			return;
		}
	
		await Linking.openURL(url);
		done();
	});
};

export default openURL;