import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import AsyncStorage from "@react-native-async-storage/async-storage";

import Erro from '../../../components/Erro/index';
import LoadingBord from '../../../components/LoadingBord/index';

import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

import { API } from "../../../services/api";

function AcceptUsers({ navigation }) {

    const [load, setLoad] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [users, setUsers] = useState();
    const [id, setId] = useState();
    const [idDestroy, setIdDestroy] = useState();

    async function CatchDate() {
        try {
            setLoading(true);
            const response = await API.get('/users');
            setUsers(response.data);
            setLoading(false);
        } catch (err) {
            console.log({ messageError: err });
            setError(true);
            setLoading(false);
        }
    }

    async function idUser() {
        const ID = await AsyncStorage.getItem("user-id");
        setId(ID);
    }

    useEffect(() => {
        idUser();
        CatchDate();
        navigation.addListener('focus', () => setLoad(!load));
    }, [load, navigation]);

    if (error == true) {
        return (
            <View style={styles.container}>
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
                <View style={styles.board}>
                    <Erro />
                </View>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
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
                <View style={styles.board}>
                    {users &&
                        <View style={styles.boxUsers}>
                            <ScrollView>
                                {users.map((user) => (
                                    <>
                                        {user.accept != true &&
                                            <TouchableOpacity
                                                style={styles.buttonUsers}
                                                key={user._id}
                                                onPress={() => navigation.navigate('UserView', { dates: user })}
                                            >
                                                <View style={styles.boxUsersImage}>
                                                    {user.imageURL == null ?
                                                        <Image
                                                            style={styles.usersPhoto}
                                                            source={require('../../../images/user.png')}
                                                        />
                                                        :
                                                        <Image
                                                            style={styles.usersPhoto}
                                                            source={{ uri: `${user.imageURL}` }}
                                                        />
                                                    }
                                                </View>

                                                <View style={styles.boxUserUtilities}>
                                                    <View style={styles.boxUsersText}>
                                                        <Text style={styles.titleUsersText}>
                                                            {user.name}
                                                        </Text>
                                                    </View>

                                                </View>
                                            </TouchableOpacity >
                                        }
                                    </>
                                ))}
                            </ScrollView>
                        </View>
                    }
                </View>

                <LoadingBord loading={loading} />

            </View>
        );
    }

}

export default AcceptUsers;
