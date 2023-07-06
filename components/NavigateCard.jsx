import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";

// import redux
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";

// navigation
import RideOptionsCard from "../components/RideOptionsCard";
import { useNavigation } from "@react-navigation/native";

// google imports
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { API_KEY } from "@env";

const NavigateCard = () => {
	const dispatchEvent = useDispatch();
	const navigation = useNavigation();

	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			<View style={tw`text-center py-5`}>
				<Text style={tw`text-xl text-center`}>Good Morning, Munyaradzi!</Text>
			</View>
			<View style={tw`border-t border-gray-200 flex-shrink`}>
				<View>
					<GooglePlacesAutocomplete
						placeholder="Where to?"
						styles={toInputBoxStyles}
						fetchDetails={true}
						enablePoweredByContainer={false}
						query={{
							key: API_KEY,
							language: "en",
						}}
						onPress={(data, details = null) => {
							dispatchEvent(
								setDestination({
									location: details.geometry.location,
									description: data.description,
								})
							);
							navigation.navigate(RideOptionsCard);
						}}
						returnKeyType={"search"}
						nearbyPlacesAPI="GooglePlacesSearch"
						debounce={400}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default NavigateCard;

const toInputBoxStyles = {
	container: {
		backgroundColor: "white",
		paddingTop: 20,
		flex: 0,
	},
	textInput: {
		backgroundColor: "#DDDDDF",
		borderRadius: 5,
		fontSize: 18,
	},
	textInputContainer: {
		paddingHorizontal: 20,
		paddingBottom: 0,
	},
};
