import styles from './components.module.css'

export function Button({
    Type,
    onClick,
    Text
}: any){
    return(
        <button
            type={Type}
            onClick={onClick}
            className={styles.button_props}
        >
            {Text}
        </button>
    )
}