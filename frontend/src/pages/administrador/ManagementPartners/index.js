import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
    Modal,
    TouchableHighlight,
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Erro from '../../../components/Erro/index';
import LoadingBord from '../../../components/LoadingBord/index';

import { FontAwesome } from '@expo/vector-icons';

import { API } from "../../../services/api";

import styles from './styles';

function ManagementPartners({ navigation }) {

    const [load, setLoad] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [partners, setPartners] = useState();

    const [idDestroy, setIdDestroy] = useState();

    async function CatchDate() {
        setLoading(true);
        try {
            const response = await API.get('/partners');
            setPartners(response.data);
            setLoading(false);
        } catch (err) {
            console.log({ messageError: err });
            setError(true);
            setLoading(false);
        }
    }

    async function deleteDate() {
        setLoading(true);
        try {
            await API.delete(`/partner/${idDestroy}`);
            CatchDate();
            setLoading(false);
            setModalVisible(!modalVisible);
        } catch (err) {
            console.log({ messageError: err });
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        CatchDate();

        navigation.addListener('focus', () => setLoad(!load))
    }, [load, navigation]);

    if (error == true) {

        return (
            <View style={styles.container}>
                <View style={styles.utils}>
                    {/* <View style={styles.viewInput}>
                        <FontAwesome
                            name="search"
                            size={30}
                            color="gray"
                        />
                        <TextInput
                            style={styles.inputSearch}
                            placeholder={"Buscar usuário"}
                            autoCorrect={false}
                            onChangeText={() => { }}
                        />
                    </View> */}
                    <View style={styles.addPartner}>
                        <TouchableOpacity
                            style={styles.buttonAddPartner}
                            onPress={() => navigation.navigate('CadastrePartner')}
                        >
                            <FontAwesome
                                name="handshake-o"
                                size={35}
                                color="#012a4a"
                            />
                            <FontAwesome
                                name="plus"
                                size={20}
                                color="#012a4a"
                                style={{
                                    marginTop: -18,
                                    marginLeft: 25,
                                    backgroundColor: "#fff",
                                    borderRadius: 20,
                                    padding: 3
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.board}>
                    <View style={styles.boxPartner}>
                        <Erro />
                    </View>
                </View>
            </View>
        );

    } else {

        return (
            <View style={styles.container}>
                <View style={styles.utils}>
                    {/* <View style={styles.viewInput}>
                        <FontAwesome
                            name="search"
                            size={30}
                            color="gray"
                        />
                        <TextInput
                            style={styles.inputSearch}
                            placeholder={"Buscar usuário"}
                            autoCorrect={false}
                            onChangeText={() => { }}
                        />
                    </View> */}
                    <View style={styles.addPartner}>
                        <TouchableOpacity
                            style={styles.buttonAddPartner}
                            onPress={() => navigation.navigate('CadastrePartner')}
                        >
                            <FontAwesome
                                name="handshake-o"
                                size={35}
                                color="#012a4a"
                            />
                            <FontAwesome
                                name="plus"
                                size={20}
                                color="#012a4a"
                                style={{ marginTop: -18, marginLeft: 25, backgroundColor: "#fff", borderRadius: 20, padding: 3 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.board}>
                    <View style={styles.boxPartner}>
                        {partners &&
                            <ScrollView>
                                {partners.map((partner) => (
                                    <View style={styles.boxPartners} key={partner._id}>
                                        <View style={styles.boxPartnersImage}>
                                            {partner.imageURL == null ?
                                                <Image
                                                    style={styles.partnersPhoto}
                                                    source={require('../../../images/partner.png')}
                                                />
                                                :
                                                <Image
                                                    style={styles.partnersPhoto}
                                                    source={{ uri: `${partner.imageURL}` }}
                                                />
                                            }
                                        </View>

                                        <View style={styles.boxPartnerUtilities}>
                                            <View style={styles.boxPartnersText}>
                                                <Text style={styles.titlePartnersText}>
                                                    {partner.name}
                                                </Text>
                                            </View>

                                            <View style={styles.boxButton}>
                                                <TouchableOpacity
                                                    style={styles.buttonView}
                                                    onPress={() => navigation.navigate('Partner', { dates: partner })}
                                                >
                                                    <FontAwesome
                                                        name="eye"
                                                        size={30}
                                                        color="#012a4a"
                                                    />
                                                </TouchableOpacity>

                                                <TouchableOpacity
                                                    style={styles.buttonEdit}
                                                    onPress={() => navigation.navigate('PartnerEdit', { dates: partner })}
                                                >
                                                    <FontAwesome
                                                        name="edit"
                                                        size={30}
                                                        color="#012a4a"
                                                    />

                                                </TouchableOpacity>

                                                <TouchableOpacity
                                                    style={styles.buttonDelete}
                                                    onPress={() => {
                                                        setModalVisible(true);
                                                        setIdDestroy(partner._id);
                                                    }}
                                                >
                                                    <FontAwesome
                                                        name="trash"
                                                        size={30}
                                                        color="#012a4a"
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                ))}
                            </ScrollView>
                        }
                    </View>
                </View>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.mask}></View>
                    <View style={styles.modalContent}>
                        <View style={styles.content}>
                            <View style={styles.exitModal}>
                                <TouchableHighlight
                                    style={styles.exitButtonModal}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                    }}
                                >
                                    <FontAwesome
                                        name="times"
                                        size={35}
                                        color="#BE2C2C"
                                    />
                                </TouchableHighlight>
                            </View>

                            <Text style={styles.modalText}>
                                Deseja mesmo deletar este parceiro?
                            </Text>

                            <TouchableHighlight
                                style={styles.buttonModal}
                                onPress={() => {
                                    deleteDate();
                                }}
                            >
                                <Text style={{ color: "#fff" }}>Deletar</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <LoadingBord loading={loading} />

            </View>
        );
    }

}

export default ManagementPartners;
