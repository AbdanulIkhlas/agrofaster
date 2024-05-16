import PropTypes from "prop-types";

const Trusted = ({ image, content, total }) => {
  return (
    <div className="w-[330px] bg-white rounded-xl p-3 flex shadow-secondCardShadow">
      <img src={image} alt="image" className="bg-[#2C946C] p-1 w-10 h-10" />
      <div className="pl-5">
        <p className="text-[12px]">{total}+</p>
        <p className="text-[12px]">{content}</p>
      </div>
    </div>
  );
};

Trusted.propTypes = {
  image: PropTypes.string,
  content: PropTypes.string,
  total: PropTypes.number,
};

export default Trusted;
