import React from "react";
import "./Home.css";
import Taskbar from "./../components/Taskbar";
import Menu from "./../components/Menu";
const Home = () => {
  return (
    <>
      <div>
        <Menu />

        <Taskbar />
      </div>
    </>
  );
};
export default Home;
