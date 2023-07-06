import styles from './Form.module.css'

export function Select(
    {
        text,
        name,
        options,
        handleOnChange,
        value
    }:any
){
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option disabled selected>Selecione uma opção</option>
            </select>
        </div>
    )
}