import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    TextInput,
    ScrollView,
    Alert,
    TouchableOpacity
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import LoadingBord from '../../../components/LoadingBord';

import { API } from "../../../services/api";

import styles from './styles';


function PasswordEdit(props) {

    const user = props.route.params.user;

    const [loading, setLoading] = useState(false);

    const [view, setView] = useState(null);

    const [password, setPassword] = useState(null);
    const [passwordConfirm, setPasswordConfirm] = useState(null);


    function Check() {
        setLoading(true);
        if (password == passwordConfirm && passwordConfirm != null) {
            Editar();
        } else {
            Alert.alert("Editar", "As senhas devem ser iguais, tente novamente!", [{ text: 'Ok' }]);
            setLoading(false);
        }
    }

    async function Editar() {
        try {
            await API.put(`/updatePassword/${user._id}`, {
                password,
            });
            setLoading(false);
            Alert.alert("Editar", "Senha Editada!", [{ text: 'Ok', onPress: () => props.navigation.goBack() }]);
        } catch (err) {
            const message = err.response.data
            Alert.alert("Erro no Cadastro", message, [{ text: 'Ok' }]);
            setLoading(false);
        }
    }

    return (
        <View style={styles.content}>
            <View style={styles.board}>
                <ScrollView indicatorStyle={'default'}>
                    {view == false ?
                        <View>
                            <Text style={styles.titleInput}>
                                Nova Senha:
                            </Text>
                            <View style={styles.ContentInput}>
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
                                    <TouchableOpacity onPress={() => setView(true)}>
                                        <FontAwesome
                                            name="eye-slash"
                                            size={25}
                                            color="#B90A0A"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text style={styles.titleInput}>
                                Confirmar Nova Senha:
                            </Text>
                            <View style={styles.ContentInput}>
                                <TextInput
                                    style={styles.inputPassword}
                                    placeholder={"Confirmar Senha"}
                                    autoCorrect={false}
                                    secureTextEntry={false}
                                    onChangeText={text => setPasswordConfirm(text)}
                                    value={passwordConfirm}
                                    disabled={loading}
                                />
                                <View style={styles.buttonInputPassword}>
                                    <TouchableOpacity onPress={() => setView(true)}>
                                        <FontAwesome
                                            name="eye-slash"
                                            size={25}
                                            color="#B90A0A"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        :
                        <View>
                            <Text style={styles.titleInput}>
                                Nova Senha:
                            </Text>

                            <View style={styles.ContentInput}>
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
                                    <TouchableOpacity onPress={() => setView(false)}>
                                        <FontAwesome
                                            name="eye"
                                            size={25}
                                            color="#B90A0A"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text style={styles.titleInput}>
                                Confirmar Nova Senha:
                            </Text>

                            <View style={styles.ContentInput}>
                                <TextInput
                                    style={styles.inputPassword}
                                    placeholder={"Confirmar Senha"}
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    onChangeText={text => setPasswordConfirm(text)}
                                    value={passwordConfirm}
                                    disabled={loading}
                                />
                                <View style={styles.buttonInputPassword}>
                                    <TouchableOpacity onPress={() => setView(false)}>
                                        <FontAwesome
                                            name="eye"
                                            size={25}
                                            color="#B90A0A"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    }
                    <View>
                        <TouchableOpacity
                            style={styles.buttonCadastre}
                            onPress={() => Check()}
                        >
                            <Text style={styles.textButtonCadastre}>
                                Alterar
                            </Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
            <LoadingBord loading={loading} />
        </View>
    )
}

export default PasswordEdit;