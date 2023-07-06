import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { API_KEY } from "@env";

const Map = () => {
	const origin = useSelector(selectOrigin);
	console.log("2 --- Map", origin?.description);

	const destination = useSelector(selectDestination);
	console.log("3 --- Map", destination?.description);

	const mapRef = useRef(null);

	useEffect(() => {
		if (!origin || !destination || !mapRef.current) return; // Check if mapRef.current exists

		mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
			edgePadding: {
				top: 50,
				right: 50,
				bottom: 50,
				left: 50,
			},
		});
	}, [origin, destination]);

	return (
		<MapView
			ref={mapRef} // Set the ref to mapRef
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

			{destination?.location && (
				<Marker
					coordinate={{
						latitude: destination.location.lat,
						longitude: destination.location.lng,
					}}
					title="Destination"
					description={destination?.description}
					identifier="destination"
				/>
			)}
		</MapView>
	);
};

export default Map;

const styles = StyleSheet.create({});
