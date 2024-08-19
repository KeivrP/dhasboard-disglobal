import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const data = [
    { label: 'comodato + dischange', desc1: '217 ', desc2: '(53% sobre la Gestión)' },
    { label: 'operador', desc1: 'DIGITEL: 200', desc2: '(51%)' },
    { label: 'prestamo', desc1: '0', desc2: '(Excluida de la Gestión)' },


]

export default function CardFlatList() {
    return (
        <View style={style.container}>
            <FlatList
                horizontal
                data={data}
                renderItem={({ item }) => (
                    <View style={style.card}>
                        <Text style={style.title}>{item.label}</Text>
                        <View style={{ flexDirection: 'row', paddingTop: 5 }}>

                        <Text>{item.desc1}: </Text>
                        <Text>{item.desc2}</Text>
                        </View>
                    </View>
                )}
            />
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: -12
    },
    card: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 15,
        margin: 5,
        borderRadius: 16,
        alignContent: 'center',
        backgroundColor: '#cbd3f3'
        
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    }

})