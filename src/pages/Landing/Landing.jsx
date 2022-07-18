import { useEffect } from "react";
// import styles from "./Landing.module.css";
import Clock from "../../components/Clock/Clock";
import WelcomeImage from "../../components/WelcomeImage/WelcomeImage";
import Carousel from "../../components/Carousel/Carousel";

const Landing = ({ user }) => {
  useEffect(() => {}, []);

  return (
    <main className="container container-fluid">
      <h1 className="text-center">Hello, {user ? user.name : "Friend"}</h1>
      <Clock />

      <div className="row justify-content-center">
        <div className="col-sm-6 col-md-6">
          <WelcomeImage />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5">
          <h3 className="text-center">Popular Anime</h3>
          <Carousel type="anime" collection="1,13593,45398" />
        </div>
        <div className="col-5">
          <h3 className="text-center">Popular Manga</h3>
          <Carousel type="manga" collection="38,57,40815" />
        </div>
      </div>
    </main>
  );
};

export default Landing;
