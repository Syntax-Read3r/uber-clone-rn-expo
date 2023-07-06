import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";

const data =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png";
const backupData = "../assets/uber-logo.png";

const HomeScreen = () => {
    const dispatch = useDispatch();

    const handlePress = (data, details = null) => {
        const { geometry: { location }, description } = details;

        dispatch(
            setOrigin({
                location,
                description: data.description,
            })
        );

        dispatch(setDestination(null));
    };

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
                        uri: data || backupData,
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
                    onPress={handlePress}
                    enablePoweredByContainer={false}
                    fetchDetails
                    returnKeyType="search"
                    minLength={2}
                    nearbyPlacesAPI="GooglePlacesSearch"
                    debounce={400}
                />

                <NavOptions />
				<NavFavourites />
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