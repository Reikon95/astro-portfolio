import React from "react";
import Styles from "./styles.module.scss";

export default function WorkPreview() {
  return (
    <div className={Styles.bg}>
      <img
        src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1489&q=80"
        alt=""
      />
      <div className={Styles.overlay}>
        <h2>Find Out More!</h2>
        <p>My comprehensive work history</p>
      </div>
    </div>
  );
}
