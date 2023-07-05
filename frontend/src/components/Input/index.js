import React from 'react'
import { Text, View, TextInput } from 'react-native'

import styles from './styles'

function Input(props) {

    return (

        <View style={styles.formControl}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput style={styles.input} {...props} />
            <Text style={styles.error}>{props.touched && props.error && props.error}</Text>
        </View>

    )
}

export default Input