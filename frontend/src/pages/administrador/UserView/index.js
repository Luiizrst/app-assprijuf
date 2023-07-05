import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Modal,
  Alert,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";

import LoadingBord from "../../../components/LoadingBord/index";

import { API } from "../../../services/api";

import styles from "./styles";

function UserView(props) {
  const users = props.route.params.dates;
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  async function deleteDate() {
    try {
      setLoading(true);
      await API.delete(`/user/${users._id}`);
      Alert.alert("Rejeitado", "Usuario Rejeitado!", [
        { text: "Ok", onPress: () => props.navigation.goBack() },
      ]);
      setLoading(false);
      setDeleteUser(false);
      setModalVisible(!modalVisible);
    } catch (err) {
      setLoading(false);
      Alert.alert("Erro no Servidor", "Erro no Servidor", [{ text: "Ok" }]);
      setModalVisible(!modalVisible);
      setDeleteUser(false);
    }
  }

  async function acceptDate() {
    try {
      setLoading(true);
      await API.put(`/acceptAdmin/${users._id}`, {
        accept: true,
      });
      Alert.alert("Aceito", "Usuario aceito!", [
        { text: "Ok", onPress: () => props.navigation.goBack() },
      ]);
      setLoading(false);
      setDeleteUser(false);
      setModalVisible(!modalVisible);
    } catch (err) {
      setLoading(false);
      Alert.alert("Erro no Servidor", "Erro no Servidor", [{ text: "Ok" }]);
      setModalVisible(!modalVisible);
    }
  }

  if (!users) {
    return (
      <View style={styles.container}>
        <View style={styles.button}>
          {/*                 <TouchableOpacity
                    style={styles.buttonEditUser}
                    onPress={() => navigation.navigate('UserEdit')}
                    disabled={true}
                >
                    <Text style={styles.textButtonEdit}>
                        Editar Usuário
                    </Text>

                    <FontAwesome
                        name="edit"
                        size={35}
                        color="#012a4a"
                    />
                </TouchableOpacity> */}
        </View>
        <View style={styles.board}>
          <View style={styles.boardError}>
            <Text style={styles.messageError}>Falha no servidor!</Text>

            <FontAwesome
              name='exclamation-triangle'
              size={60}
              color='#BE2C2C'
            />
          </View>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {users.accept != true && (
          <View style={styles.acceptBox}>
            <TouchableOpacity
              style={styles.buttonDelete}
              onPress={() => {
                setModalVisible(true);
                setDeleteUser(true);
              }}
            >
              <FontAwesome name='times' size={30} color='#BE2C2C' />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonAccept}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <FontAwesome name='check' size={30} color='green' />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.board}>
          <ScrollView>
            {users.type === "Dependente" ? (
              <View>
                <View
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    marginBottom: 20,
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.titleDataText}>DEPENDENTE</Text>
                </View>

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
                  <Text style={styles.titleDataText}>Nº de Inscrição:</Text>
                  <Text style={styles.dataText}>
                    {users.registration_number}
                  </Text>
                </View>

                <View style={styles.boxDataText}>
                  <Text style={styles.titleDataText}>MASP:</Text>
                  <Text style={styles.dataText}>{users.masp}</Text>
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
                  <Text style={styles.titleDataText}>Profissão:</Text>
                  <Text style={styles.dataText}>{users.profession}</Text>
                </View>

                <View style={styles.boxDataText}>
                  <Text style={styles.titleDataText}>Unidade Prisional:</Text>
                  <Text style={styles.dataText}>{users.prison_unit}</Text>
                </View>

                <View style={styles.boxDataText}>
                  <Text style={styles.titleDataText}>Cidade:</Text>
                  <Text style={styles.dataText}>{users.city}</Text>
                </View>

                <View style={styles.boxDataText}>
                  <Text style={styles.titleDataText}>CEP:</Text>
                  <Text style={styles.dataText}>{users.cep}</Text>
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
        <Modal animationType='fade' transparent={true} visible={modalVisible}>
          <View style={styles.mask}></View>
          <View style={styles.modalContent}>
            <View style={styles.content}>
              <View style={styles.exitModal}>
                <TouchableHighlight
                  style={styles.exitButtonModal}
                  onPress={() => {
                    setModalVisible(false);
                    setDeleteUser(false);
                  }}
                >
                  <FontAwesome name='times' size={35} color='#BE2C2C' />
                </TouchableHighlight>
              </View>
              {deleteUser == true ? (
                <>
                  <Text style={styles.modalText}>
                    Deseja mesmo rejeitar este usuário?
                  </Text>

                  <TouchableHighlight
                    style={styles.buttonModal}
                    onPress={() => {
                      deleteDate();
                    }}
                  >
                    <Text style={{ color: "#fff" }}>Deletar</Text>
                  </TouchableHighlight>
                </>
              ) : (
                <>
                  <Text style={styles.modalText}>
                    Deseja mesmo aceitar este usuário?
                  </Text>

                  <TouchableHighlight
                    style={styles.buttonModalAccept}
                    onPress={() => {
                      acceptDate();
                    }}
                  >
                    <Text style={{ color: "#fff" }}>Aceitar</Text>
                  </TouchableHighlight>
                </>
              )}
            </View>
          </View>
        </Modal>

        <LoadingBord loading={loading} />
      </View>
    );
  }
}

export default UserView;
