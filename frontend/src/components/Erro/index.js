import React from 'react';

import {
    View,
    Text
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

function Error() {

    return (
      <View style={styles.boardError}>
            <Text  style={styles.messageError}>
                  Falha no servidor!
            </Text>

            <FontAwesome
               name="exclamation-triangle"
               size={60}
               color="#BE2C2C"
            />
      </View>
   )
}

export default Error;