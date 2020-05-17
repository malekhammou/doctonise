import React from "react";
import Navbar from "../../commonComponents/navbar/navbar";
import SideDrawer from "../../commonComponents/sidedrawer/sidedrawer";
import Backdrop from "../../commonComponents/backdrop/backdrop";
const HomePage = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <SideDrawer />
      <Backdrop />
    </div>
  );
};

export default HomePage;
