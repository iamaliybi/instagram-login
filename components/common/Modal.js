import { Modal as NativeModal, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

const Modal = (props) => {
	return (
		<NativeModal {...props}>
			<TouchableWithoutFeedback onPress={props.onRequestClose}>
				<View style={styles.modalOverlay} />
			</TouchableWithoutFeedback>

			{props.children}
		</NativeModal>
	);
}

const styles = StyleSheet.create({
	modalOverlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
});

export default Modal;
