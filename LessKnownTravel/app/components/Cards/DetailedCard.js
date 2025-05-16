import React from "react";
import { ScrollView, View, Text, Image, Button, TouchableOpacity } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";

import styles from "./details.style";

const DetailedCard = ({ route }) => {
  const { location } = useLocalSearchParams();

  const locationData = typeof location === "string" ? JSON.parse(location) : location;
  return (
   <>
        <Stack.Screen
            options={{
            title: `${locationData.city}, ${locationData.country}`,
            headerStyle: { backgroundColor: '#FAFAFC' },
            headerTintColor: '#000',
            }}
        />
        <View>
        <Image source={{ uri: locationData.image }} style={styles.image} />
        <View style={styles.content}>
            <Text style={styles.title}>{locationData.country}, {locationData.city}</Text>
            <Text style={styles.longDescription}>{locationData.longDescription}</Text>
            <Text style={styles.reviews}>"{locationData.reviews}"</Text>
            <Button title="Book Now" onPress={() => alert("Booking not implemented yet")} />
        </View>
        </View>
    </>
  );
};

export default DetailedCard;