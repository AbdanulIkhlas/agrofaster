import PropTypes from "prop-types";

const SectionHead = (props) => {
  const { content = [], subsec = false, customClassName } = props;

  return (
    <h1
      className={`text-black font-jakartaSans lg:text-[34px]  ${customClassName}`}
    >
      {content.map((item, index) => (
        <span
          key={index}
          className={`${item.classname} ${subsec ? "text-lg" : "text-2xl"}`}
        >
          {item.title}
        </span>
      ))}
    </h1>
  );
};

SectionHead.propTypes = {
  content: PropTypes.array.isRequired,
  subsec: PropTypes.bool,
};

export default SectionHead;
