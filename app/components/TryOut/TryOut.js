import styles from "./TryOut.module.css";

export default function TryOut() {
  return (
    <div className={styles.widgetContainer}>
      <span>All files are processed! Your widget is ready to go!</span>
      <button className={styles.button}>Try it out!</button>
    </div>
  );
}
