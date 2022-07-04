import styles from './style.module.css';

function Button({ onClick, label }) {
  return (
    <button className={styles.myButton} onClick={onClick}>{label}</button>
  );
}

export default Button;
