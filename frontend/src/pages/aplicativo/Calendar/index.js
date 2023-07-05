import React, { useState, useEffect } from 'react';

import { 
    View, 
    Text,
    Modal, 
    Image
} from 'react-native';

import WeeklyCalendar from 'react-native-weekly-calendar';

import styles from './styles';

import { API } from "../../../services/api";

export default function Calendar() {

    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [events, setEvents] = useState();

    async function CatchDate() {
        setLoading(true);
        try {
            const response = await API.get('/events');
            setEvents(response.data); 
            setLoading(false);
        } catch(err) {
            console.log({messageError: err});
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        CatchDate();
    }, []);

    return (
        <View style={styles.container}>
            {events ? 
                <WeeklyCalendar
                    events={events}
                    locale={"pt-br"}
                    style={{ height: "100%", width: "97%" }}
                    titleStyle={{ textTransform: 'capitalize' }}
                    themeColor={"#BE2C2C"}
                    renderDay={(eventViews, weekdayToAdd, i) => (
                        <View key={i.toString()} style={styles.day}>
                            <View style={styles.dayLabel}>
                                <Text style={styles.monthDateText}>{weekdayToAdd.format('D/M').toString()}</Text>
                                <Text style={styles.dayText}>{weekdayToAdd.format('ddd').toString()}</Text>
                            </View>
                            <View
                                style={
                                    [
                                        styles.allEvents,
                                        eventViews.length === 0 ? {
                                            width: '100%',
                                            backgroundColor: '#E1E1E1',
                                            borderBottomWidth: 0.3,
                                            borderBottomColor: "#8D959D",
                                            height: 77
                                        } : {}
                                    ]
                                }
                            >
                                <View style={styles.eventsLabel}>
                                    {eventViews}
                                </View>
                            </View>
                        </View>
                    )}
                />
            :
                null
            }
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
    );
}


