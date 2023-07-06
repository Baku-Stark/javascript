import styles from './Form.module.css'

export function SubmitButton(
    {
        text
    }:any
){
    return(
        <div className={styles.form_control}>
            <input
                type="submit"
                value={text}
                className={styles.btn}
            />
        </div>
    )
}