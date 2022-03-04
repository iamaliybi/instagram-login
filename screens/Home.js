import { useState, useEffect } from "react";
import { AppState, View, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Language, Form, Signup } from "../components/layout/Home";
import instagramLogo from '../assets/images/instagram-logo.png';

const Home = () => {
	const [appIsHidden, setAppIsHidden] = useState(false);

	useEffect(() => {
		const subscription = AppState.addEventListener("change", nextAppState => {
			setAppIsHidden(nextAppState === 'background' ? true : false);
		});

		return () => {
			if (subscription) subscription.remove();
		};
	}, []);

	if (appIsHidden) return null;

	return (
		<View style={styles.container}>
			<Language />
			<View style={{ alignItems: 'center' }}>
				<Image style={{ width: 206, height: 58 }} source={instagramLogo} />
				<Form />
			</View>
			<Signup />

			<StatusBar />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 16,
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: 'rgb(255, 255, 255)'
	},

	logo: {
		marginHorizontal: 'auto',
		marginTop: 22,
		marginBottom: 12
	},
});

export default Home;
