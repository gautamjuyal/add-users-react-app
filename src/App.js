import React, { useState } from "react";
import InputForm from "./components/InputForm";
import OutputCard from "./components/OutputCard";
import Navigation from "./components/Navigation";
import styles from "./App.module.css";

const USERS_ARRAY = [];

function App() {
  const [collectedData, setCollectedData] = useState(USERS_ARRAY);
  function inputDataSubmission(data) {
    setCollectedData((prevData) => [data, ...prevData]);
  }

  return (
    <div className={styles.app}>
      <Navigation></Navigation>
      <InputForm onDataSubmission={inputDataSubmission} />
      {collectedData.length > 0 && <OutputCard data={collectedData} />}
    </div>
  );
}

export default App;
