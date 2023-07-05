import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  ScrollView,
  Modal,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Erro from "../../../components/Erro/index";
import LoadingBord from "../../../components/LoadingBord/index";

import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

import { API } from "../../../services/api";

function ManagementUsers({ navigation }) {
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
      const response = await API.get("/users");
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

  async function deleteDate() {
    try {
      setLoading(true);
      await API.delete(`/user/${idDestroy}`);
      CatchDate();
      setLoading(false);
      setModalVisible(!modalVisible);
    } catch (err) {
      console.log(err.response.data.error);
      Alert.alert("Erro no sistema", "Erro ao tentar remover usuário", [
        { text: "Ok" },
      ]);
      setLoading(false);
    }
  }

  useEffect(() => {
    idUser();
    CatchDate();
    navigation.addListener("focus", () => setLoad(!load));
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
          {users && (
            <View style={styles.boxUsers}>
              <ScrollView>
                {users.map((user) => (
                  <>
                    {user._id != id && user.accept != false && (
                      <View style={styles.buttonUsers} key={user._id}>
                        <View style={styles.boxUsersImage}>
                          {user.imageURL == null ? (
                            <Image
                              style={styles.usersPhoto}
                              source={require("../../../images/user.png")}
                            />
                          ) : (
                            <Image
                              style={styles.usersPhoto}
                              source={{ uri: `${user.imageURL}` }}
                            />
                          )}
                        </View>

                        <View style={styles.boxUserUtilities}>
                          <View style={styles.boxUsersText}>
                            <Text style={styles.titleUsersText}>
                              {user.name}
                            </Text>
                          </View>

                          <View style={styles.boxButton}>
                            <TouchableOpacity
                              style={styles.buttonView}
                              onPress={() =>
                                navigation.navigate("UserView", { dates: user })
                              }
                            >
                              <FontAwesome
                                name='eye'
                                size={30}
                                color='#012a4a'
                              />
                            </TouchableOpacity>
                            {user.type !== "Dependente" && (
                              <TouchableOpacity
                                style={styles.buttonEdit}
                                onPress={() =>
                                  navigation.navigate("UserEditAdm", {
                                    dates: user,
                                  })
                                }
                              >
                                <FontAwesome
                                  name='edit'
                                  size={30}
                                  color='#012a4a'
                                />
                              </TouchableOpacity>
                            )}

                            <TouchableOpacity
                              style={styles.buttonDelete}
                              onPress={() => {
                                setModalVisible(true);
                                setIdDestroy(user._id);
                              }}
                            >
                              <FontAwesome
                                name='trash'
                                size={30}
                                color='#012a4a'
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    )}
                  </>
                ))}
              </ScrollView>
            </View>
          )}
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
                  }}
                >
                  <FontAwesome name='times' size={35} color='#BE2C2C' />
                </TouchableHighlight>
              </View>

              <Text style={styles.modalText}>
                Deseja mesmo deletar este usuário?
              </Text>

              <TouchableHighlight
                style={styles.buttonModal}
                onPress={() => {
                  deleteDate();
                }}
              >
                <Text style={{ color: "#fff" }}>Deletar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <LoadingBord loading={loading} />
      </View>
    );
  }
}

export default ManagementUsers;
