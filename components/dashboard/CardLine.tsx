import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const data = [

    { id: '5', title: 'Promedio diario', value: '48' },
    { id: '6', title: 'Meta Estimada', value: '1077' },
];

const CardLine = () => {
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.badge}>
                        <Text style={styles.badgeTitle}>{item.title}</Text>
                        <Text style={styles.badgeValue}>{item.value}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                style={{ gap: 10 }} 
            />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    badge: {
        flex:1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        margin: 5,
        borderRadius: 15,
        backgroundColor: '#232B5D',
    },
    badgeTitle: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 10,
    },
    badgeValue: {
        fontSize: 16,
        color: '#93FCF8',
    },
    separator: {
        height: 5,
        backgroundColor: '#f1f1f1',
    },
});

export default CardLine;