import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/stats";
export async function getPatientsCount(doctorId) {
  const { data: count } = await http.get(
    `${apiEndPoint}/${doctorId}/patientsCount`
  );
  return count;
}
export default {
  getPatientsCount,
};
