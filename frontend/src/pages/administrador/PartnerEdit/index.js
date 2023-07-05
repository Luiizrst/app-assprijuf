import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    TextInput,
    ScrollView,
    Image,
    Modal,
    TouchableOpacity,
    Alert
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from './styles';

import axios from 'axios';

import { url } from "../../../services/api";

function PartnerEdit(props) {

    const partner = (props.route.params.dates);

    const [loading, setLoading] = useState(false);

    const [name, setName] = useState(partner.name);
    const [advantages, setAdvantages] = useState(partner.advantages);
    const [description, setDescription] = useState(partner.description);
    const [image, setImage] = useState(`${partner.imageURL}`);
    const [imagePartner, setImagePartner] = useState(partner.image)

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

    const setDate = () => {
        data.append('name', name);
        data.append('advantages', advantages);
        data.append('description', description);
        data.append('key', partner.key);

        if (image.length > 4) {
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

        Edit();
    }

    async function Edit() {
        setLoading(true);
        const token = await AsyncStorage.getItem("auth-token");
        if (image.length > 4) {
            axios({
                method: "PUT",
                url: `${url}partner/${partner._id}`,
                data: data,
                Bearer: token,
                headers: {
                    'Authorization': token,
                    'Content-Type': 'multipart/form-data',
                }
            }).then(res => {
                setLoading(false);
                Alert.alert("Editar", "Parceiro editado!", [{ text: 'Ok', onPress: () => props.navigation.goBack() }]);
            }).catch(err => {
                console.log(err);
                Alert.alert("Erro no Cadastro", message, [{ text: 'Ok' }]);
                setLoading(false);
            })
        } else {
            axios({
                method: "PUT",
                url: `${url}partnerWithoutPhoto/${partner._id}`,
                data: data,
                Bearer: token,
                headers: {
                    'Authorization': token,
                    'Content-Type': 'multipart/form-data',
                }
            }).then(res => {
                setLoading(false);
                Alert.alert("Editar", "Parceiro editado!", [{ text: 'Ok', onPress: () => props.navigation.goBack() }]);
            }).catch(err => {
                console.log(err);
                Alert.alert("Erro no Cadastro", message, [{ text: 'Ok' }]);
                setLoading(false);
            })
        }
    }
    console.log(image);
    return (
        <View style={styles.container}>

            <View style={styles.board}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.viewImagePicker}>
                        {image == 'null' ?
                            <Image source={require('../../../images/partner.png')} style={styles.imagePicked} />
                            :
                            <Image source={{ uri: `${image}` }} style={styles.imagePicked} />
                        }


                        <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
                            <Text style={styles.textImagePicker}>
                                Alterar imagem do parceiro
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
                            maxLength={50}
                            value={name}
                            onChangeText={text => setName(text)}
                        />
                    </View>

                    <View>
                        <Text style={styles.titleInput}>
                            Vantagens:
                        </Text>
                        <TextInput
                            style={styles.inputCadastreAdvantages}
                            placeholder={'Preencher este campo com as informações sobre as vantagens oferecidas por esta parceria.'}
                            autoCorrect={false}
                            multiline={true}
                            maxLength={450}
                            value={advantages}
                            onChangeText={text => setAdvantages(text)}
                        />
                    </View>

                    <View>
                        <Text style={styles.titleInput}>
                            Descrição:
                        </Text>
                        <TextInput
                            style={styles.inputCadastreAdvantages}
                            placeholder={'Preencher este campo com as informações sobre o parceiro.'}
                            autoCorrect={false}
                            multiline={true}
                            maxLength={450}
                            value={description}
                            onChangeText={text => setDescription(text)}
                        />
                    </View>

                    <View>
                        <TouchableOpacity style={styles.buttonCadastre} onPress={() => setDate()}>
                            <Text style={styles.textButtonCadastre}>
                                Editar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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

export default PartnerEdit;