import React, { useState, useEffect } from 'react';

import {
    View,
    Text,
    ScrollView,
    CheckBox,
    Alert
} from 'react-native';

import InputMask from '../../../components/InputMask';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import LoadingBord from '../../../components/LoadingBord';

import * as yup from 'yup';
import { Formik } from 'formik';

import { API } from "../../../services/api";

import styles from './styles';

const validationSchema = yup.object().shape({
    registration_number: yup
        .string()
        .required("Digite o número do seu registro"),
    masp: yup
        .string()
        .required("Digite o seu MASP"),
    profession: yup
        .string()
        .required("Digite sua profissão"),
    prison_unit: yup
        .string()
        .required("Digite sua unidade prisional"),
})

function UserEditAdm(props) {

    const user = props.route.params.dates;

    const [loading, setLoading] = useState(false);

    const [isSelected, setSelection] = useState(false);
    const [registration_number, setRegistration_number] = useState("");
    const [masp, setMasp] = useState("");
    const [profession, setProfession] = useState("");
    const [prison_unit, setPrison_unit] = useState("");

    function setAdm() {
        if (user.admin == 1) {
            setSelection(true);
        }
    }

    async function onSubmit(values) {
        setLoading(true);
        try {
            await API.put(`/userAdmin/${user._id}`, {
                registration_number: values.registration_number,
                masp: values.masp,
                profession: values.profession,
                prison_unit: values.prison_unit,
                admin: isSelected
            });
            setLoading(false);
            Alert.alert("Editar", "Usuario editado!", [{ text: 'Ok', onPress: () => props.navigation.goBack() }]);
        } catch (err) {
            const message = err.response.data
            Alert.alert("Erro no Cadastro", message, [{ text: 'Ok' }]);
            setLoading(false);
        }
    }

    useEffect(() => {
        setAdm();
    }, []);

    return (
        <View style={styles.container}>



            <View style={styles.board}>

                <View style={styles.checkBoxView}>
                    <Text style={styles.titleInputCheckBox}>
                        Permissão de Administrador
                    </Text>

                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkBox}
                    />
                </View>

                <Formik
                    initialValues={{
                        registration_number: user.registration_number,
                        masp: user.masp,
                        profession: user.profession,
                        prison_unit: user.prison_unit,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ values, handleChange, handleSubmit, touched, errors, setFieldTouched }) => (
                        <ScrollView showsVerticalScrollIndicator={false} style={styles.inputs}>

                            <InputMask
                                label="Numero de Inscrição:"
                                type={'custom'}
                                options={{
                                    mask: '999999999999999'
                                }}
                                value={values.registration_number}
                                name="registration_number"
                                onChangeText={e => handleChange("registration_number")(e)}
                                onBlur={() => { setFieldTouched("registration_number") }}
                                error={errors.registration_number}
                                touched={touched.masp}
                                placeholder="Digite seu numero de inscrição"
                            />

                            <Input
                                label="Unidade Prisional:"
                                value={values.prison_unit}
                                name="prison_unit"
                                onChangeText={e => handleChange("prison_unit")(e)}
                                onBlur={() => { setFieldTouched("prison_unit") }}
                                error={errors.prison_unit}
                                touched={touched.prison_unit}
                                placeholder="Digite sua unidade prisional"
                            />

                            <Input
                                label="Profissão:"
                                value={values.profession}
                                name="profession"
                                onChangeText={e => handleChange("profession")(e)}
                                onBlur={() => { setFieldTouched("profession") }}
                                error={errors.profession}
                                touched={touched.profession}
                                placeholder="Digite sua profissão"
                            />

                            <InputMask
                                label="MASP:"
                                type={'custom'}
                                options={{
                                    mask: '9999999-9'
                                }}
                                value={values.masp}
                                name="masp"
                                onChangeText={e => handleChange("masp")(e)}
                                onBlur={() => { setFieldTouched("masp") }}
                                error={errors.masp}
                                touched={touched.masp}
                                placeholder="Digite seu MASP"
                            />


                            <Button
                                label="Cadastrar"
                                primary
                                onPress={() => {
                                    handleSubmit()
                                }}
                            />

                        </ScrollView>
                    )}
                </Formik>

            </View>

            <LoadingBord loading={loading} />

        </View>
    )
}


export default UserEditAdm;