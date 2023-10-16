import PropTypes from 'prop-types';
import './HeroTitle.scss'

const HeroTitle = ({content, className}) => {
    return (
        <h1 className={`hero-title font-serif uppercase mb-5 last:mb-0 ${className ? className : ''}`}>
            {content}
        </h1>
    );
};

HeroTitle.propTypes = {
    content: PropTypes.string
};

export default HeroTitle;