
import styles from './input.module.css'

const Input = function (props) {
  return (
    <div className={props.type!=="radio"?styles.inputContainer:""}>
        <label htmlFor={props.id} className={styles.label}>{props.label}</label>
        <input id={props.id} type={props.type || "text"} {...props} className={styles.input} />
    </div>
  );
};
export default Input;
