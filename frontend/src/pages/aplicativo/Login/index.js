import React, { useState, useEffect } from 'react';

import {
    Text,
    TextInput,
    View,
    Modal,
    Image,
    Alert,
    Keyboard,
    Animated
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text'

import { FontAwesome } from '@expo/vector-icons';

import AsyncStorage from "@react-native-async-storage/async-storage";

import { API, setAuthToken, setId, setAdmin } from "../../../services/api";

import styles from './styles';

function Login({ navigation }) {

    const [cpf, setCpf] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);
    const [view, setView] = useState(false);
    const [logo] = useState(new Animated.ValueXY({ x: 147, y: 150 }));

    useEffect(() => {
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow)
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide)
    }, []);

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 49,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(logo.y, {
                toValue: 50,
                duration: 300,
                useNativeDriver: false,
            }),
        ]).start();
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 148,
                duration: 300,
                useNativeDriver: false,
            }),
            Animated.timing(logo.y, {
                toValue: 150,
                duration: 300,
                useNativeDriver: false,
            }),
        ]).start();
    }

    async function handleLogin() {
        setLoading(true);
        try {
            const response = await API.post("/authenticate", {
                cpf,
                password
            });
            setAuthToken(response.data.token);
            setId(response.data.user._id);
            setAdmin(response.data.user.admin);
            const token = await AsyncStorage.getItem("auth-token");
            if (token == `Bearer ${response.data.token}`) {
                navigation.navigate('Menu');
            }
            setCpf("");
            setPassword("");
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
            const message = err.response.data.error
            Alert.alert("Erro no Login", message, [{ text: 'Ok' }]);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <View style={styles.contentImage}>
                    <Animated.Image
                        style={{
                            width: logo.x,
                            height: logo.y,
                        }}
                        source={require('../../../images/Logo.png')}
                    />
                </View>

                <View>
                    <TextInputMask
                        style={styles.inputLogin}
                        placeholder={'CPF'}
                        type={'cpf'}
                        onChangeText={text => setCpf(text)}
                        value={cpf}
                    />
                    {/*                     <TextInput
                        style={styles.inputLogin}
                        placeholder={'CPF'}
                        autoCorrect={false}
                        
                        value={cpf}
                        disabled={loading}
                    /> */}
                    {view == false ?

                        <View style={styles.ContentInputLogin}>
                            <TextInput
                                style={styles.inputPassword}
                                placeholder={"Senha"}
                                autoCorrect={false}
                                secureTextEntry={true}
                                onChangeText={text => setPassword(text)}
                                value={password}
                                disabled={loading}
                            />
                            <View style={styles.buttonInputPassword}>
                                <TouchableOpacity onPress={() => setView(true)}>
                                    <FontAwesome
                                        name="eye"
                                        size={25}
                                        color="#B90A0A"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                        :

                        <View style={styles.ContentInputLogin}>
                            <TextInput
                                style={styles.inputPassword}
                                placeholder={"Senha"}
                                autoCorrect={false}
                                secureTextEntry={false}
                                onChangeText={text => setPassword(text)}
                                value={password}
                                disabled={loading}
                            />
                            <View style={styles.buttonInputPassword}>
                                <TouchableOpacity onPress={() => setView(false)}>
                                    <FontAwesome
                                        name="eye-slash"
                                        size={25}
                                        color="#B90A0A"
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>

                    }
                </View>

                <View>
                    <TouchableOpacity
                        style={styles.buttonLogin}
                        onPress={() => handleLogin()}
                        disabled={loading}
                    >
                        <Text style={styles.textButtonLogin}>
                            Login
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonCadastre}
                        onPress={() => navigation.navigate('CadastreUser')}
                        disabled={loading}
                    >
                        <Text style={styles.textButtonLogin}>
                            Cadastre-se
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonForgotPassword}
                        onPress={() => navigation.navigate('ForgotPassword')}
                        disabled={loading}
                    >
                        <Text style={styles.textForgotPassword}>
                            Esqueci minha senha
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Modal
                animationType="fade"
                transparent={loading}
                visible={loading}
            >
                <View style={styles.mask}>
                    <Image
                        style={styles.spinner}
                        source={require('../../../images/loading.gif')}
                    />
                </View>
            </Modal>
        </View>

    )
}

export default Login;