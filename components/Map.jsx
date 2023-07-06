import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { API_KEY } from "@env";

const Map = () => {
	const origin = useSelector(selectOrigin);
	console.log('2 --- Map', origin?.description);
  
	const destination = useSelector(selectDestination);
	console.log('3 --- Map', destination?.description);
  
	return (
	  <MapView
		style={tw`flex-1`}
		mapType="mutedStandard"
		initialRegion={{
		  latitude: origin?.location.lat,
		  longitude: origin?.location.lng,
		  latitudeDelta: 0.005,
		  longitudeDelta: 0.005,
		}}
	  >
		{origin && destination && (
		  <MapViewDirections
			origin={origin?.description}
			destination={destination?.description}
			apikey={API_KEY}
			strokeWidth={3}
			strokeColor="black"
		  />
		)}
  
		{origin?.location && (
		  <Marker
			coordinate={{
			  latitude: origin.location.lat,
			  longitude: origin.location.lng,
			}}
			title="Origin"
			description={origin?.description}
			identifier="origin"
		  />
		)}
	  </MapView>
	);
  };
  
  

export default Map;

const styles = StyleSheet.create({});
