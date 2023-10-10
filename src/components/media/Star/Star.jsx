import PropTypes from 'prop-types';

const Star = ({ className }) => {
   return (
      <svg className={className} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d={`M12.4932 0C10.7681 9.36987 9.36987 10.7681 0 12.4932C9.36987 14.2182 10.7681 15.6164 12.4932 24.9863C14.2168 15.6164 15.6164 14.2182 24.9892 12.4932C15.6164 10.7681 14.2168 9.36987 12.4932 0Z`} />
      </svg>
   );
}

Star.propTypes = {
   className: PropTypes.string
};

export default Star;