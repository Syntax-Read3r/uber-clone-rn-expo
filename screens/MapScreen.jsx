import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import React from "react";
import Map from "../components/Map";

const MapScreens = () => {
	return (
		<View>
			<View style={tw`h-1/2`}>
				<Map />
			</View>
			<View style={tw`h-1/2`}></View>
		</View>
	);
};

export default MapScreens;

const styles = StyleSheet.create({});
