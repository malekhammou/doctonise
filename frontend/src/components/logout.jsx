import { useEffect } from "react";
const Logout = ({ history }) => {
  useEffect(() => {
    localStorage.removeItem("token");
    history.replace("/");
  });

  return null;
};

export default Logout;
