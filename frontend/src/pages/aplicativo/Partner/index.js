import React, { Component } from 'react';

import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';

import styles from './styles';

function Partner(props) {

    const partner = (props.route.params.dates);

    return (

        <View style={styles.container}>
            <View style={styles.board}>
                <View style={styles.partnerPhotoData}>
                    {partner.imageURL == null ?
                        <Image
                            style={styles.parterPhoto}
                            source={require('../../../images/partner.png')}
                        />
                        :
                        <Image
                            style={styles.parterPhoto}
                            source={{ uri: `${partner.imageURL}` }}
                        />
                    }
                </View>

                <ScrollView>


                    <View style={styles.partnerTextData}>
                        <Text style={styles.partnerTitleText}>
                            Nome:
                        </Text>

                        <Text style={styles.partnerText}>
                            {partner.name}
                        </Text>
                    </View>

                    {partner.advantages != " " &&

                        <View style={styles.partnerTextData}>
                            <Text style={styles.partnerTitleText}>
                                Vantagens:
                            </Text>
                            <Text style={styles.partnerText}>
                                {partner.advantages}
                            </Text>
                        </View>

                    }

                    {partner.description != " " &&

                        <View style={styles.partnerTextData}>
                            <Text style={styles.partnerTitleText}>
                                Descrição:
                            </Text>
                            <Text style={styles.partnerText}>
                                {partner.description}
                            </Text>
                        </View>

                    }
                </ScrollView>
            </View>
        </View >
    );

}

export default Partner;
