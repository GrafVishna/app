import PropTypes from 'prop-types';
import styles from './SubtitleLine.module.scss'

const SubtitleLine = ({ className, content }) => {
   return (
      <p className={`${className ? className : ''} ${styles.subtitle}`}>
         {content}
      </p>
   );
};

SubtitleLine.propTypes = {
   content: PropTypes.string,
   className: PropTypes.string
};

export default SubtitleLine;