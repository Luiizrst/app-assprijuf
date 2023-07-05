import React, { useState, useEffect } from "react";

import {
  Text,
  View,
  Image,
  ScrollView,
  BackHandler,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import * as ScreenOrientation from "expo-screen-orientation";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../../../services/api";

import LoadingBord from "../../../components/LoadingBord/index";

import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

function Carteirinha({ navigation }) {
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  const [bloodType, setBloodType] = useState();

  async function CatchDate() {
    setLoading(true);
    try {
      const id = await AsyncStorage.getItem("user-id");
      const response = await API.get(`/user/${id}`);
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      console.log({ messageError: err });
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    CatchDate();
  }, []);

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);

  function back() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
    navigation.navigate("Menu");
  }

  BackHandler.addEventListener("hardwareBackPress", () => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
  });

  return (
    <View style={styles.container}>
      {users.type === "Dependente" ? (
        <ImageBackground
          source={require("../../../images/background.png")}
          style={styles.contents}
        >
          <ScrollView>
            <View style={styles.topCard}>
              <View style={styles.butttonCard}>
                <TouchableOpacity
                  style={styles.buttonBack}
                  onPress={() => back()}
                >
                  <FontAwesome name='arrow-left' size={20} color='#fff' />
                </TouchableOpacity>
              </View>

              <View style={styles.logoCard}>
                <Image
                  source={require("../../../images/logoCard.png")}
                  style={styles.logoImage}
                />
              </View>

              <View style={styles.titleCard}>
                <Text style={styles.titleCardText}>
                  Associação do Sistema Socioeducativo e Prisional de Juiz de
                  Fora
                </Text>
              </View>
            </View>

            <View style={styles.bottomCard}>
              <View style={styles.boardInfo}>
                <View style={styles.boxMain}>
                  <Text style={styles.profession}>{users.type}</Text>
                  <Text style={styles.info}>{users.name}</Text>
                </View>

                <View style={styles.infos}>
                  <View style={styles.infoLeft}>
                    <View style={styles.textInfo}>
                      <Text style={styles.title}>CPF: </Text>
                      <Text style={styles.info}>{users.cpf}</Text>
                    </View>

                    <View style={styles.textInfo}>
                      <Text style={styles.title}>RG: </Text>
                      <Text style={styles.info}>{users.rg}</Text>
                    </View>
                    <View style={styles.textInfo}>
                      <Text style={styles.title}>Responsável: </Text>
                      <Text style={styles.info}>{users.responsible}</Text>
                    </View>
                  </View>

                  <View style={styles.infoRight}>
                    <View style={styles.textInfo}>
                      <Text style={styles.title}>Tipo Sanguíneo: </Text>
                      <Text style={styles.info}>{users.blood_type}</Text>
                    </View>

                    <View style={styles.textInfo}>
                      <Text style={styles.title}>Nacimento: </Text>
                      <Text style={styles.info}>{users.date_of_birth}</Text>
                    </View>

                    <View style={styles.textInfo}>
                      <Text style={styles.title}>Telefone: </Text>
                      <Text style={styles.info}>{users.whatsapp_phone}</Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.photoCard}>
                {users.imageURL == null ? (
                  <Image
                    source={require("../../../images/user.png")}
                    style={styles.userImage}
                  />
                ) : (
                  <Image
                    source={{ uri: `${users.imageURL}` }}
                    style={styles.userImage}
                  />
                )}
              </View>
            </View>

            <LoadingBord loading={loading} />
          </ScrollView>
        </ImageBackground>
      ) : (
        <ImageBackground
          source={require("../../../images/background.png")}
          style={styles.contents}
        >
          <ScrollView>
            <View style={styles.topCard}>
              <View style={styles.butttonCard}>
                <TouchableOpacity
                  style={styles.buttonBack}
                  onPress={() => back()}
                >
                  <FontAwesome name='arrow-left' size={20} color='#fff' />
                </TouchableOpacity>
              </View>

              <View style={styles.logoCard}>
                <Image
                  source={require("../../../images/logoCard.png")}
                  style={styles.logoImage}
                />
              </View>

              <View style={styles.titleCard}>
                <Text style={styles.titleCardText}>
                  Associação do Sistema Socioeducativo e Prisional de Juiz de
                  Fora
                </Text>
              </View>
            </View>

            <View style={styles.bottomCard}>
              <View style={styles.boardInfo}>
                <View style={styles.boxMain}>
                  <Text style={styles.profession}>{users.profession}</Text>
                  <Text style={styles.info}>{users.name}</Text>
                </View>

                <View style={styles.infos}>
                  <View style={styles.infoLeft}>
                    <View style={styles.textInfo}>
                      <Text style={styles.title}>CPF: </Text>
                      <Text style={styles.info}>{users.cpf}</Text>
                    </View>

                    <View style={styles.textInfo}>
                      <Text style={styles.title}>MASP: </Text>
                      <Text style={styles.info}>{users.masp}</Text>
                    </View>

                    <View style={styles.textInfo}>
                      <Text style={styles.title}>RG: </Text>
                      <Text style={styles.info}>{users.rg}</Text>
                    </View>
                  </View>

                  <View style={styles.infoRight}>
                    <View style={styles.textInfo}>
                      <Text style={styles.title}>Tipo Sanguíneo: </Text>
                      <Text style={styles.info}>{users.blood_type}</Text>
                    </View>

                    <View style={styles.textInfo}>
                      <Text style={styles.title}>Nacimento: </Text>
                      <Text style={styles.info}>{users.date_of_birth}</Text>
                    </View>

                    <View style={styles.textInfo}>
                      <Text style={styles.title}>Matrícula: </Text>
                      <Text style={styles.info}>
                        {users.registration_number}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              <View style={styles.photoCard}>
                {users.imageURL == null ? (
                  <Image
                    source={require("../../../images/user.png")}
                    style={styles.userImage}
                  />
                ) : (
                  <Image
                    source={{ uri: `${users.imageURL}` }}
                    style={styles.userImage}
                  />
                )}
              </View>
            </View>

            <LoadingBord loading={loading} />
          </ScrollView>
        </ImageBackground>
      )}
    </View>
  );
}

export default Carteirinha;
