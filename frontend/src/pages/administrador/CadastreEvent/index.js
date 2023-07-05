import React, { useState, useCallback } from "react";

import {
  View,
  Text,
  TextInput,
  ScrollView,
  Modal,
  TouchableHighlight,
  Image,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import LoadingBord from "../../../components/LoadingBord";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import pt from "date-fns/locale/pt";
import { format } from "date-fns";

import { API } from "../../../services/api";

import { FontAwesome } from "@expo/vector-icons";

import { Picker } from "@react-native-picker/picker";

import styles from "./styles";

/* // o que ele faz quando chega notificacao com o app aberto
Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldShowAlert: true
        };
    }
}); */

function CadastreEvent({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sucess, setSuccess] = useState(false);

  const [start, setStart] = useState();
  const [dateView, setDateView] = useState();
  const [note, setNote] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [duration, setDuration] = useState();
  const [durationView, setDurationView] = useState();

  const [modalVisible, setModalVisible] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  /*     const saveOptions = useCallback(async () => {
            let finalStatus = '';
            let token = '';
            if (Constants.isDevice) {
                const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
                finalStatus = existingStatus;
    
                if (existingStatus !== 'granted') {
                    alert("Olá! Permita que o aplicativo te envie notificações para receber os lembretes!");
                    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
                    finalStatus = status;
                }
                if (finalStatus !== 'granted') {
                    alert("Não foi possível obter o token de notificações!");
                    setIsLoading(false);
                    return;
                }
                token = (await Notifications.getExpoPushTokenAsync()).data;
            } else {
                alert("Notificações só funcionam em dispositivos físicos!");
            }
    
            if (Platform.OS === 'android') {
                Notifications.setNotificationChannelAsync('default', {
                    name: 'default',
                    importance: Notifications.AndroidImportance.MAX,
                    vibrationPattern: [0, 250, 250, 250],
                    lightColor: '#FF231F7C',
                });
            }
    
            Notifications.cancelAllScheduledNotificationsAsync();
    
            // notificacão eventos 
            console.log(hours + " : " + minutes)
            let EventNotification = await Notifications.scheduleNotificationAsync({
                content: {
                    title: "Evento",
                    body: note,
                    //data: JSON.stringify({ screen: "Cigarros fumados" }),
                    sound: true
                },
    
                trigger: {
                    hour: hours,
                    minute: minutes,
                    repeats: true
                }
            });
        }); */

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDateDB = format(date, "yyyy/MM/dd HH:mm:ss");

    const formattedDateView = format(
      date,
      "'Dia' dd 'de' MMMM 'de' yyyy, 'às' HH:mm'h'",
      { locale: pt }
    );

    setStart(formattedDateDB);
    setDateView(formattedDateView);

    hideDatePicker();
  };

  async function handleTime() {
    const dur = hours + ":" + minutes + ":00";
    const durView = hours + " h & " + minutes + " min";
    setDuration(dur);
    setDurationView(durView);
    setModalVisible(!modalVisible);
  }

  async function cadastre() {
    setLoading(true);
    try {
      await API.post("/events", {
        note,
        start,
        dateView,
        duration,
        durationView,
      });
      //saveOptions();
      setLoading(false);
      setSuccess(true);
    } catch (err) {
      setError(true);
      setLoading(false);
      console.log({ messageError: err });
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        {error == true ? (
          <View style={styles.boardError}>
            <Text style={styles.messageError}>Falha no servidor!</Text>

            <FontAwesome
              name='exclamation-triangle'
              size={60}
              color='#BE2C2C'
            />
          </View>
        ) : (
          <ScrollView>
            {sucess == true ? (
              <View style={styles.viewSucess}>
                <Text style={styles.textSucessMessage}>Evento Cadastrado!</Text>
              </View>
            ) : (
              <View>
                <View style={styles.inputs}>
                  <Text style={styles.titleInput}>Título:</Text>
                  <TextInput
                    style={styles.inputTitle}
                    placeholder={"Nome do Evento"}
                    autoCorrect={false}
                    value={note}
                    onChangeText={(text) => setNote(text)}
                    maxLength={50}
                  />
                </View>

                <View style={styles.contentPickers}>
                  <View>
                    <TouchableOpacity
                      style={styles.buttonSelectDate}
                      onPress={showDatePicker}
                    >
                      <FontAwesome name='calendar' size={25} color='#fff' />

                      <Text style={styles.textButton}>
                        Selecione a data e o horário
                      </Text>
                    </TouchableOpacity>
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode='datetime'
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                    />
                  </View>

                  <View>
                    <TouchableOpacity
                      style={styles.buttonSelectDate}
                      onPress={() => {
                        setModalVisible(true);
                      }}
                    >
                      <FontAwesome name='clock-o' size={25} color='#fff' />

                      <Text style={styles.textButton}>
                        Selecione a duração do evento
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}

            <View style={styles.dateView}>
              {dateView ? (
                <View>
                  {sucess == true ? (
                    <View style={styles.titleSucess}>
                      <Text style={styles.textSucess}>{note}</Text>
                    </View>
                  ) : null}
                  <View style={styles.dateFinalView}>
                    <View style={styles.iconDate}>
                      <FontAwesome name='calendar' size={30} color='#9A2B2B' />

                      <FontAwesome name='clock-o' size={30} color='#9A2B2B' />
                    </View>
                    <View style={styles.textDate}>
                      <Text style={styles.dateFinal}>{dateView}</Text>

                      {hours ? (
                        <View style={styles.dateView}>
                          <Text style={styles.dateFinal}>{durationView}</Text>
                        </View>
                      ) : null}
                    </View>
                  </View>
                </View>
              ) : null}
            </View>

            {sucess == true ? (
              <View style={styles.viewButtonsSucess}>
                <TouchableOpacity
                  style={styles.buttonCadastre}
                  onPress={() => navigation.navigate("ManagementEvents")}
                >
                  <Text style={styles.textButtonCadastre}>Voltar</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.buttonCadastreView}>
                <TouchableOpacity
                  style={styles.buttonCadastre}
                  onPress={() => {
                    cadastre();
                  }}
                >
                  <Text style={styles.textButtonCadastre}>Salvar</Text>
                </TouchableOpacity>
              </View>
            )}
          </ScrollView>
        )}
      </View>

      {/* Modal */}

      <Modal animationType='fade' transparent={true} visible={modalVisible}>
        <View style={styles.modalContent}>
          <View style={styles.mask}></View>
          <View style={styles.content}>
            <Text style={styles.modalText}>Selecione a duração do evento:</Text>

            <View style={styles.timePicker}>
              <Picker
                selectedValue={hours}
                style={styles.pickers}
                onValueChange={(itemValue, itemIndex) => setHours(itemValue)}
              >
                <Picker.Item label='Horas' value={null} enabled={false} />
                <Picker.Item label='00 h' value='00' />
                <Picker.Item label='01 h' value='01' />
                <Picker.Item label='02 h' value='02' />
                <Picker.Item label='03 h' value='03' />
                <Picker.Item label='04 h' value='04' />
                <Picker.Item label='05 h' value='05' />
                <Picker.Item label='06 h' value='06' />
                <Picker.Item label='07 h' value='07' />
                <Picker.Item label='08 h' value='08' />
                <Picker.Item label='09 h' value='09' />
                <Picker.Item label='10 h' value='10' />
                <Picker.Item label='11 h' value='11' />
                <Picker.Item label='12 h' value='12' />
                <Picker.Item label='13 h' value='13' />
                <Picker.Item label='14 h' value='14' />
                <Picker.Item label='15 h' value='15' />
                <Picker.Item label='16 h' value='16' />
                <Picker.Item label='17 h' value='17' />
                <Picker.Item label='18 h' value='18' />
                <Picker.Item label='19 h' value='19' />
                <Picker.Item label='20 h' value='20' />
                <Picker.Item label='21 h' value='21' />
                <Picker.Item label='22 h' value='22' />
                <Picker.Item label='23 h' value='23' />
              </Picker>

              <Picker
                selectedValue={minutes}
                style={styles.pickers}
                onValueChange={(itemValue, itemIndex) => setMinutes(itemValue)}
              >
                <Picker.Item label='Min' value={null} enabled={false} />
                <Picker.Item label='00 Min' value='00' />
                <Picker.Item label='05 Min' value='05' />
                <Picker.Item label='10 Min' value='10' />
                <Picker.Item label='15 Min' value='15' />
                <Picker.Item label='20 Min' value='20' />
                <Picker.Item label='25 Min' value='25' />
                <Picker.Item label='30 Min' value='30' />
                <Picker.Item label='35 Min' value='35' />
                <Picker.Item label='40 Min' value='40' />
                <Picker.Item label='45 Min' value='45' />
                <Picker.Item label='50 Min' value='50' />
                <Picker.Item label='55 Min' value='55' />
              </Picker>
            </View>
            <View style={styles.exitModal}>
              <TouchableHighlight
                style={styles.buttonModal}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textModal}>Cancelar</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.buttonModal}
                onPress={() => {
                  handleTime();
                }}
              >
                <Text style={styles.textModal}>OK</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>

      <LoadingBord loading={loading} />
    </View>
  );
}

export default CadastreEvent;
