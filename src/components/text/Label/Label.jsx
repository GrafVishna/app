import PropTypes from 'prop-types';
import './Label.scss'

const Label = ({content, className}) => {
    return (
        <p className={`font-serif text-decor s-label uppercase my-5 last:mb-0 tracking-[.35em] ${className ? className : ''}`}>
            {content}
        </p>
    );
};

Label.propTypes = {
    content: PropTypes.string
};

export default Label;