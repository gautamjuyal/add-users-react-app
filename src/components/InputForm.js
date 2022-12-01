import styles from "./InputForm.module.css";

function InputForm(props) {
  let chosenUserName;
  let chosenAge;

  function userNameChangeHandler(event) {
    chosenUserName = event.target.value;
  }

  function ageChangeHandler(event) {
    chosenAge = event.target.value;
  }

  function formSubmitHandler(event) {
    event.preventDefault();
    props.onDataSubmission({
      name: chosenUserName,
      age: chosenAge,
    });
  }

  return (
    <form className={styles["input-form"]} onSubmit={formSubmitHandler}>
      <label>Username</label>
      <input
        name="UserName"
        type="text"
        onChange={userNameChangeHandler}></input>
      <label>Age</label>
      <input name="Age" type="number" onChange={ageChangeHandler}></input>
      <button type="submit">Generate</button>
    </form>
  );
}

export default InputForm;
