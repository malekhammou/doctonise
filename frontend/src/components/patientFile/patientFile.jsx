import "./patientFile.css";
import React, { useEffect, useState, useContext, useCallback } from "react";
import ConfirmDialog from "../../commonComponents/confirmDialog";
import ImageViewer from "react-simple-image-viewer";
import { AppContext } from "../../context/appContext";
import { ConfirmDialogContext } from "../../context/confirmDialogContext";
import { getPatientById, deletePatient } from "../../services/patientService";
import { uploadImage, getpatientImages } from "../../services/uploadService";
import { NavLink } from "react-router-dom";
const PatientFile = ({ match }) => {
  const [patient, setPatient] = useState([]);
  const [upload, setUpload] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([]);
  const { user } = useContext(AppContext);
  const { confirmOpen, setConfirmOpen } = useContext(ConfirmDialogContext);
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    async function getPatient() {
      if (user._id) {
        const patient = await getPatientById(user._id, match.params.id);
        setPatient(patient[0]);
        console.log(user._id, match.params.id);
        const images = await getpatientImages(match.params.id, user._id);
        setImages(images);
        console.log(images);
      }
    }

    getPatient();
  }, [user._id, match.params.id]);

  const removePatient = async () => {
    try {
      await deletePatient(match.params.id);
      window.location = "/home";
    } catch (ex) {
      alert("Veuillez réssayer plus tard");
    }
  };
  const onChange = (e) => {
    setUpload(e.target.files[0]);
  };
  const onSubmit = async () => {
    try {
      setUpload(await uploadImage(patient, user, upload));
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="main">
      <ConfirmDialog
        backgroundColor="#dd010b"
        title={`Supprimer ${patient.firstname}`}
        open={confirmOpen}
        setOpen={setConfirmOpen}
        onConfirm={() => removePatient()}
      >
        Cette action est irréversible.
      </ConfirmDialog>
      <div className="patient-header">
        {" "}
        <div className="patient-options">
          <div className="option-area">
            <NavLink
              className="patient-option-navlink"
              to={`/home/${patient._id}/settings`}
            >
              <button className="update-patient-button">
                {" "}
                <img
                  className={`update-patient-icon`}
                  src={require(`../../photos/edit.png`)}
                  alt={`update-logo`}
                />
              </button>
            </NavLink>
          </div>
          <div className="separation"></div>
          <div className="option-area">
            <button
              className="remove-patient-button"
              onClick={() => setConfirmOpen(true)}
            >
              {" "}
              <img
                className={`remove-patient-icon`}
                src={require(`../../photos/trash.png`)}
                alt={`delete-logo`}
              />
            </button>
          </div>
        </div>
        <span className="full-name">
          {" "}
          {patient.firstname} {patient.lastname}
        </span>
      </div>
      <div className="card-body">
        <div className="infos">
          {patient.email && (
            <p className="info">
              <span className="label">Email</span>{" "}
              <span className="detail">{patient.email}</span>
            </p>
          )}
          {patient.height && (
            <p className="info">
              <span className="label">Taille</span>{" "}
              <span className="detail">{patient.height} cm</span>
            </p>
          )}
          {patient.weight && (
            <p className="info">
              <span className="label">Poids</span>{" "}
              <span className="detail">{patient.weight} kg</span>
            </p>
          )}
          {patient.birthday && (
            <p className="info">
              <span className="label">Date de naissance</span>{" "}
              <span className="detail">
                {new Date(patient.birthday).toLocaleDateString("fr-FR")}
              </span>
            </p>
          )}
          {patient.bloodFamily && (
            <p className="info">
              <span className="label">Groupe sanguin</span>{" "}
              <span className="detail">{patient.bloodFamily}</span>
            </p>
          )}
          {patient.firstAppointment && (
            <p className="info">
              <span className="label">Premiére visite</span>{" "}
              <span className="detail">
                {" "}
                {new Date(patient.firstAppointment).toLocaleDateString("fr-FR")}
              </span>
            </p>
          )}
          {patient.phone && (
            <p className="info">
              <span className="label">Téléphone</span>{" "}
              <span className="detail">{patient.phone}</span>
            </p>
          )}
          {patient.gender && (
            <p className="info">
              <span className="label">Sexe</span>{" "}
              <span className="detail">{patient.gender}</span>
            </p>
          )}
        </div>
        <div className="uploader">
          <span className="uploads-header">Piéces jointes</span>

          <div>
            {images.map((src, index) => (
              <img
                src={src}
                onClick={() => openImageViewer(index)}
                width="80"
                height="100"
                key={index}
                style={{ margin: "0.5em" }}
                alt=""
              />
            ))}

            {isViewerOpen && (
              <ImageViewer
                src={images}
                currentIndex={currentImage}
                onClose={closeImageViewer}
              />
            )}
          </div>
          <div className="file-field input-field">
            <div className="btn">
              <input type="file" name="upload" onChange={onChange} />
            </div>
            <button onClick={onSubmit} className="btn upload-button">
              upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientFile;
