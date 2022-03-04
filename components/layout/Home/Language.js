import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Autocomplete } from "../../common";
import languages from '../../../assets/json/languages.json';

const Language = () => {
	const [lang, setLang] = useState(languages[39]);
	const [input, setInput] = useState("");

	return (
		<View style={styles.autocomplete}>
			<Autocomplete
				label='Select your language'
				options={languages}
				value={lang}
				onChange={v => setLang(v)}
				getInputValue={v => v.name}
				input={input}
				onChangeInput={v => setInput(v)}
			>
				{({ option }) => (
					<View style={styles.listItem}>
						<Text style={{ color: 'rgb(38, 38, 38)', fontSize: 16 }}>{option.name}</Text>
					</View>
				)}
			</Autocomplete>
		</View>
	);
};

const styles = StyleSheet.create({
	autocomplete: {
		paddingHorizontal: 16,
		paddingBottom: 6,
		paddingTop: 16
	},

	listItem: {
		height: 56,
		paddingHorizontal: 18,
		justifyContent: 'center',
		alignItems: 'flex-start',
		width: '100%'
	}
});

export default Language;
