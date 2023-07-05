import React from 'react';

import {
    View,
    Text,
    ScrollView
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

function Event (props) {

    const dates = (props.route.params.dates);

    return (

        <View style={styles.container}>
            <View style={styles.board}>
                <ScrollView>
                    <View style={styles.eventData}>
                        <View style={styles.eventTextData}>
                            <Text style={styles.eventTitleText}>
                                Evento:
                            </Text>
                            <View style={styles.infoEventsText}>
                                <Text style={styles.eventText}>
                                    {dates.note}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.eventTextData}>
                            <Text style={styles.eventTitleText}>
                                Informações:
                            </Text>
                            <View style={styles.infoEventsText}>
                                <View style={styles.infoTitleEventsText}>
                                    <FontAwesome
                                        name="calendar"
                                        size={20}
                                        color="#012a4a"
                                    />
                                    <Text style={styles.titleEventText}>
                                        Data:
                                    </Text>
                                </View>
                                    <Text style={styles.eventText}>
                                        {dates.dateView}
                                    </Text>
                            </View>
                            <View style={styles.infoEventsText}>
                                <View style={styles.infoTitleEventsText}>
                                    <FontAwesome
                                        name="clock-o"
                                        size={20}
                                        color="#012a4a"
                                    />
                                    <Text style={styles.titleEventText}>
                                        Duração:
                                    </Text>
                                </View>
                                    <Text style={styles.eventText}>
                                        {dates.durationView}
                                    </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );

}

export default Event;
