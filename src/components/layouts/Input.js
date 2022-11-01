import styles from './Label.module.css'

export default function Label({type, name, placeholder}) {
    return(
        <div className={styles.label}>
            <label 
            type={type} 
            placeholder={placeholder}
            name={name}
            />
        </div>)
}