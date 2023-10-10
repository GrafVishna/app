import PropTypes from 'prop-types';

const DecorText = (props) => {
  return (
    <div className={`decor-text ${props.className}`} >
      {props.content}
    </div>
  );
};

DecorText.propTypes = {
   content: PropTypes.string,
   className: PropTypes.string
};

export default DecorText;