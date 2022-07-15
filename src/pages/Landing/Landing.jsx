import styles from "./Landing.module.css";
import Clock from "../../components/Clock/Clock";

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : "friend"}</h1>
      <Clock />
    </main>
  );
};

export default Landing;
