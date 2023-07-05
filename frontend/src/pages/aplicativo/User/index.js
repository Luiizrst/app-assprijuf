import React, { useState, useEffect } from "react";

import { View, Text, Image, ScrollView } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import { FontAwesome } from "@expo/vector-icons";
import LoadingBord from "../../../components/LoadingBord";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../../../services/api";

import styles from "./styles";

function User({ navigation }) {
  const [load, setLoad] = useState(true);
  const [loading, setLoading] = useState();
  const [users, setUsers] = useState([]);

  async function CatchDate() {
    try {
      setLoading(true);
      const id = await AsyncStorage.getItem("user-id");
      const response = await API.get(`/user/${id}`);
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      console.log({ messageError: err });
      setLoading(false);
      Alert.alert("Falha no servidor!", "Tente novamente mais tarde!", [
        { text: "Ok", onPress: () => navigation.goBack() },
      ]);
    }
  }

  useEffect(() => {
    CatchDate();
    navigation.addListener("focus", () => setLoad(!load));
  }, [load, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonsBoard}>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonEditUser}
            onPress={() => navigation.navigate("UserEdit", { user: users })}
          >
            <Text style={styles.textButtonEdit}>Editar Dados</Text>

            <FontAwesome name='edit' size={30} color='#012a4a' />
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.buttonEditUser}
            onPress={() => navigation.navigate("PasswordEdit", { user: users })}
          >
            <Text style={styles.textButtonEdit}>Alterar Senha</Text>

            <FontAwesome name='lock' size={30} color='#012a4a' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.board}>
        <ScrollView>
          {users.type === "Dependente" ? (
            <View>
              <View style={styles.boxDataImage}>
                {users.imageURL == null ? (
                  <Image
                    style={styles.dataPhoto}
                    source={require("../../../images/user.png")}
                  />
                ) : (
                  <Image
                    style={styles.dataPhoto}
                    source={{ uri: `${users.imageURL}` }}
                  />
                )}
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Responsável:</Text>
                <Text style={styles.dataText}>{users.responsible}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Nome:</Text>
                <Text style={styles.dataText}>{users.name}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>CPF:</Text>
                <Text style={styles.dataText}>{users.cpf}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>RG:</Text>
                <Text style={styles.dataText}>{users.rg}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Tipo sanguíneo:</Text>
                <Text style={styles.dataText}>{users.blood_type}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Data de Nascimento:</Text>
                <Text style={styles.dataText}>{users.date_of_birth}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Estado Civil:</Text>
                <Text style={styles.dataText}>{users.marital_status}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Naturalidade:</Text>
                <Text style={styles.dataText}>{users.naturalness}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Telefone Whatsapp:</Text>
                <Text style={styles.dataText}>{users.whatsapp_phone}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Telefone Celular</Text>
                <Text style={styles.dataText}>{users.cell_phone}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Email:</Text>
                <Text style={styles.dataText}>{users.email}</Text>
              </View>
            </View>
          ) : (
            <View>
              <View style={styles.boxDataImage}>
                {users.imageURL == null ? (
                  <Image
                    style={styles.dataPhoto}
                    source={require("../../../images/user.png")}
                  />
                ) : (
                  <Image
                    style={styles.dataPhoto}
                    source={{ uri: `${users.imageURL}` }}
                  />
                )}
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Nome:</Text>
                <Text style={styles.dataText}>{users.name}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Profissão:</Text>
                <Text style={styles.dataText}>{users.profession}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Unidade Prisional:</Text>
                <Text style={styles.dataText}>{users.prison_unit}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Nº de Inscrição:</Text>
                <Text style={styles.dataText}>{users.registration_number}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>MASP:</Text>
                <Text style={styles.dataText}>{users.masp}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>CPF:</Text>
                <Text style={styles.dataText}>{users.cpf}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>RG:</Text>
                <Text style={styles.dataText}>{users.rg}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Tipo sanguíneo:</Text>
                <Text style={styles.dataText}>{users.blood_type}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Data de Nascimento:</Text>
                <Text style={styles.dataText}>{users.date_of_birth}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Estado Civil:</Text>
                <Text style={styles.dataText}>{users.marital_status}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Naturalidade:</Text>
                <Text style={styles.dataText}>{users.naturalness}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Nome do Pai:</Text>
                <Text style={styles.dataText}>{users.fathers_name}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Nome da Mãe:</Text>
                <Text style={styles.dataText}>{users.mothers_name}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Cidade:</Text>
                <Text style={styles.dataText}>{users.city}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Bairro:</Text>
                <Text style={styles.dataText}>{users.neighborhood}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Endereço:</Text>
                <Text style={styles.dataText}>{users.adress}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Número:</Text>
                <Text style={styles.dataText}>{users.number}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>CEP:</Text>
                <Text style={styles.dataText}>{users.cep}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Telefone Whatsapp:</Text>
                <Text style={styles.dataText}>{users.whatsapp_phone}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Telefone Celular</Text>
                <Text style={styles.dataText}>{users.cell_phone}</Text>
              </View>

              <View style={styles.boxDataText}>
                <Text style={styles.titleDataText}>Email:</Text>
                <Text style={styles.dataText}>{users.email}</Text>
              </View>
            </View>
          )}
        </ScrollView>
      </View>
      <LoadingBord loading={loading} />
    </View>
  );
}

export default User;
