import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import styles from './styles'

export default function Hello() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        AsyncStorage.getItem('counter').then(counter => {
            if (Number(counter) > 0) setCounter(Number(counter))
        })
    }, [])

    const sum = async () => {
        setCounter(counter + 1)
        let new_counter = counter + 1
        await AsyncStorage.setItem('counter', new_counter.toString())
    }

    const reset = async () => {
        await AsyncStorage.removeItem('counter')
        setCounter(0)
    }


    return (
        <View style={styles.container}>
            <Text>{counter}</Text>
            <Button onPress={sum} title="Somar" />
            <Button onPress={reset} title="Zerar" />
        </View>
    )
}
