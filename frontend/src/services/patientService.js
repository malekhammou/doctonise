import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/patients";
export async function getpatients(doctorId) {
  const { data: patients } = await http.get(`${apiEndPoint}/${doctorId}`);
  return patients;
}
export async function getPatientById(doctorId, patientId) {
  const { data: patient } = await http.get(
    `${apiEndPoint}/${doctorId}/${patientId}`
  );
  return patient;
}

export default {
  getpatients,
  getPatientById,
};
