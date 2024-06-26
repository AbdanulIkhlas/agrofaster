import PropTypes from "prop-types";

const Trusted = ({ image, content, total }) => {
  return (
    <div className="w-[330px] font-jakartaSans bg-white rounded-md p-3 flex items-center shadow-secondCardShadow">
      <img
        src={image}
        alt="image"
        className="p-2 w-12 h-12 rounded lg:w-16 lg:h-16"
      />
      <div className="pl-5">
        <p className="text-[16px] font-black text-primary lg:text-xl">
          {total}+
        </p>
        <p className="text-[12px] lg:text-xl">{content}</p>
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
