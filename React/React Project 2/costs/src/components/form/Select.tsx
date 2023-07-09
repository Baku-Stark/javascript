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
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option disabled >Selecione uma opção</option>
                {options.map((item: any) => (
                    <option
                        key={item.id}
                        value={item.id}
                    >
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    )
}