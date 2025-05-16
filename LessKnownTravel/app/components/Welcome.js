import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useState, React } from 'react';
import { useRouter } from 'expo-router';

import styles from './welcome.style'

const LocationType = ['Calming', 'Comforting', 'Exciting']

const Welcome = () => {
    const router = useRouter();
    const [activeLocationType, setActiveLocationType] = useState('Calming')

    return (
        <View>
            <View style={{ width: "100%" }}>
                <Text style={styles.userName}>Welcome, User</Text>
                <Text style={styles.welcomeMessage}>Let's find the perfect spot. </Text>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: 28, height: 50, }}>
                <View style={styles.searchWrapper}>
                    <TextInput style={styles.searchInput} value="" onChange={() => {}} placeholder="What are you looking for?"/>
                </View>
                    <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
                        <Image source={require('../icons/search.png')} style={{width: "50%", height: "50%", tintColor: "#F3F4F8"}} resizeMode='contain'/>
                    </TouchableOpacity>
            </View>

            <View>
                <View style={{width: "100%", marginTop: 16}}>
                    <FlatList 
                        data={LocationType}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.tab(activeLocationType, item)}
                                onPress={() => {
                                    setActiveLocationType(item);
                                    router.push(`/search/${item}`)
                                }}>
                                <Text style={styles.tabText(activeLocationType, item)}>{item}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item}
                        contentContainerStyle={{columnGap: 10}}
                        horizontal />
                </View>
            </View>
        </View>
    );
};

export { Welcome };