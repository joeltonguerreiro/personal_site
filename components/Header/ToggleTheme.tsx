import styles from "./styles.module.scss";

const ToggleTheme = () => {
  function handleChangeTheme(event) {
    event.target.checked
      ? (document.body.className = "theme-dark")
      : (document.body.className = "theme-light");
  }

  return (
    <label className={styles.toggleTheme}>
      <input className={styles.toggleTheme__control}
        type="checkbox"
        onChange={handleChangeTheme}
      />
      <span className={styles.toggleTheme__track}>Trocar tema</span>
    </label>
  );
};

export default ToggleTheme;
