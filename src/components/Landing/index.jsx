import React, { useState } from "react";
import Styles from "./styles.module.scss";

export default function Landing() {
  const [activeComponent, setActiveComponent] = useState(null);
  return (
    <>
      <div>
        <span class="role" onClick={() => setActiveComponent("Dev")}>
          👨‍💻 Developer <span class="invert">👨‍💻 Developer</span>
        </span>
        &nbsp;
        <span class="role" onClick={() => setActiveComponent("Podcaster")}>
          🎙️ Podcaster <span class="invert">🎙️ Podcaster</span>
        </span>
        &nbsp;
        <span class="role" onClick={() => setActiveComponent("Hacker")}>
          📈 Indie Hacker <span class="invert">📈 Indie Hacker</span>
        </span>
      </div>
      AAAAAAAA
    </>
  );
}
