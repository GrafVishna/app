import PropTypes from 'prop-types';

const Container = ({ children, containerSize }) => {
   const classes = `${containerSize ? containerSize : 'max-w-container-main'} mx-auto px-4`
   return (
      <div className={classes}>
         {children}
      </div>
   );
}

Container.propTypes = {
   children: PropTypes.node,
   containerSize: PropTypes.string
};
export default Container;

