import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './card.style';

const LocationCard = ({ location, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
        <Image source={{ uri: location.image }} style={styles.image} />
        <View style={styles.info}>
            <Text style={styles.country}>{location.country}</Text>
            <Text style={styles.city}>{location.city}</Text>
            <Text style={styles.description}>{location.shortDescription}</Text>
        </View>
        </TouchableOpacity>
    );
};

export {LocationCard};