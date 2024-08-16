
import { Link, router } from 'expo-router'
import React, { useCallback, useMemo, useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ListItem() {

  const handlePresentModalPress = (e) => {
    e.preventDefault()
    router.push('/modal') // <-- Here you put the name where the chat component is declared 
    console.log('Present modal')
  }

    return (
        <View style={styles.container}>
      <Link href="/modal">Present modal</Link>

            <TouchableOpacity
                style={styles.button}
                onPress={(e) => handlePresentModalPress(e)}>

                <Text style={{ color: '#fff' }}>Seleccionar Reporte</Text>
            </TouchableOpacity>

        
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
    },
    button: {
        backgroundColor: '#232B5D',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'center',
    }
})
