import PropTypes from "prop-types";

const TestimoniCard = ({ image, name, content }) => {
  return (
    <div className="flex flex-col items-center justify-start mb-8 w-[332px] h-[350px] rounded-[28px] shadow-cardShadow">
      <div className="flex justify-end w-full">
        <img
          src="./images/frame-testimoni.png"
          alt="frame"
          className="w-[78px]"
        />
      </div>
      <img src={image} alt="image" className="w-[108px] " />
      <h1 className="w-full text-center font-semibold text-base my-4">
        {name}
      </h1>
      <p className="w-full text-center px-8 text-sm">{content}</p>
    </div>
  );
};

TestimoniCard.propTypes = {
  image: PropTypes.string,
};

export default TestimoniCard;
