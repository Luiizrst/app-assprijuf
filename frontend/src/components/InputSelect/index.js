import React from 'react'
import { Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import styles from './styles'
import { useState } from 'react'

function InputSelect(props) {

    const [selected, setSelected] = useState('')

    return (

        <View style={styles.formControl}>
            <Text style={styles.label}>{props.label}</Text>
            <View style={styles.contentInput}>

                <Picker
                    style={styles.input}
                    selectedValue={props.selected}
                    onValueChange={
                        (itemValue, itemIndex) => {
                            //setSelected(itemValue)
                            props.onChange(itemValue)
                        }}>
                    {props.items.map((item, index) =>
                        <Picker.Item key={index} label={item.label} value={item.value} />
                    )}

                </Picker>

            </View>
            <Text style={styles.error}>{props.touched && props.error && props.error}</Text>
        </View>

    )
}

export default InputSelect