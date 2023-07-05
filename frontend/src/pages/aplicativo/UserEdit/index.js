import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  Alert,
  Modal,
  TouchableOpacity,
} from "react-native";

import * as yup from "yup";
import { Formik } from "formik";

import InputMask from "../../../components/InputMask";
import Input from "../../../components/Input";
import InputSelect from "../../../components/InputSelect";
import Button from "../../../components/Button";
import LoadingBord from "../../../components/LoadingBord";

import axios from "axios";

import * as ImagePicker from "expo-image-picker";

import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";

import { url } from "../../../services/api";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(7, "Digite seu nome inteiro")
    .required("Digite seu nome"),
  registration_number: yup.string().required("Digite o número do seu registro"),
  masp: yup.string().required("Digite o seu MASP"),
  blood_type: yup.string(),
  //.required("Escolha um tipo sanguíneo"),
  marital_status: yup.string(),
  //.required("Escolha um estado cívil"),
  rg: yup.string().required("Digite o numero da sua carteira de identidade"),
  cpf: yup.string().required("Digite o numero do seu CPF"),
  date_of_birth: yup.string().required("Digite sua data de nascimento"),
  naturalness: yup.string().required("Digite sua naturalidade"),
  profession: yup.string().required("Digite sua profissão"),
  prison_unit: yup.string().required("Digite sua unidade prisional"),
  fathers_name: yup
    .string()
    .min(7, "Digite o nome inteiro")
    .required("Digite o nome do seu pai"),
  mothers_name: yup
    .string()
    .min(7, "Digite o nome inteiro")
    .required("Digite o nome da sua mãe"),
  adress: yup.string().required("Digite o seu endereço"),
  number: yup.string().required("Digite o numero da sua residência"),
  city: yup.string().required("Digite sua cidade"),
  neighborhood: yup.string().required("Digite seu bairro"),
  cep: yup.string().required("Digite seu CEP"),
  whatsapp_phone: yup.string().required("Digite seu whatsapp"),
  cell_phone: yup.string().required("Digite seu telefone"),
  email: yup.string().required("Digite seu email"),
});

const validationSchema2 = yup.object().shape({
  name: yup
    .string()
    .min(7, "Digite seu nome inteiro")
    .required("Digite seu nome"),
  blood_type: yup.string(),
  //.required("Escolha um tipo sanguíneo"),
  marital_status: yup.string(),
  //.required("Escolha um estado cívil"),
  rg: yup.string().required("Digite o numero da sua carteira de identidade"),
  cpf: yup.string().required("Digite o numero do seu CPF"),
  date_of_birth: yup.string().required("Digite sua data de nascimento"),
  naturalness: yup.string().required("Digite sua naturalidade"),
  whatsapp_phone: yup.string().required("Digite seu whatsapp"),
  cell_phone: yup.string().required("Digite seu telefone"),
  email: yup.string().required("Digite seu email"),
});

function UserEdit(props) {
  const user = props.route.params.user;
  const [image, setImage] = useState(`${user.imageURL}`);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
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

  const setDates = (values) => {
    data.append("name", values.name);
    data.append("registration_number", values.registration_number || null);
    data.append("masp", values.masp || null);
    data.append("blood_type", values.blood_type);
    data.append("rg", values.rg);
    data.append("cpf", values.cpf);
    data.append("date_of_birth", values.date_of_birth);
    data.append("marital_status", values.marital_status);
    data.append("naturalness", values.naturalness);
    data.append("profession", values.profession || null);
    data.append("prison_unit", values.prison_unit || null);
    data.append("fathers_name", values.fathers_name || null);
    data.append("mothers_name", values.mothers_name || null);
    data.append("adress", values.adress || null);
    data.append("number", values.number || null);
    data.append("city", values.city || null);
    data.append("neighborhood", values.neighborhood || null);
    data.append("cep", values.cep || null);
    data.append("whatsapp_phone", values.whatsapp_phone);
    data.append("cell_phone", values.cell_phone);
    data.append("email", values.email);
    data.append("responsible", values.responsible || null);

    if (image.length > 4) {
      data.append("key", user.key);

      const fileArray = image.split("/");
      const fileName = fileArray.reverse();

      const typeArray = fileName[0].split(".");
      const typeFile = typeArray.reverse();

      data.append("file", {
        uri: image,
        name: `${fileName[0]}`,
        type: `image/${typeFile[0]}`,
      });
    }

    onSubmit();
  };

  async function onSubmit() {
    setLoading(true);
    const token = await AsyncStorage.getItem("auth-token");
    if (image.length > 4) {
      axios({
        method: "PUT",
        url: `${url}user/${user._id}`,
        data: data,
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          setLoading(false);
          Alert.alert("Editar", "Usuario editado!", [
            { text: "Ok", onPress: () => props.navigation.goBack() },
          ]);
        })
        .catch((err) => {
          const message = err.response.data;
          Alert.alert("Erro no Cadastro", message, [{ text: "Ok" }]);
          setLoading(false);
        });
    } else {
      axios({
        method: "PUT",
        url: `${url}userWithoutPhoto/${user._id}`,
        data: data,
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
        .then((res) => {
          setLoading(false);
          Alert.alert("Editar", "Usuario editado!", [
            { text: "Ok", onPress: () => props.navigation.goBack() },
          ]);
        })
        .catch((err) => {
          const message = err.response.data;
          Alert.alert("Erro no Cadastro", message, [{ text: "Ok" }]);
          setLoading(false);
        });
    }
  }

  return (
    <View style={styles.content}>
      <ScrollView style={styles.board} showsVerticalScrollIndicator={false}>
        <View style={styles.viewImagePicker}>
          {image.length > 4 ? (
            <Image style={styles.imagePicked} source={{ uri: `${image}` }} />
          ) : (
            <Image
              style={styles.imagePicked}
              source={require("../../../images/user.png")}
            />
          )}

          <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
            <Text style={styles.textImagePicker}>Alterar foto de perfil</Text>
          </TouchableOpacity>
        </View>

        {user.type === "Dependente" ? (
          <Formik
            initialValues={{
              name: user.name,
              blood_type: user.blood_type,
              marital_status: user.marital_status,
              rg: user.rg,
              cpf: user.cpf,
              date_of_birth: user.date_of_birth,
              naturalness: user.naturalness,
              whatsapp_phone: user.whatsapp_phone,
              cell_phone: user.cell_phone,
              email: user.email,
              responsible: user.responsible,
            }}
            validationSchema={validationSchema2}
            onSubmit={setDates}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              touched,
              errors,
              setFieldTouched,
            }) => (
              <View>
                <Input
                  label='Responsável:'
                  value={values.responsible}
                  name='name'
                  onChangeText={(e) => handleChange("responsible")(e)}
                  onBlur={() => {
                    setFieldTouched("responsible");
                  }}
                  error={errors.responsible}
                  touched={touched.responsible}
                  placeholder='Digite o nome do responsável'
                />

                <Input
                  label='Nome:'
                  value={values.name}
                  name='name'
                  onChangeText={(e) => handleChange("name")(e)}
                  onBlur={() => {
                    setFieldTouched("name");
                  }}
                  error={errors.name}
                  touched={touched.name}
                  placeholder='Digite seu nome'
                />

                <InputMask
                  label='CPF'
                  type={"cpf"}
                  value={values.cpf}
                  name='cpf'
                  onChangeText={(e) => handleChange("cpf")(e)}
                  onBlur={() => {
                    setFieldTouched("cpf");
                  }}
                  error={errors.cpf}
                  touched={touched.cpf}
                  placeholder='Digite o numero do seu CPF'
                />

                <InputMask
                  label='RG:'
                  type={"custom"}
                  options={{
                    mask: "99.999.999",
                  }}
                  value={values.rg}
                  name='rg'
                  onChangeText={(e) => handleChange("rg")(e)}
                  onBlur={() => {
                    setFieldTouched("rg");
                  }}
                  error={errors.rg}
                  touched={touched.rg}
                  placeholder='Digite o numero do seu rg'
                />

                <InputMask
                  label='Data de Nascimento'
                  type={"datetime"}
                  options={{
                    format: "DD/MM/YYYY",
                  }}
                  value={values.date_of_birth}
                  name='date_of_birth'
                  onChangeText={(e) => handleChange("date_of_birth")(e)}
                  onBlur={() => {
                    setFieldTouched("date_of_birth");
                  }}
                  error={errors.date_of_birth}
                  touched={touched.date_of_birth}
                  placeholder='Digite sua data de nascimento'
                />

                <Input
                  label='Naturalidade:'
                  value={values.naturalness}
                  name='naturalness'
                  onChangeText={(e) => handleChange("naturalness")(e)}
                  onBlur={() => {
                    setFieldTouched("naturalness");
                  }}
                  error={errors.naturalness}
                  touched={touched.naturalness}
                  placeholder='Digite sua naturalidade'
                />

                <InputSelect
                  label='Tipo Sanguíneo:'
                  items={[
                    {
                      label: "Selecione um tipo sanguíneo",
                      value: user.blood_type,
                    },
                    {
                      label: "A+",
                      value: "A+",
                    },
                    {
                      label: "A-",
                      value: "A-",
                    },
                    {
                      label: "B+",
                      value: "B+",
                    },
                    {
                      label: "B-",
                      value: "B-",
                    },
                    {
                      label: "AB+",
                      value: "AB+",
                    },
                    {
                      label: "AB-",
                      value: "AB-",
                    },
                    {
                      label: "O+",
                      value: "O+",
                    },
                    {
                      label: "O-",
                      value: "O-",
                    },
                  ]}
                  onChange={(e) => handleChange("blood_type")(e)}
                  onBlur={() => {
                    setFieldTouched("blood_type");
                  }}
                  error={errors.blood_type}
                  selected={values.blood_type}
                />

                <InputSelect
                  label='Estado cívil:'
                  items={[
                    {
                      label: "Selecione um estado cívil",
                      value: user.marital_status,
                    },
                    {
                      label: "Solteiro(a)",
                      value: "Solteiro(a)",
                    },
                    {
                      label: "Casado(a)",
                      value: "Casado(a)",
                    },
                    {
                      label: "Separado(a)",
                      value: "Separado(a)",
                    },
                    {
                      label: "Divorciado(a)",
                      value: "Divorciado(a)",
                    },
                    {
                      label: "Viúvo(a)",
                      value: "Viúvo(a)",
                    },
                  ]}
                  onChange={(e) => handleChange("marital_status")(e)}
                  onBlur={() => {
                    setFieldTouched("marital_status");
                  }}
                  error={errors.marital_status}
                  selected={values.marital_status}
                />

                <InputMask
                  label='Telefone Celular:'
                  type={"cel-phone"}
                  options={{
                    maskType: "BRL",
                    withDDD: true,
                    dddMask: "(99) ",
                  }}
                  value={values.whatsapp_phone}
                  name='whatsapp_phone'
                  onChangeText={(e) => handleChange("whatsapp_phone")(e)}
                  onBlur={() => {
                    setFieldTouched("whatsapp_phone");
                  }}
                  error={errors.whatsapp_phone}
                  touched={touched.whatsapp_phone}
                  placeholder='Digite o numero do seu Whatsapp'
                />

                <InputMask
                  label='Telefone Whatsapp:'
                  type={"cel-phone"}
                  options={{
                    maskType: "BRL",
                    withDDD: true,
                    dddMask: "(99) ",
                  }}
                  value={values.cell_phone}
                  name='cell_phone'
                  onChangeText={(e) => handleChange("cell_phone")(e)}
                  onBlur={() => {
                    setFieldTouched("cell_phone");
                  }}
                  error={errors.cell_phone}
                  touched={touched.cell_phone}
                  placeholder='Digite o numero do seu telefone'
                />

                <Input
                  label='Email:'
                  value={values.email}
                  name='email'
                  onChangeText={(e) => handleChange("email")(e)}
                  onBlur={() => {
                    setFieldTouched("email");
                  }}
                  error={errors.email}
                  touched={touched.email}
                  placeholder='Digite seu email'
                />
                <View style={styles.button}>
                  <Button
                    label='Editar'
                    primary
                    onPress={() => {
                      handleSubmit();
                    }}
                  />
                </View>
              </View>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={{
              name: user.name,
              registration_number: user.registration_number,
              masp: user.masp,
              blood_type: user.blood_type,
              marital_status: user.marital_status,
              rg: user.rg,
              cpf: user.cpf,
              date_of_birth: user.date_of_birth,
              naturalness: user.naturalness,
              profession: user.profession,
              prison_unit: user.prison_unit,
              fathers_name: user.fathers_name,
              mothers_name: user.mothers_name,
              adress: user.adress,
              number: user.number,
              city: user.city,
              neighborhood: user.neighborhood,
              cep: user.cep,
              whatsapp_phone: user.whatsapp_phone,
              cell_phone: user.cell_phone,
              email: user.email,
            }}
            validationSchema={validationSchema}
            onSubmit={setDates}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              touched,
              errors,
              setFieldTouched,
            }) => (
              <View>
                <Input
                  label='Nome:'
                  value={values.name}
                  name='name'
                  onChangeText={(e) => handleChange("name")(e)}
                  onBlur={() => {
                    setFieldTouched("name");
                  }}
                  error={errors.name}
                  touched={touched.name}
                  placeholder='Digite seu nome'
                />

                <InputMask
                  label='Numero de Inscrição:'
                  type={"custom"}
                  options={{
                    mask: "999999999999999",
                  }}
                  value={values.registration_number}
                  name='registration_number'
                  onChangeText={(e) => handleChange("registration_number")(e)}
                  onBlur={() => {
                    setFieldTouched("registration_number");
                  }}
                  error={errors.registration_number}
                  touched={touched.masp}
                  placeholder='Digite seu numero de inscrição'
                />

                <Input
                  label='Unidade Prisional:'
                  value={values.prison_unit}
                  name='prison_unit'
                  onChangeText={(e) => handleChange("prison_unit")(e)}
                  onBlur={() => {
                    setFieldTouched("prison_unit");
                  }}
                  error={errors.prison_unit}
                  touched={touched.prison_unit}
                  placeholder='Digite sua unidade prisional'
                />

                <Input
                  label='Profissão:'
                  value={values.profession}
                  name='profession'
                  onChangeText={(e) => handleChange("profession")(e)}
                  onBlur={() => {
                    setFieldTouched("profession");
                  }}
                  error={errors.profession}
                  touched={touched.profession}
                  placeholder='Digite sua profissão'
                />

                <InputMask
                  label='MASP:'
                  type={"custom"}
                  options={{
                    mask: "9999999-9",
                  }}
                  value={values.masp}
                  name='masp'
                  onChangeText={(e) => handleChange("masp")(e)}
                  onBlur={() => {
                    setFieldTouched("masp");
                  }}
                  error={errors.masp}
                  touched={touched.masp}
                  placeholder='Digite seu MASP'
                />

                <InputMask
                  label='CPF'
                  type={"cpf"}
                  value={values.cpf}
                  name='cpf'
                  onChangeText={(e) => handleChange("cpf")(e)}
                  onBlur={() => {
                    setFieldTouched("cpf");
                  }}
                  error={errors.cpf}
                  touched={touched.cpf}
                  placeholder='Digite o numero do seu CPF'
                />

                <InputMask
                  label='RG:'
                  type={"custom"}
                  options={{
                    mask: "99.999.999",
                  }}
                  value={values.rg}
                  name='rg'
                  onChangeText={(e) => handleChange("rg")(e)}
                  onBlur={() => {
                    setFieldTouched("rg");
                  }}
                  error={errors.rg}
                  touched={touched.rg}
                  placeholder='Digite o numero do seu rg'
                />

                <InputMask
                  label='Data de Nascimento'
                  type={"datetime"}
                  options={{
                    format: "DD/MM/YYYY",
                  }}
                  value={values.date_of_birth}
                  name='date_of_birth'
                  onChangeText={(e) => handleChange("date_of_birth")(e)}
                  onBlur={() => {
                    setFieldTouched("date_of_birth");
                  }}
                  error={errors.date_of_birth}
                  touched={touched.date_of_birth}
                  placeholder='Digite sua data de nascimento'
                />

                <Input
                  label='Naturalidade:'
                  value={values.naturalness}
                  name='naturalness'
                  onChangeText={(e) => handleChange("naturalness")(e)}
                  onBlur={() => {
                    setFieldTouched("naturalness");
                  }}
                  error={errors.naturalness}
                  touched={touched.naturalness}
                  placeholder='Digite sua naturalidade'
                />

                <InputSelect
                  label='Tipo Sanguíneo:'
                  items={[
                    {
                      label: "Selecione um tipo sanguíneo",
                      value: user.blood_type,
                    },
                    {
                      label: "A+",
                      value: "A+",
                    },
                    {
                      label: "A-",
                      value: "A-",
                    },
                    {
                      label: "B+",
                      value: "B+",
                    },
                    {
                      label: "B-",
                      value: "B-",
                    },
                    {
                      label: "AB+",
                      value: "AB+",
                    },
                    {
                      label: "AB-",
                      value: "AB-",
                    },
                    {
                      label: "O+",
                      value: "O+",
                    },
                    {
                      label: "O-",
                      value: "O-",
                    },
                  ]}
                  onChange={(e) => handleChange("blood_type")(e)}
                  onBlur={() => {
                    setFieldTouched("blood_type");
                  }}
                  error={errors.blood_type}
                  selected={values.blood_type}
                />

                <InputSelect
                  label='Estado cívil:'
                  items={[
                    {
                      label: "Selecione um estado cívil",
                      value: user.marital_status,
                    },
                    {
                      label: "Solteiro(a)",
                      value: "Solteiro(a)",
                    },
                    {
                      label: "Casado(a)",
                      value: "Casado(a)",
                    },
                    {
                      label: "Separado(a)",
                      value: "Separado(a)",
                    },
                    {
                      label: "Divorciado(a)",
                      value: "Divorciado(a)",
                    },
                    {
                      label: "Viúvo(a)",
                      value: "Viúvo(a)",
                    },
                  ]}
                  onChange={(e) => handleChange("marital_status")(e)}
                  onBlur={() => {
                    setFieldTouched("marital_status");
                  }}
                  error={errors.marital_status}
                  selected={values.marital_status}
                />

                <Input
                  label='Nome do Pai:'
                  value={values.fathers_name}
                  name='fathers_name'
                  onChangeText={(e) => handleChange("fathers_name")(e)}
                  onBlur={() => {
                    setFieldTouched("fathers_name");
                  }}
                  error={errors.fathers_name}
                  touched={touched.fathers_name}
                  placeholder='Digite o nome do seu pai'
                />

                <Input
                  label='Nome da Mãe:'
                  value={values.mothers_name}
                  name='mothers_name'
                  onChangeText={(e) => handleChange("mothers_name")(e)}
                  onBlur={() => {
                    setFieldTouched("mothers_name");
                  }}
                  error={errors.mothers_name}
                  touched={touched.mothers_name}
                  placeholder='Digite o nome da sua mãe'
                />

                <Input
                  label='Cidade:'
                  value={values.city}
                  name='city'
                  onChangeText={(e) => handleChange("city")(e)}
                  onBlur={() => {
                    setFieldTouched("city");
                  }}
                  error={errors.city}
                  touched={touched.city}
                  placeholder='Digite sua cidade'
                />

                <Input
                  label='Bairro:'
                  value={values.neighborhood}
                  name='neighborhood'
                  onChangeText={(e) => handleChange("neighborhood")(e)}
                  onBlur={() => {
                    setFieldTouched("neighborhood");
                  }}
                  error={errors.neighborhood}
                  touched={touched.neighborhood}
                  placeholder='Digite seu bairro'
                />

                <Input
                  label='Endereço:'
                  value={values.adress}
                  name='adress'
                  onChangeText={(e) => handleChange("adress")(e)}
                  onBlur={() => {
                    setFieldTouched("adress");
                  }}
                  error={errors.adress}
                  touched={touched.adress}
                  placeholder='Digite o seu endereço'
                />

                <Input
                  label='Numero:'
                  value={values.number}
                  name='number'
                  onChangeText={(e) => handleChange("number")(e)}
                  onBlur={() => {
                    setFieldTouched("number");
                  }}
                  error={errors.number}
                  touched={touched.number}
                  placeholder='Digite o numero do seu endereço'
                />

                <InputMask
                  label='CEP:'
                  type={"custom"}
                  options={{
                    mask: "99999-999",
                  }}
                  value={values.cep}
                  name='cep'
                  onChangeText={(e) => handleChange("cep")(e)}
                  onBlur={() => {
                    setFieldTouched("cep");
                  }}
                  error={errors.cep}
                  touched={touched.cep}
                  placeholder='Digite o numero do seu CEP'
                />

                <InputMask
                  label='Telefone Celular:'
                  type={"cel-phone"}
                  options={{
                    maskType: "BRL",
                    withDDD: true,
                    dddMask: "(99) ",
                  }}
                  value={values.whatsapp_phone}
                  name='whatsapp_phone'
                  onChangeText={(e) => handleChange("whatsapp_phone")(e)}
                  onBlur={() => {
                    setFieldTouched("whatsapp_phone");
                  }}
                  error={errors.whatsapp_phone}
                  touched={touched.whatsapp_phone}
                  placeholder='Digite o numero do seu Whatsapp'
                />

                <InputMask
                  label='Telefone Whatsapp:'
                  type={"cel-phone"}
                  options={{
                    maskType: "BRL",
                    withDDD: true,
                    dddMask: "(99) ",
                  }}
                  value={values.cell_phone}
                  name='cell_phone'
                  onChangeText={(e) => handleChange("cell_phone")(e)}
                  onBlur={() => {
                    setFieldTouched("cell_phone");
                  }}
                  error={errors.cell_phone}
                  touched={touched.cell_phone}
                  placeholder='Digite o numero do seu telefone'
                />

                <Input
                  label='Email:'
                  value={values.email}
                  name='email'
                  onChangeText={(e) => handleChange("email")(e)}
                  onBlur={() => {
                    setFieldTouched("email");
                  }}
                  error={errors.email}
                  touched={touched.email}
                  placeholder='Digite seu email'
                />
                <View style={styles.button}>
                  <Button
                    label='Editar'
                    primary
                    onPress={() => {
                      handleSubmit();
                    }}
                  />
                </View>
              </View>
            )}
          </Formik>
        )}
      </ScrollView>

      <LoadingBord loading={loading} />
    </View>
  );
}

export default UserEdit;
