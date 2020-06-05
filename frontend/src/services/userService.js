import http from "./httpService";
import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";
const apiEndPoint = apiUrl + "/auth";
const tokenKey = "token";
export async function login(user) {
  const { data: jwt } = await http.post(apiEndPoint, {
    email: user.email,
    password: user.password,
  });
  localStorage.setItem(tokenKey, jwt);
}
export function getcurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
export async function changePassword(user) {
  const { data } = await http.post(`${apiUrl}/doctors/changePassword`, {
    email: user.email,
    currentPassword: user.currentPassword,
    newPassword: user.newPassword,
  });
  return data;
}
export default {
  login,
  getcurrentUser,
  changePassword,
};
