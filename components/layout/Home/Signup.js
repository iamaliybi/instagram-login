import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { openURL } from '../../../libs';

const Signup = () => {
	const handleOpenSignupPage = () => {
		openURL('https://www.instagram.com/accounts/signup/phone');
	};

	return (
		<View style={styles.container}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
				<Text style={{ color: 'rgb(142, 142, 142)', fontSize: 12 }}>Don't have an account?</Text>
				<TouchableOpacity
					activeOpacity={0.7}
					onPress={handleOpenSignupPage}
				>
					<Text style={{
						color: 'rgb(38, 38, 38)',
						fontSize: 12,
						fontWeight: 'bold',
						paddingStart: 4,
					}}>
						Sign up.
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		width: '100%',
		borderTopColor: 'rgb(219, 219, 219)',
		borderTopWidth: 1,
		paddingVertical: 12
	}
});

export default Signup;
