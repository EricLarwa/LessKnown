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
                <Text style={{ fontFamily: "Poppins-Medium", fontWeight: 50, fontSize: 26, color: "#312500" }}>Welcome, User</Text>
                <Text style={{ fontFamily: "Poppins-Medium", fontSize: 28, color: "#312651", marginTop: 2 }}>Find a perfect Spot. </Text>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", marginTop: 28, height: 50 }}>
                <View style={{flex: 1, backgroundColor: "#F3F4F8", marginRight: 10, justifyContent: "center", alignItems: "center", borderRadius: 16, height: "100%"}}>
                    <TextInput style={{fontFamily: "Poppins-Medium", width: "100%", height: "100%", paddingHorizontal: 16,}} value="" onChange={() => {}} placeholder="What are you looking for?"/>
                </View>
                    <TouchableOpacity style={{width: 50, height: "100%", backgroundColor: "#374C44", borderRadius: 16, justifyContent: "center", alignItems: "center"}} onPress={() => {}}>
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