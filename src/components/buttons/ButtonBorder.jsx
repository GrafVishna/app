import styles from './ButtonBorder.module.scss'

const ButtonBorder = (props) => {
    const classes = props.className
    return (
        <button
            type={props.type ? props.type : "button"}
            className={`${styles.btn_border} ${classes ? classes : ''}`}
            onClick={props.action ? () => props.action(true) : null}
        >
            <span>{props.text}</span>
        </button>
    )
}

export default ButtonBorder

