import styles from "./OutputElement.module.css";

function OutputElement(props) {
  return (
    <div className={styles["output-element"]}>
      <div className={styles["output-element__name"]}>{props.name}</div>
      <div className={styles["output-elememt__age"]}>{props.age}</div>
    </div>
  );
}

export default OutputElement;
