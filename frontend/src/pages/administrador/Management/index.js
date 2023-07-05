import React, {
    Component,
} from 'react';

import {
    Text,
    View,
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';


class Management extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.board}>

                    <View style={styles.boxBoard}>
                        <TouchableOpacity
                            style={styles.buttonManagement}
                            onPress={() => this.props.navigation.navigate('ManagementUsers')}
                        >
                            <FontAwesome
                                name="user-o"
                                size={50}
                                color="#B90A0A"
                            />
                            <Text style={styles.textButtonManagement}>
                                Gerenciamento de Usuários
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonManagement}
                            onPress={() => this.props.navigation.navigate('AcceptUsers')}
                        >
                            <FontAwesome
                                name="user-times"
                                size={50}
                                color="#B90A0A"
                            />
                            <Text style={styles.textButtonManagement}>
                                Usuários Pendentes
                            </Text>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.boxBoard}>
                        <TouchableOpacity
                            style={styles.buttonManagement}
                            onPress={() => this.props.navigation.navigate('ManagementPartners')}
                        >
                            <FontAwesome
                                name="handshake-o"
                                size={50}
                                color="#B90A0A"
                            />
                            <Text style={styles.textButtonManagement}>
                                Gerenciamento de Parceiros
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonManagement}
                            onPress={() => this.props.navigation.navigate('ManagementEvents')}
                        >
                            <FontAwesome
                                name="calendar-check-o"
                                size={50}
                                color="#B90A0A"
                            />
                            <Text style={styles.textButtonManagement}>
                                Gerenciamento de Eventos
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }
}

export default Management;