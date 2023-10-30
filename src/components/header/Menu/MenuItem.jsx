import PropTypes from 'prop-types';
import './HeaderMenu.scss';
import {Link} from "react-scroll";
import {useContext} from "react";
import {MenuContext} from "@src/providers/UpdateMenuProvider.jsx";

const MenuItem = ({data}) => {
	 const {setStateMenu} = useContext(MenuContext);
	 const menuOpen = () => {
			setStateMenu(false)
	 };
	 
	 return (
			<ul>
				 {data.map((menuEl, index) => (
						<li key={menuEl.id} id={`${menuEl.id}-menu-item`} className='menu-item'>
							 <Link
									activeClass="active"
									to={`section${index}`}
									spy={true}
									smooth={true}
									offset={-70}
									duration={700}
									onClick={menuOpen}
									href={menuEl.href}>
									{menuEl.text}
							 </Link>
						</li>
				 ))}
			</ul>
	 );
};

MenuItem.propTypes = {
	 data: PropTypes.arrayOf(
			PropTypes.shape({
				 href: PropTypes.string,
				 id: PropTypes.string,
				 text: PropTypes.string,
			})
	 ).isRequired,
};

export default MenuItem;
