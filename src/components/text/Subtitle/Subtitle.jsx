import PropTypes from 'prop-types';
import './Subtitle.scss'

const Subtitle = ({content, className}) => {
    return (
        <p className={`tablet:mb-10 mb-5 last:mb-0 leading-8 max-w-[534px] hero-subtitle ${className ? className : ''}`}>
            {content}
        </p>
    );
};

Subtitle.propTypes = {
    content: PropTypes.string
};

export default Subtitle;