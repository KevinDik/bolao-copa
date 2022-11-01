import styles from './Button.module.css'

export default function Button({text}) {
    return(
        <div className={styles.buttons}>
            <button type="submit">{text}</button>
        </div>)
}