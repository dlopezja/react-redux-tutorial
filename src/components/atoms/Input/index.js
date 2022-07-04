import styles from './style.module.css';

function Input({ onChange }) {
  return (
    <input className={styles.myInput} onChange={onChange}  />
  )
}

export default Input;
