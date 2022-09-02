import React, { useState } from "react";
import Styles from "./styles.module.scss";

export default function Landing() {
  const [activeComponent, setActiveComponent] = useState(null);
  return (
    <>
      <div>
        <span className={Styles.role} onClick={() => setActiveComponent("Dev")}>
          👨‍💻 Developer <span className={Styles.invert}>👨‍💻 Developer</span>
        </span>
        &nbsp;
        <span
          className={Styles.role}
          onClick={() => setActiveComponent("Podcaster")}
        >
          🎙️ Podcaster <span className={Styles.invert}>🎙️ Podcaster</span>
        </span>
        &nbsp;
        <span
          className={Styles.role}
          onClick={() => setActiveComponent("Hacker")}
        >
          📈 Indie Hacker <span className={Styles.invert}>📈 Indie Hacker</span>
        </span>
      </div>
      <div className={Styles.details}>Active: {activeComponent}</div>
    </>
  );
}
