import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, TextInput } from 'react-native'
import { useState, useEffect, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/Ionicons';
import Modal from './Modal';

const Autocomplete = ({ options, label, value, input, onChangeInput, onChange, getInputValue, placeholder, children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedValue, setSelectedValue] = useState(value ?? null);

	const filterOptions = useMemo(() => {
		return options.filter(option => String(getInputValue(option)).toLowerCase().includes(String(input).toLowerCase()));
	}, [input]);

	useEffect(() => {
		if (value !== undefined) setSelectedValue(value);
	}, [value]);

	useEffect(() => {
		if (!isOpen) onChangeInput("");
	}, [isOpen]);

	const unmountModal = () => {
		setIsOpen(false);
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const renderValue = () => {

		return (
			<Text style={styles.pickerValue}>{value ? getInputValue(selectedValue) : placeholder}</Text>
		);
	};

	const clearInput = () => {
		onChangeInput("");
	};

	const handleClickItem = (option) => {
		onChange(option);
		setIsOpen(false);
	}

	return (
		<>
			<TouchableOpacity
				activeOpacity={1}
				style={styles.pickerBtn}
				onPress={toggleDropdown}
			>
				{renderValue()}
				<Icon name="chevron-down-outline" size={14} color="rgb(142, 142, 142)" />
			</TouchableOpacity>

			<Modal
				style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', flex: 1 }}
				transparent
				animationType="fade"
				visible={isOpen}
				onRequestClose={unmountModal}
				onDismiss={unmountModal}
			>
				<View style={styles.popper}>
					<View style={styles.header}>
						<Text style={styles.headerLabel}>{label}</Text>
					</View>

					<View style={{ paddingHorizontal: 12, paddingTop: 8 }}>
						<View style={styles.search}>
							<Icon name='search-outline' size={26} color='rgb(142, 142, 142)' />
							<TextInput
								value={input}
								onChangeText={onChangeInput}
								style={styles.searchField}
								placeholder='Search'
								placeholderTextColor='rgb(142, 142, 142)'
							/>
							{input.length > 0 &&
								<TouchableOpacity
									activeOpacity={1}
									style={styles.clear}
									onPress={clearInput}
								>
									<Icon name='close-outline' size={24} color='rgb(142, 142, 142)' />
								</TouchableOpacity>
							}
						</View>
						
						<ScrollView style={styles.list}>
							{filterOptions.map((option, i) => (
								<TouchableOpacity
									key={i}
									activeOpacity={0.7}
									onPress={() => handleClickItem(option)}
								>
									{children({ option })}
								</TouchableOpacity>
							))}
						</ScrollView>
					</View>
				</View>

				<StatusBar backgroundColor="rgba(0, 0, 0, 0.5)" />
			</Modal>
		</>
	)
};

const styles = StyleSheet.create({
	pickerBtn: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		height: 50,
		width: 'auto'
	},

	pickerValue: {
		textAlign: 'center',
		color: 'rgb(142, 142, 142)',
		paddingRight: 4,
		fontSize: 14
	},

	popper: {
		alignSelf: 'center',
		overflow: 'hidden',
		height: Dimensions.get('window').height,
		width: '80%',
		backgroundColor: 'rgb(255, 255, 255)',
	},

	header: {
		padding: 12,
		textAlign: 'left',
		alignItems: 'flex-start',
		width: '100%',
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(219, 219, 219)'
	},

	headerLabel: {
		color: 'rgb(38, 38, 38)',
		fontSize: 18,
		textTransform: 'uppercase'
	},

	search: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: 'rgb(219, 219, 219)'
	},

	searchField: {
		flex: 1,
		textAlign: 'left',
		color: 'rgb(38, 38, 38)',
		fontSize: 19,
		paddingHorizontal: 4,
		height: 48,
	},

	list: {
		flexDirection: 'column',
		width: '100%',
		overflow: 'scroll',
		maxHeight: '90%',
	}
});

export default Autocomplete;