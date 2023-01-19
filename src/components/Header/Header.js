import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Your very own personalized <span> Resume! </span>{" "}
        </p>{" "}
        <hr/>
        <p className={styles.heading}>
          Make your own resume. <span span> It 's free</span>{" "}
        </p>{" "}
      </div>{" "}
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>{" "}
    </div>
  );
}

export default Header;
