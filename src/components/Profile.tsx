import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/JulianRousseau.png" alt="png avatar" />
      <div>
        <strong>Julian Rousseau</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Nivel {level}
        </p>
      </div>
    </div>
  );
}
