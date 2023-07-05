import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const axiosConfig = {
  baseURL: "https://assprijuf-backend.herokuapp.com/",
  //baseURL: 'http://192.168.0.4:3000/',
};

export const url = axiosConfig.baseURL;

async () => {
  if (await AsyncStorage.getItem("auth-token")) {
    axiosConfig.headers = {
      Authorization: await AsyncStorage.getItem("auth-token"),
    };
  }
};

export const API = axios.create(axiosConfig);

export const setAuthToken = async (token) => {
  const authToken = `Bearer ${token}`;
  // Salvar o token no storage
  AsyncStorage.setItem("auth-token", authToken);
  // Definir o padrão do axios (header)
  API.defaults.headers.common["Authorization"] = authToken;
};

export const setId = async (id) => {
  const userId = id;
  // Salvar o token no storage
  AsyncStorage.setItem("user-id", userId);
};

export const setAdmin = async (admin) => {
  const userAuth = admin;
  AsyncStorage.setItem("userAuth", JSON.stringify(userAuth));
};
