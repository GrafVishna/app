import PropTypes from 'prop-types';
import styles from './Image.module.scss'

const Image = ({ src, className }) => {
   return (
      <div className={`${className ? className : '' } ${styles.image}`}>
         <img srcSet={src} alt="Image" />
      </div >
   );
};

Image.propTypes = {
   src: PropTypes.string,
   className: PropTypes.string
};

export default Image;
