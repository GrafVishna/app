import PropTypes from 'prop-types';
import './TitleSection.scss'

const TitleSection = ({ content }) => {
   return (
      <h2 className='s-title font-serif mb-5 last:mb-0'>
         {content}
      </h2>
   );
};

TitleSection.propTypes = {
   content: PropTypes.string
};

export default TitleSection;