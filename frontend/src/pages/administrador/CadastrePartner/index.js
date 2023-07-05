import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    TextInput,
    ScrollView,
    Image,
    Modal,
    Alert,
    TouchableOpacity
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import LoadingBord from '../../../components/LoadingBord';

import AsyncStorage from "@react-native-async-storage/async-storage";

import axios from 'axios';

import { url } from "../../../services/api";

import styles from './styles';

function CadastrePartner(props) {

    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("");
    const [advantages, setAdvantages] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const data = new FormData();

    const setDates = (values) => {

        data.append('name', name);
        data.append('advantages', advantages);
        data.append('description', description);

        if (image != null) {
            const fileArray = image.split('/')
            const fileName = fileArray.reverse()

            const typeArray = fileName[0].split('.');
            const typeFile = typeArray.reverse()

            data.append('file', {
                uri: image,
                name: `${fileName[0]}`,
                type: `image/${typeFile[0]}`
            });
        }

        cadastre();
    }

    async function cadastre() {
        setLoading(true);
        const token = await AsyncStorage.getItem("auth-token");

        if (image != null) {

            axios({
                method: "POST",
                url: `${url}partners`,
                data: data,
                Bearer: token,
                headers: {
                    'Authorization': token,
                    'Content-Type': 'multipart/form-data',
                }

            }).then(res => {
                setLoading(false);
                Alert.alert("Cadastrar", "Parceiro cadastrado!", [{ text: 'Ok', onPress: () => props.navigation.goBack() }]);
                setLoading(false);
            })
                .catch(err => {
                    const message = err.response.data
                    Alert.alert("Erro no Cadastro", message, [{ text: 'Ok' }]);
                    setLoading(false);
                })
        } else {
            axios({
                method: "POST",
                url: `${url}partnersWithoutPhoto`,
                data: data,
                Bearer: token,
                headers: {
                    'Authorization': token,
                    'Content-Type': 'multipart/form-data',
                }

            }).then(res => {
                setLoading(false);
                Alert.alert("Cadastrar", "Parceiro cadastrado!", [{ text: 'Ok', onPress: () => props.navigation.goBack() }]);
                setLoading(false);
            })
                .catch(err => {
                    setLoading(false);
                    const message = err.response.data
                    console.log(message);
                    Alert.alert("Erro no Cadastro", "message", [{ text: 'Ok' }]);
                })
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.board}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.viewImagePicker}>
                        {image &&
                            <Image source={{ uri: `${image}` }} style={styles.imagePicked} />
                        }

                        <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                            <Text style={styles.textImagePicker}>
                                Selecione a foto do parceiro
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <Text style={styles.titleInput}>
                            Nome do parceiro:
                        </Text>
                        <TextInput
                            style={styles.inputCadastre}
                            placeholder={'Nome do parceiro'}
                            autoCorrect={false}
                            value={name}
                            onChangeText={text => setName(text)}
                            maxLength={50}
                        />
                    </View>

                    <View>
                        <Text style={styles.titleInput}>
                            Vantagens:
                        </Text>
                        <TextInput
                            style={styles.inputCadastreAdvantages}
                            placeholder={'Vantagens oferecidas por esta parceria.'}
                            autoCorrect={false}
                            value={advantages}
                            onChangeText={text => setAdvantages(text)}
                            maxLength={450}
                            multiline={true}
                        />
                    </View>

                    <View>
                        <Text style={styles.titleInput}>
                            Descrição:
                        </Text>
                        <TextInput
                            style={styles.inputCadastreAdvantages}
                            placeholder={'Informações sobre o parceiro.'}
                            autoCorrect={false}
                            value={description}
                            onChangeText={text => setDescription(text)}
                            maxLength={450}
                            multiline={true}
                        />
                    </View>

                    <View>
                        <TouchableOpacity style={styles.buttonCadastre} onPress={() => setDates()}>
                            <Text style={styles.textButtonCadastre}>
                                Cadastrar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>

            <LoadingBord loading={loading} />

        </View>
    )
}


export default CadastrePartner;