import {useContext} from "react";
import PropTypes from 'prop-types'
import {CgMenuGridR} from 'react-icons/cg'

import './BurgerStyles.scss'
import {MenuContext} from "@src/providers/UpdateMenuProvider.jsx";

const Burger = ({onClick}) => {
    const {stateMenu, setStateMenu} = useContext(MenuContext);

    const menuOpen = () => {
        setStateMenu(!stateMenu)
    }

    return (
        <button onClick={menuOpen} type='button' className={`menu-btn mobile:hidden ${stateMenu ? 'menu-open' : ''}`}>
            <CgMenuGridR size="35px" className='pointer-events-none'/>
        </button>
    )
}

Burger.propTypes = {
    burgerClass: PropTypes.string,
    onClick: PropTypes.func,
}

export default Burger
