import styles from './components.module.css'

export function Input({
    type,
    value,
    onChange,
    placeholder
}: any){
    return(
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder} 
            className={styles.input_props}
        />
    )
}