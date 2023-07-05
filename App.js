import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";

// screens import
import HomeScreen from "./screens/HomeScreen";

export default function App() {
	return (
		<Provider store={store} >
      <HomeScreen/>
			{/* <View style={styles.container}>
				<Text>Uber</Text>
				<StatusBar style="auto" />
			</View> */}
		</Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
