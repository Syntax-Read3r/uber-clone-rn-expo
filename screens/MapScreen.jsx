import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// components imports
import NavigateCard from "../components/NavigateCard";
import Map from "../components/Map";
import RideOptionsCard from "../components/RideOptionsCard";

const MapScreens = () => {
	const Stack = createStackNavigator();

	return (
		<View>
			<View style={tw`h-1/2`}>
				<Map />
			</View>
			<View style={tw`h-1/2`}>
				<Stack.Navigator>
					<Stack.Screen
						name="NavigateCard"
						component={NavigateCard}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="RideOptionsCard"
						component={RideOptionsCard}
						options={{
							headerShown: false,
						}}
					/>
				</Stack.Navigator>
			</View>
		</View>
	);
};

export default MapScreens;

const styles = StyleSheet.create({});
