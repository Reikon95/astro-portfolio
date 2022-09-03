import React, { useState } from "react";
import ActiveRole from "./activeRole";
import Styles from "./styles.module.scss";

export default function Landing() {
  const [activeRole, setActiveRole] = useState(null);
  const roles = [
    {
      role: "dev",
      text: "I am full stack software engineer, specialising in Javascript and Typescript, using the MERN Stack (MongoDB, Express, React, Node)",
    },
    {
      role: "podcaster",
      text: "I host The Coder Career Podcast, which is part of the wider tech careers networking under The Coder Career. You can also regularly find me appearing on other podcasts within the tech space. If I ever have time, I want to launch a rugby podcast one day!",
    },
    {
      role: "hacker",
      text: "I like to build SaaS products, like The Coder Career in my spare time. I always have some kind of project in the works!",
    },
  ];

  console.log(roles.find((el) => el.role === "dev"));
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
      <div className={Styles.details}>Active: {activeRole}</div>
      {activeRole && (
        <div className={Styles.details}>
          {roles.find((el) => el.role === activeRole).text}
        </div>
      )}
    </>
  );
}
