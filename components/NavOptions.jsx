import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Icon from "react-native-elements/dist/icons/Icon";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const data = [
	{
		id: "123",
		title: "Get a ride",
		image: "http://links.papareact.com/3pn",
		screen: "MapScreen",
	},
	{
		id: "456",
		title: "Order food",
		image: "http://links.papareact.com/28w",
		screen: "EatsScreen",
	},
];

const NavOptions = () => {
	const navigation = useNavigation();
	const origin = useSelector(selectOrigin);

	return (
		<FlatList
			data={data}
			horizontal
			keyExtractor={(item) => item.id} //Whenever you have a list, you should have a key and in this case it's a keyExtractor
			renderItem={({ item }) => (
				<TouchableOpacity
					style={tw`pr-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
					onPress={() => navigation.navigate(item.screen)}
					disabled={!origin}
				>
					<View style={tw`${!origin && "opacity-25"}`}>
						<Image
							style={{
								width: 120,
								height: 120,
								resizeMode: "contain",
							}}
							source={{
								uri: item.image,
							}}
						/>
						<Text style={tw`mt-2 text-lg font-semibold`}> {item.title}</Text>
						<Icon
							style={tw`p-2 bg-black rounded-full w-10 mt-4`}
							name="arrowright"
							color="white"
							type="antdesign"
						/>
					</View>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavOptions;
