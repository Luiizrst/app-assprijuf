import React, { useState, useEffect } from 'react';

import {
    Text,
    View,
    ScrollView,
    TextInput,
    Modal,
    Image,
    TouchableHighlight,
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import Erro from '../../../components/Erro/index';
import LoadingBord from '../../../components/LoadingBord/index';

/* import pt from "date-fns/locale/pt"
import { format } from 'date-fns'; */

import { API } from "../../../services/api";

import styles from './styles';

function ManagementEvents({ navigation }) {

    const [load, setLoad] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [events, setEvents] = useState();
    const [idDestroy, setIdDestroy] = useState();

    async function CatchDate() {
        setLoading(true);
        try {
            const response = await API.get('/events');
            setEvents(response.data);
            setLoading(false);
        } catch (err) {
            console.log({ messageError: err });
            setError(true);
            setLoading(false);
        }
    }

    async function deleteDate() {
        try {
            setLoading(true);
            await API.delete(`/event/${idDestroy}`);
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
        navigation.addListener('focus', () => setLoad(!load));
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
                            placeholder={"Buscar evento"}
                            autoCorrect={false}
                            onChangeText={() => { }}
                        />
                    </View> */}
                    <View style={styles.addEvents}>
                        <TouchableOpacity
                            style={styles.buttonAddEvents}
                            onPress={() => navigation.navigate('CadastreEvent')}
                        >
                            <FontAwesome
                                name="calendar-plus-o"
                                size={40}
                                color="#012a4a"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.board}>
                    <Erro />
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
                            placeholder={"Buscar evento"}
                            autoCorrect={false}
                            onChangeText={() => { }}
                        />
                    </View> */}
                    <View style={styles.addEvents}>
                        <TouchableOpacity
                            style={styles.buttonAddEvents}
                            onPress={() => navigation.navigate('CadastreEvent')}
                        >
                            <FontAwesome
                                name="calendar-plus-o"
                                size={40}
                                color="#012a4a"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.board}>
                    <View style={styles.boxEvent}>
                        {events &&
                            <ScrollView>
                                {events.map((event) => (
                                    <View style={styles.boxEvents} key={event._id}>
                                        <View style={styles.boxDateInfo}>
                                            <Text style={styles.infoEventsText}>
                                                {event.dateView}
                                            </Text>
                                        </View>

                                        <View style={styles.boxEventUtilities}>
                                            <View style={styles.boxEventsText}>
                                                <Text style={styles.titleEventsText}>
                                                    {event.note}
                                                </Text>
                                            </View>

                                            <View style={styles.boxButton}>
                                                <TouchableOpacity
                                                    style={styles.buttonView}
                                                    onPress={() => navigation.navigate('Event', { dates: event })}
                                                >
                                                    <FontAwesome
                                                        name="eye"
                                                        size={30}
                                                        color="#012a4a"
                                                    />
                                                </TouchableOpacity>

                                                <TouchableOpacity
                                                    style={styles.buttonEdit}
                                                    onPress={() => navigation.navigate('EventEdit', { dates: event })}
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
                                                        setIdDestroy(event._id)
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
                    <View style={styles.modalContent}>
                        <View style={styles.mask}></View>
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
                                Deseja mesmo deletar este evento?
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

export default ManagementEvents;