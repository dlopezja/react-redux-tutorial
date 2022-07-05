import styles from './style.module.css';

function Input({ onChange,type,placeholder}) {
  return (
    <input type={type} className={styles.myInput} onChange={onChange} placeholder={placeholder} />
  )
}

export default Input;
