import axios from "axios";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useMenu } from "../../../context/MenuContext";

// const [toke, setToken] = useState("");
// useEffect(() => {
//   const getData = async () => {
//     try {
//       const jsonValue = await AsyncStorage.getItem("verifiedEmail");
//       if (jsonValue != null) {
//         const data = JSON.parse(jsonValue);

//         // Extract user token from the nested structure
//         const userToken = data?.data?.token;
//         setToken(userToken);
//         console.log("usertoken:", toke);
//       }
//     } catch (e) {
//       console.error("Failed to fetch the data from storage", e);
//     }
//   };

//   getData();
// }, []);

// export const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BASE_URL as string,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// api.interceptors.request.use(
//   (config) => {
//     const { token } = useMenu();
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

export const api = `https://novaship.onrender.com/user`;
export const auth = `https://novaship.onrender.com/`;

type LoginType = {
  userName: string;
  password: string;
};

type RegisterUserType = {
  fullName: string;
  email: string;
  password: string;
  userName: string;
  phoneNumber: string;
};

type verifyToken = {
  token: string;
};

// create function to return promise

// Login

const registerUser = async ({
  fullName,
  email,
  password,
  userName,
  phoneNumber,
}: RegisterUserType) => {
  const response = await axios.post(`${api}/register`, {
    fullName,
    email,
    password,
    userName,
    phoneNumber,
  });

  return response.data;
};

// Logout
const Logout = () => {
  localStorage.removeItem("user");
};

export { registerUser, Logout };
