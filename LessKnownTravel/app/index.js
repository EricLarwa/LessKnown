import React from 'react';
import {
    View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image
} from 'react-native';
import { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { CustomHeaderLeftButton, CustomHeaderRightButton } from './components/Headers'
import { Welcome } from './components/Welcome'

const HomeScreen = () => {

    return (
        < SafeAreaView style={{ flex: 1, backgroundColor: "#FAFAFC" }} />

    )
}

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

            <ScrollView>
                <View style={{flex: 1,padding: 12}}>
                    < Welcome />
                </View>
            </ScrollView>
        </SafeAreaView>


    )
}

export default Home;