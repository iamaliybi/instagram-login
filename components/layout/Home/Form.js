import { useState, useMemo, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { openURL } from '../../../libs';

const Form = () => {
	const passwordRef = useRef();

	const [input, setInput] = useState({
		term: "",
		password: ""
	});
	const [hidePassword, setHidePassword] = useState(true);

	const isValidForm = useMemo(() => ![input.term, input.password].includes(""), [input]);

	const handleOpenURL = () => {
		openURL('https://www.instagram.com');
	};

	const handleChangeInput = (name, v) => {
		setInput({
			...input,
			[name]: v
		});
	};

	const changePasswordVisibility = () => {
		setHidePassword(!hidePassword);
	};

	const handleSubmit = () => {
		//
	};

	return (
		<View style={styles.container}>
			<View style={styles.form}>
				<View style={{ ...styles.inputGroup, marginBottom: 16 }}>
					<TextInput
						autoFocus
						value={input.term}
						onChangeText={(v) => handleChangeInput('term', v)}
						style={styles.input}
						placeholder='Phone number, email or username'
						placeholderTextColor='rgb(142, 142, 142)'
						returnKeyType={"next"}
						onSubmitEditing={() => passwordRef.current.focus()}
						blurOnSubmit={false}
					/>
				</View>

				<View style={styles.inputGroup}>
					<TextInput
						ref={passwordRef}
						value={input.password}
						onChangeText={(v) => handleChangeInput('password', v)}
						style={styles.input}
						placeholder='Password'
						placeholderTextColor='rgb(142, 142, 142)'
						secureTextEntry={hidePassword}
						onSubmitEditing={handleSubmit}
					/>

					<TouchableOpacity
						style={{ paddingHorizontal: 12, paddingVertical: 4 }}
						onPress={changePasswordVisibility}
					>
						{hidePassword
							? <Icon name='eye-off-outline' size={24} color='rgb(191, 191, 191)' />
							: <Icon name='eye-outline' size={24} color='rgb(191, 191, 191)' />
						}
					</TouchableOpacity>
				</View>

				<TouchableOpacity
					activeOpacity={0.7}
					onPress={handleSubmit}
					style={styles.loginBtn}
					disabled={isValidForm}
				>
					<Text style={{ fontSize: 14, color: 'rgb(255, 255, 255)' }}>Login</Text>
				</TouchableOpacity>

				<View style={styles.help}>
					<Text style={{ color: 'rgb(142, 142, 142)', fontSize: 12 }}>Forgot your login details?</Text>
					<TouchableOpacity
						activeOpacity={0.7}
						onPress={handleOpenURL}
					>
						<Text style={{
							color: 'rgb(38, 38, 38)',
							fontSize: 12,
							fontWeight: 'bold',
							paddingStart: 4,
						}}>
							Get help logging in.
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		alignItems: 'center',
		paddingHorizontal: 28,
		paddingTop: 24
	},

	inputGroup: {
		width: '100%',
		alignItems: 'center',
		flexDirection: 'row',
		borderTopColor: 'rgb(219, 219, 219)',
		borderTopWidth: 1,
		borderRightColor: 'rgb(219, 219, 219)',
		borderRightWidth: 1,
		borderBottomColor: 'rgb(219, 219, 219)',
		borderBottomWidth: 1,
		borderLeftColor: 'rgb(219, 219, 219)',
		borderLeftWidth: 1,
		borderRadius: 3,
		backgroundColor: 'rgb(250, 250, 250)'
	},

	input: {
		flex: 1,
		maxWidth: '100%',
		height: 48,
		paddingHorizontal: 12,
		fontSize: 14
	},

	loginBtn: {
		alignItems: 'center',
		justifyContent: 'center',
		maxWidth: '100%',
		backgroundColor: 'rgb(23, 120, 242)',
		height: 48,
		maxHeight: 48,
		borderRadius: 3,
		marginTop: 16,
	},

	help: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 16
	}
})

export default Form;
