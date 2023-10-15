import PropTypes from 'prop-types';
import styles from './ButtonRound.module.scss';
import Star from '@src/components/media/Star/Star.jsx';

const ButtonRound = ({ type, text }) => {
   return (
     <button className={styles.btn_round} type={type}>
        <Star className={styles.btn_star}/>
       <div className={styles.circular}>
         <svg viewBox="0 0 141 141">
           <path d="M 20,70 a 50,50 0 1,1 0,1 z" id="circle" />
           <text>
             <textPath xlinkHref="#circle">
                <tspan dx="8%">{text}</tspan>
                <tspan dx="8%">.</tspan>
                <tspan dx="8%">{text}</tspan>
                <tspan dx="8%">.</tspan>
                <tspan dx="8%">{text}</tspan>
                <tspan dx="8%">.</tspan>
              </textPath>
           </text>
         </svg>
       </div>
     </button>
   );
 };
 

ButtonRound.propTypes = {
   type: PropTypes.string,
   text: PropTypes.string
};

export default ButtonRound;