const logoImage = 'img/logos/logo.svg';
import {Link} from "react-scroll";

const Logo = () => {
	 return (
			<>
				 {Boolean(logoImage) &&
						<Link
							 activeClass="active"
							 to={`top`}
							 spy={true}
							 smooth={true}
							 offset={-75}
							 duration={700}
							 
							 className="logo tablet:w-[108px] w-[80px] block cursor-pointer">
							 <img className='w-full' src={logoImage} alt="Logo"/>
						</Link>
				 }
			</>
	 );
}

export default Logo;

