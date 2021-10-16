import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppText from './AppText';
import Icon from './Icon';

function CategoryPickerItem({item, onPress}) {
    return (
        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            <AppText style={styles.label}>{item.label}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingVertical: 15,
        alignItems: "center",
        marginHorizontal: 1,
    },
    label: {
        marginTop: 5,
        textAlign: "center"
    },
})

export default CategoryPickerItem;