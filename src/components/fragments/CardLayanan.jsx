import PropTypes from "prop-types";
const CardLayanan = (props) => {
  const { title, image, classCustom, content } = props;

  return (
    <div className={`flex justify-center items-center w-[75%]`}>
      <div
        className={`${classCustom} flex flex-col pe-5 h-[220px] w-full ps-9 pt-8 rounded-2xl mb-8 border-b-4 border-primary shadow-lg
        shadow-slate-400 hover:shadow-xl hover:shadow-primary/75 transition-all duration-700
        `}
      >
        <img src={image} alt={title} className="w-[35px] h-[35px] mb-3 " />
        <h3 className="text-md font-bold mb-3 ">{title}</h3>
        <p className="text-[12px] pe-4">{content}</p>
      </div>
    </div>
  );
};

CardLayanan.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  classCustom: PropTypes.string,
  content: PropTypes.string,
};

export default CardLayanan;