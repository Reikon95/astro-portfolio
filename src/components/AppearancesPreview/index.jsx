import React from "react";
import Styles from "./styles.module.scss";

export default function ApperancesPreview() {
  return (
    <a className={Styles.bg} href="/appearances">
      <img
        src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        alt=""
      />
      <div className={Styles.titleOver}>
        <h2>My Appearances</h2>
      </div>
      <div className={Styles.overlay}>
        <h2>Find Out More!</h2>
        <p>My speaking engagements - events, podcasts and Youtube!</p>
      </div>
    </a>
  );
}
