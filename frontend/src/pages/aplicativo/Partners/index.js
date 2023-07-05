import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    ScrollView,
    Image
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Erro from '../../../components/Erro/index';
import LoadingBord from '../../../components/LoadingBord/index';

import { FontAwesome } from '@expo/vector-icons';

import { API } from "../../../services/api";

import styles from './styles';

function Partners({ navigation }) {

    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [partners, setPartners] = useState();

    async function CatchDate() {
        setLoading(true);
        try {
            const response = await API.get('/partners');
            setPartners(response.data);
            setLoading(false);
        } catch (err) {
            const message = err.response.data.error
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        CatchDate();
    }, []);

    if (error == true) {
        return (
            <View style={styles.container}>
                {/*<View style={styles.viewInput}>
                    <FontAwesome
                        name="search"
                        size={30}
                        color="gray"
                    />
                    <TextInput
                        style={styles.inputSearch}
                        placeholder={"Buscar parceiro"}
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />
                </View> */}
                <View style={styles.board}>
                    <View style={styles.boxButton}>
                        <Erro />
                    </View>
                </View>
            </View>
        )
    }
    else {
        return (
            <View style={styles.container}>
                {/*<View style={styles.viewInput}>
                    <FontAwesome
                        name="search"
                        size={30}
                        color="gray"
                    />
                    <TextInput
                        style={styles.inputSearch}
                        placeholder={"Buscar parceiro"}
                        autoCorrect={false}
                        onChangeText={() => { }}
                    />
                </View> */}
                <View style={styles.board}>
                    <View style={styles.boxButton}>
                        {partners &&
                            <ScrollView>
                                {partners.map((partner) => (
                                    <TouchableOpacity
                                        style={styles.buttonPartners}
                                        onPress={() => navigation.navigate('Partner', { dates: partner })}
                                        key={partner._id}
                                    >
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

                                        <View style={styles.boxPartnersText}>
                                            <Text style={styles.titlePartnersText}>
                                                {partner.name}
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                        }
                    </View>
                </View>

                <LoadingBord loading={loading} />

            </View>
        );
    }

}

export default Partners;
