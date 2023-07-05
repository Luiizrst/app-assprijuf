import React from 'react'
import { Text, View } from 'react-native'
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles'

function InputMask(props) {

    return (

        <View style={styles.formControl}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInputMask
                style={styles.input}
                {...props}
            />
            <Text style={styles.error}>{props.touched && props.error && props.error}</Text>
        </View>

    )
}

export default InputMask