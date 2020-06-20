import "./stats.css";
import React, { useContext, useState, useEffect } from "react";
import { getPatientsCount, getGenderStats } from "../../services/statsService";
import { AppContext } from "../../context/appContext";
const Stats = () => {
  let { user } = useContext(AppContext);
  const [count, setCount] = useState(0);
  const [countMale, setCountMale] = useState(0);
  const [countFemale, setCountFemale] = useState(0);
  const [malePercentage, setMalePercentage] = useState(0);
  const [femalePercentage, setFemalePercentage] = useState(0);

  useEffect(() => {
    async function getCount() {
      if (user._id) {
        const count = await getPatientsCount(user._id);
        const data = await getGenderStats(user._id);
        setMalePercentage(data.formattedMalePercentage);
        setFemalePercentage(data.formattedFemalePercentage);
        setCountMale(data.countMale);
        setCountFemale(data.countFemale);

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
      <div className="card">
        <span className="card-label">{countMale} Hommes</span>
        <span className="card-value">{malePercentage}%</span>
      </div>
      <div className="card">
        <span className="card-label">{countFemale} Femmes</span>
        <span className="card-value">{femalePercentage}%</span>
      </div>
    </div>
  );
};

export default Stats;
