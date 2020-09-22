import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const headerStyles = StyleSheet.create({
  container: {
		top: 0,
    backgroundColor: '#352e5d',
		width: width
  },
	icon: {
		color: "#fff",
		fontSize: 20,
		marginRight: 10
	},
	headerText: {
		color: "#fff",
		fontSize: 20,
		fontWeight: "bold"
	}
});

export default headerStyles;