import styles from './Form.module.css'

export function Input(
    {
        type,
        text,
        name,
        placeholder,
        handleOnChange,
        value
    }:any
){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handleOnChange}
            />
        </div>
    )
}