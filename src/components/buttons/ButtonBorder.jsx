import PropTypes from 'prop-types'
import styles from './ButtonBorder.module.scss'

const ButtonBorder = (props) => {
    return (
        <button
            type={props.type ? props.type : "button"}
            className={styles.btn_border}
            onClick={props.action ? () => props.action(true) : null}
        >
            <span>{props.text}</span>
        </button>
    )
}

ButtonBorder.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    action: PropTypes.func
}
export default ButtonBorder

