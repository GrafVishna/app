import React, {useState} from 'react'
import useScrollTracker from '@src/functions/ScrollTracker.jsx'
import Container from '@src/components/containers/Container.jsx'
import Logo from '@src/components/header/Logo/Logo.jsx'
import ButtonBorder from '@src/components/buttons/ButtonBorder.jsx'
import Menu from '@src/components/header/Menu/Menu.jsx'
import Popup from '@src/components/modals/Popup/Popup.jsx'
import Burger from '@src/components/header/Burger/Burger.jsx'
import styles from './HeaderStyles.module.scss'

function Header() {
    const isScrolled = useScrollTracker(10)
    const [burger_class, setBurgerClass] = useState('uncklicked')
    const [menu_class, setMenuClass] = useState('menu-hidden')
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        setMenuClass(isMenuClicked ? 'menu-hidden' : 'menu-open')
        setIsMenuClicked(!isMenuClicked)
    }

    const [isModalOpen, setIsModalOpen] = useState(false)
    const updateModal = () => {
        !isModalOpen ? setIsModalOpen(true) : setIsModalOpen(false)
    }

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scroll : ''} ${menu_class}`}>
            <Container containerSize="s-container-big">
                <div className='flex items-center gap-10'>
                    <Logo/>
                    <Menu/>
                    <div className='flex-auto mobile:flex-grow-0 flex items-center justify-end gap-6'>
                        <ButtonBorder text="Contact" type="button" action={updateModal}/>
                        <Burger onClick={updateMenu}/>
                    </div>
                </div>
            </Container>

            <Popup set={isModalOpen} action={updateModal}/>

        </header>
    )
}

export default Header



