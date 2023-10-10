import PropTypes from 'prop-types'
import './HeaderMenu.scss'

const MenuItem = ({data}) => (
    data.map(menuEl => (
        <li key={menuEl.id} id={`${menuEl.id}-menu-item`} className='menu-item'>
            <a
                target='_blank'
                rel='noopener noreferrer'
                href={menuEl.href}>
                {menuEl.text}
            </a>
        </li>
    ))
)

MenuItem.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            href: PropTypes.string,
            id: PropTypes.string,
            text: PropTypes.string,
        })
    ).isRequired,
}

export default MenuItem
