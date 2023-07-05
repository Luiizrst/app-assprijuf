import React from 'react';

import {
      View,
      Modal, 
      Image
} from 'react-native';


import styles from './styles';

function LoadingBord(props) {

    return (
      <Modal
            animationType="fade"
            transparent={props.loading}
            visible={props.loading}
      >
            <View style={styles.mask}>
            <Image 
                  style={styles.spinner} 
                  source={require('../../images/loading.gif')}
            />
            </View>
      </Modal>
   )
}

export default LoadingBord;