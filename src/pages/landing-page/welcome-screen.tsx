import React from "react";
import { Link } from "react-router-dom";
import AppRouter from "../../navigation/Approuter";

const WelcomeScreen = (props: any) => {
  return (
    <div className="h-screen w-screen bg-red-500 flex items-center justify-center">
      <h1 className="">Welcome To travel guide</h1>
      <Link id="link" to={"/page1"}>
        <h1>Click here to start</h1>
      </Link>
    </div>
  );
};

export default WelcomeScreen;
