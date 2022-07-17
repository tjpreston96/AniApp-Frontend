import { useEffect } from "react";
import styles from "./Landing.module.css";
import Clock from "../../components/Clock/Clock";
import WelcomeImage from "../../components/WelcomeImage/WelcomeImage";
import Carousel from "../../components/Carousel/Carousel";

const Landing = ({ user }) => {
  useEffect(() => {}, []);

  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : "Friend"}</h1>
      <Clock />
      <WelcomeImage />

      <h3>Popular Anime</h3>
      <Carousel type="anime" collection="1,13593,45398" />
      <hr />

      <h3>Popular Manga</h3>
      <Carousel type="manga" collection="38,1531,40815" />
    </main>
  );
};

export default Landing;
