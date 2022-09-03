import React, { useState } from "react";
import Styles from "./styles.module.scss";

export default function Landing() {
  const [activeRole, setActiveRole] = useState(null);
  const roles = [
    {
      role: "dev",
      text: "I am full stack software engineer, specialising in Javascript and Typescript, using the MERN Stack (MongoDB, Express, React, Node). I'm passionate about user experience at scale and consider myself a highly commercially oriented developer due to my original background in business.",
    },
    {
      role: "podcaster",
      text: "I host a podcast, which is part of the wider tech careers network The Coder Career. You can also regularly find me appearing on other podcasts within the tech space. If I ever have time, I want to launch a rugby podcast one day!",
    },
    {
      role: "hacker",
      text: "I like to build SaaS products, like The Coder Career in my spare time. I always have some kind of project in the works - ask me about my next one!",
    },
  ];

  return (
    <>
      <div>
        <span className={Styles.role} onClick={() => setActiveRole("dev")}>
          👨‍💻 Developer
        </span>
        &nbsp;
        <span
          className={Styles.role}
          onClick={() => setActiveRole("podcaster")}
        >
          🎙️ Podcaster
        </span>
        &nbsp;
        <span className={Styles.role} onClick={() => setActiveRole("hacker")}>
          📈 Indie Hacker
        </span>
      </div>
      {activeRole && (
        <div className={Styles.details}>
          {roles.find((el) => el.role === activeRole).text}
        </div>
      )}
    </>
  );
}
