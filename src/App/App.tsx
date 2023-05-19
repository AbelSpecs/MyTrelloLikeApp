import React from "react";

import logo from "../assets/logo.png";

import styles from "./App.module.scss";
import Dock from "./components/Dock/Dock";

function App() {
  return (
    <main style={{width:'100%'}}>
      <Dock/>
      {/* <img alt="Softvision" src={logo} width={320} />
      <h1 className={styles.title}>Lets get this party started</h1> */}
    </main>
  );
}

export default App;
