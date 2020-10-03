import http from "./httpService";
import { apiUrl, preset, uploadUrl } from "../config.json";
const apiEndPoint = apiUrl + "/uploads";
export async function uploadImage(patient, user, upload) {
  const formData = new FormData();
  formData.append("file", upload);
  formData.append("upload_preset", preset);
  const res = await http.post(uploadUrl, formData);
  const imageUrl = res.data.secure_url;
  const patientId = patient._id;
  const doctorId = user._id;
  const image = await http.post(apiEndPoint, {
    imageUrl,
    patientId,
    doctorId,
  });
  return image.data;
}
export async function getpatientImages(patientId, doctorId) {
  const images = await http.get(`${apiEndPoint}/${doctorId}/${patientId}`);
  return images.data;
}
export default {
  uploadImage,
  getpatientImages,
};
