import React, { useState, useEffect } from "react";

import {
    Text,
    View
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ScreenOrientation from "expo-screen-orientation";

import styles from './styles';


function Menu ({navigation}) {

    const [admin, setAdmin] = useState();

    async function isAdmin() {
        const adm = await AsyncStorage.getItem("userAuth");
        setAdmin(adm);
    }

    async function logout() {
        AsyncStorage.clear();
        const token = await AsyncStorage.getItem("auth-token");
        if (token == undefined) {
            navigation.navigate('Login');
        }
    }

    useEffect(() => {
        isAdmin();
    }, []);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu</Text>

            <View style={styles.board}>
                <View style={styles.boxBoard}>
                    <TouchableOpacity
                        style={styles.buttonMenu}
                        onPress={() => navigation.navigate('Calendar')}
                    >
                        <FontAwesome
                            name="calendar-o"
                            size={50}
                            color="#B90A0A"
                        />
                        <Text style={styles.textButtonMenu}>
                            Eventos
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonMenu}
                        onPress={() => navigation.navigate('Carteirinha')}
                    >
                        <FontAwesome
                            name="address-card-o"
                            size={50}
                            color="#B90A0A"
                        />
                        <Text style={styles.textButtonMenu}>
                            Carteirinha
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.boxBoard}>
                    <TouchableOpacity
                        style={styles.buttonMenu}
                        onPress={() => navigation.navigate('Partners')}
                    >
                        <FontAwesome
                            name="handshake-o"
                            size={50}
                            color="#B90A0A"
                        />
                        <Text style={styles.textButtonMenu}>
                            Parceiros
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonMenu}
                        onPress={() => navigation.navigate('User')}
                    >

                        <FontAwesome
                            name="info"
                            size={50}
                            color="#B90A0A"
                        />
                        <Text style={styles.textButtonMenu}>
                            Dados
                        </Text>
                    </TouchableOpacity>
                </View>

                {admin == 1 ? 

                    <View style={styles.boxBoard}>
                        <TouchableOpacity
                            style={styles.buttonMenu}
                            onPress={() => navigation.navigate('Management')}
                        >
                            <FontAwesome
                                name="cog"
                                size={50}
                                color="#B90A0A"
                            />
                            <Text style={styles.textButtonMenu}>
                                Admin...
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonMenu}
                            onPress={() => logout()}
                        >
                            <FontAwesome
                                name="sign-out"
                                size={50}
                                color="#B90A0A"
                            />
                            <Text style={styles.textButtonMenu}>
                                Sair
                            </Text>
                        </TouchableOpacity>
                    </View>

                :
                    <View style={styles.boxBoard}>
                        <TouchableOpacity
                            style={styles.buttonMenu}
                            onPress={() => logout()}
                        >
                            <FontAwesome
                                name="sign-out"
                                size={50}
                                color="#B90A0A"
                            />
                            <Text style={styles.textButtonMenu}>
                                Sair
                            </Text>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    );
}


export default Menu;