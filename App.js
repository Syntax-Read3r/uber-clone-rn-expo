import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// screens import
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";

export default function App() {
	const Stack = createStackNavigator(); // This stack navigator is used to navigate from a stack to the previous stack. I.e Previous screen is home and the current stack screen is profile. Swiping back allows a user to navigate to the previous screen which is home. This is similar to react router.

	return (
		<Provider store={store}>
			<NavigationContainer>
				<SafeAreaProvider>
					<Stack.Navigator>
						<Stack.Screen
							name="HomeScreen"
							component={HomeScreen}
							options={{
								headerShown: false,
							}}
						/>

						<Stack.Screen
							name="MapScreen"
							component={MapScreen}
							options={{
								headerShown: false,
							}}
						/>
					</Stack.Navigator>

					{/* <HomeScreen /> */}
				</SafeAreaProvider>
			</NavigationContainer>
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
