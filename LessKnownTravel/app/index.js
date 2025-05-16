import React from 'react';
import {
    View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image
} from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { CustomHeaderLeftButton, CustomHeaderRightButton } from './components/Headers'
import { Welcome } from './components/Welcome'
import { LocationCard } from './components/Cards/Cards'
import DetailedCard from './components/Cards/DetailedCard';
import location from './components/Cards/location'


const Home = () => {
    const router = useRouter();
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFC" }} >
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#FAFAFC" },
                    headerShadowVisible: false,
                    headerLeft: () => <CustomHeaderLeftButton />,
                    headerRight: () => <CustomHeaderRightButton />,
                    headerTitle: ""
                }}
            />

            <ScrollView showsHorizontalScrollIndicator={false} >
                <View style={{flex: 1, padding: 12, gap: 10}}>
                    < Welcome />
                    {location.map((location) => (
                        <LocationCard
                            key={location.id}
                            location={location}
                            onPress={() => router.push({pathname: './components/Cards/DetailedCard', params: {location: JSON.stringify(location)} })}
                        />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>


    )
}

export default Home;