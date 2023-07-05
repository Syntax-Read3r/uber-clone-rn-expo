import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../slices/navSlice";

const HomeScreen = () => {
	const dispatch = useDispatch();

	const data =
		"https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png";

	const backupData = "../assets/uber-logo.png";

	return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: "contain",
					}}
					source={{
						uri: data ? data : backupData,
					}}
				/>

				<GooglePlacesAutocomplete
					placeholder="Where from?"
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							fontSize: 18,
						},
					}}
					query={{
						key: API_KEY,
						language: "en",
					}}
					onPress={(data, details = null) => {
						dispatch(
							setOrigin({
								location: details.geometry.location,
								description: data.description,
							})
						);

						const origin = {
							location: details.geometry.location,
							description: data.description,
						};

						console.log("1 --- ORIGIN", origin);

						// dispatch(setDestination(null));
					}}
					enablePoweredByContainer={false}
					fetchDetails={true}
					returnKeyType={"search"}
					minLength={2}
					nearbyPlacesAPI="GooglePlacesSearch"
					debounce={400} // This is a delay which will be executed when the user stops typing for a certain amount of time, in this case it's 400 milliseconds
				/>

				<NavOptions />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	text: {
		color: "green",
	},
});
