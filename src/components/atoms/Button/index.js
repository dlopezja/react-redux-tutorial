import styles from './style.module.css';
import  { useState } from 'react';

function Button({ onClick, label }) {

  const[loading, setLoading] = useState(false);
  
  function handleClick(){
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onClick();
    }, 2000);
  }
  
  return (
    <button className={styles.myButton} onClick={onClick} onClickCapture={handleClick}>
     {loading && (
        <i
          className="fa fa-refresh fa-spin"
          style={{ marginRight: "5px" }}
        />
      )} {label}
    </button>
  
  );
}

export default Button;
