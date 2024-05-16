import PropTypes from "prop-types";

const PoweredBy = ({ image }) => {
  return <div className="mb-10 flex items-center">
    <img src={image} alt="image" className="w-32 h-32" />
  </div>;
};

// proptypes image
PoweredBy.propTypes = {
  image: PropTypes.string,
};

export default PoweredBy;
