import React, {
    Component,
} from 'react';

import {
    KeyboardAvoidingView,
    Text,
    TextInput,
    View,
    Animated,
    Keyboard,
    Modal,
    Image
} from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import { API } from "../../../services/api";

import styles from './styles';

class ForgotPassword extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            loading: false,
            sucess: false,
            error: false,
            x: new Animated.Value(207),
            y: new Animated.Value(210),
        };
    }

    async sendEmail() {
        this.setState({ loading: true});
        try {
            await API.post("/forgot-password", {
                email: this.state.email,
            });
            this.setState({ sucess: true });
            this.setState({ loading: false});
        } catch (err) {
            this.setState({ error: true });
            this.setState({ loading: false});
        }
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow)
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide)
    }

    keyboardDidShow = () => {
        Animated.parallel([
            Animated.timing(this.state.x, {
                toValue: 89.5,
                duration: 500,
                useNativeDriver: false,
            }),
            Animated.timing(this.state.y, {
                toValue: 91,
                duration: 500,
                useNativeDriver: false,
            }),
        ]).start();
    }

    keyboardDidHide = () => {
        Animated.parallel([
            Animated.timing(this.state.x, {
                toValue: 207,
                duration: 900,
                useNativeDriver: false,
            }),
            Animated.timing(this.state.y, {
                toValue: 210,
                duration: 900,
                useNativeDriver: false,
            }),
        ]).start();
    }

    render() {

        if (this.state.sucess == true) { 
            return (
                <KeyboardAvoidingView style={styles.container}>
                        
                    <View style={styles.forgotPasswordContainer}>
                        <View style={styles.contentMessage}>
                            <Text style={styles.sucessMessage}>
                                Email enviado!
                            </Text>
                        </View>
    
                        <View>
                            <TouchableOpacity
                                style={styles.buttonForgotPassword}
                                onPress={() => this.props.navigation.navigate('Login')}
                            >
                                <Text style={styles.textButtonForgotPassword}>
                                    Voltar para o Login
                                </Text>
                            </TouchableOpacity>
    
                        </View>
                    </View>
                </KeyboardAvoidingView >
    
            )
        } else {
            return (
                <KeyboardAvoidingView style={styles.container}>
                    {this.state.error == true ? 
                        (
                            <View style={styles.contentMessage}>
                                <Text style={styles.messageError}>
                                    Falha ao enviar o email!
                                </Text>
                            </View>
                        )
                        :
                        null
                    }
                    <View style={styles.forgotPasswordContainer}>
                        <Animated.Image
                            style={{
                                width: this.state.x,
                                height: this.state.y,
                            }}
                            source={require('../../../images/Logo.png')}
                        />
    
                        <View>
                            <TextInput
                                style={styles.inputForgotPassword}
                                placeholder={'Email'}
                                autoCorrect={false}
                                onChangeText={text => this.setState({ email: text })}
                                value={this.state.email}
                            />
                        </View>
    
                        <View>
                            <TouchableOpacity
                                style={styles.buttonForgotPassword}
                                onPress={() => this.sendEmail()}
                            >
                                <Text style={styles.textButtonForgotPassword}>
                                    Gerar nova senha
                                </Text>
                            </TouchableOpacity>
    
                        </View>
                    </View>
                    {this.state.loading == true ?

                        <Modal
                            animationType="fade"
                            transparent={this.state.loading}
                            visible={this.state.loading}
                        >
                            <View style={styles.mask}>
                                <Image 
                                    style={styles.spinner} 
                                    source={require('../../../images/loading.gif')}
                                />
                            </View>
                        </Modal>
                    
                    :
                        null
                    }
                </KeyboardAvoidingView >
    
            )
        } 

    }

}


export default ForgotPassword