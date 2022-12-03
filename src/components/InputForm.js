import styles from "./InputForm.module.css";
import React, { useState } from "react";

function InputForm(props) {
  const [chosenUserName, setChosenUserName] = useState("");
  const [chosenAge, setChosenAge] = useState("");

  function userNameChangeHandler(event) {
    setChosenUserName(event.target.value);
  }

  function ageChangeHandler(event) {
    setChosenAge(event.target.value);
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    if (chosenUserName.trim() === "" || chosenAge.trim() === "") {
      console.log("Data cannot be empty");
      return;
    }
    if (+chosenAge < 1) {
      console.log("can age ever be negative? curious");
      return;
    }

    const formData = {
      id: Math.random().toString(),
      name: chosenUserName,
      age: chosenAge,
    };
    props.onDataSubmission(formData);
    setChosenAge("");
    setChosenUserName("");
  }

  return (
    <form className={styles["input-form"]} onSubmit={formSubmitHandler}>
      <label>Username</label>
      <input
        name="UserName"
        type="text"
        onChange={userNameChangeHandler}
        value={chosenUserName}></input>
      <label>Age</label>
      <input
        name="Age"
        type="number"
        onChange={ageChangeHandler}
        value={chosenAge}></input>
      <button type="submit">Generate</button>
    </form>
  );
}

export default InputForm;
