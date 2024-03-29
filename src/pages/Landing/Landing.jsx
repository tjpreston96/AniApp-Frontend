import { useEffect } from "react";
// import styles from "./Landing.module.css";
import Clock from "../../components/Clock/Clock";
import WelcomeImage from "../../components/WelcomeImage/WelcomeImage";
import Carousel from "../../components/Carousel/Carousel";

const Landing = ({ user }) => {
  useEffect(() => {}, []);

  return (
    <main className="container flex-shrink-0 mb-3">
      <h1 className="text-center text-white">
        Hello, {user ? user.name : "Friend"}
      </h1>
      <Clock />

      <div className="row justify-content-center">
        <WelcomeImage />
      </div>
      <div className="row justify-content-center d-flex mb-3">
        <div className="col col-8 col-md-5">
          <h3 className="text-center text-white">Popular Anime</h3>
          <Carousel type="anime" collection="1,13593,45398" />
        </div>
        <div className="col col-8 col-md-5">
          <h3 className="text-center text-white">Popular Manga</h3>
          <Carousel type="manga" collection="38,57,40815" />
        </div>
      </div>
    </main>
  );
};

export default Landing;
