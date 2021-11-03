import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../components/Card';

import Screen from '../components/Screen';
import colors from '../config/colors';

const listings = [
    {
        id: 1,
        title: "Red jacket for sale.",
        price: 100,
        image: require("../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Sun glass for sale.",
        price: 1000,
        image: require("../assets/jacket.jpg")
    },
    {
        id: 3,
        title: "Sun glass for sale.",
        price: 1000,
        image: require("../assets/jacket.jpg")
    },
];

function ListingsScreen(props) {

    const navigation = useNavigation();

    return (
       <Screen style={styles.screen}>
           <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem= {({item}) => 
                    <Card
                        title = {item.title}
                        subtitle = {`$ ${item.price}`}
                        image={item.image}
                        onPress={() => navigation.navigate("ListingDetails", item)}
                    />
                }           
           />
       </Screen>
    );
}

const styles = StyleSheet.create({
    screen:{
        padding: 20,
        backgroundColor: colors.light,
    }
})

export default ListingsScreen;