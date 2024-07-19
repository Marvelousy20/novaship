import axios from "axios";

export const api = `https://novaship.onrender.com/user`;

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
const loginUser = async ({ userName, password }: LoginType) => {
  const response = await axios.post(`${api}/login`, {
    userName,
    password,
  });

  return response.data;
};

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

// VerifyEmail
const verifyOtp = async ({ token }: verifyToken) => {
  const response = await axios.post(`${api}/email/verify`, { token });

  return response.data;
};

const resendOtp = async ({ email }: { email: string }) => {
  const response = await axios.post(`${api}/resend-email`, { email });

  return response.data;
};

// Logout
const Logout = () => {
  localStorage.removeItem("user");
};

export { loginUser, registerUser, Logout, verifyOtp, resendOtp };
