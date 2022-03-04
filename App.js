import StackNavigator from "./navigation/StackNavigator";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
	const [fontsLoaded] = useFonts({
		'FontSpringRegular': require('./assets/fonts/Fontspring-DEMO-blue_vinyl_regular_ps_ot.otf'),
	});

	if (!fontsLoaded) return (<AppLoading />);

	return (
		<StackNavigator />
	);
};
