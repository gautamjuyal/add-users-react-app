import OutputElement from "./OutputElement";
import styles from "./OutputCard.module.css";

function OutputCard(props) {
  return (
    <div className={styles["output-card"]}>
      <h1>Registered Users</h1>
      {props.data.map((user) => (
        <OutputElement
          key={user.id}
          name={user.name}
          age={user.age}></OutputElement>
      ))}
    </div>
  );
}

export default OutputCard;
