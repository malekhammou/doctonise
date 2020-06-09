import "./stats.css";
import React, { useContext, useState, useEffect } from "react";
import { getPatientsCount } from "../../services/statsService";
import { AppContext } from "../../context/appContext";
const Stats = () => {
  let { user } = useContext(AppContext);
  const [count, setCount] = useState(0);
  useEffect(() => {
    async function getCount() {
      if (user._id) {
        const count = await getPatientsCount(user._id);
        setCount(count.count);
      }
    }
    getCount();
  }, [user._id]);
  return (
    <div className="stats-wrapper">
      <div className="card">
        <span className="card-value">{count}</span>
        <span className="card-label">Patients</span>
      </div>
    </div>
  );
};

export default Stats;
