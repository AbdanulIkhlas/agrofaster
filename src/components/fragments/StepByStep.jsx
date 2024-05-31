import PropTypes from "prop-types";

const StepByStep = ({ no, title, desctiption }) => {
  return (
    <div className="flex gap-2 text-black overflow-hidden lg:gap-4">
      <div>
        <div
          className="w-9 h-9 flex justify-center items-center border-[2px] border-[#A1AEBE] rounded-full
        lg:w-12 lg:h-12 lg:text-base "
        >
          {no}
        </div>
        <div className="w-[1.6px] h-full bg-[#A1AEBE] mx-auto"></div>
      </div>
      <div className="pe-4 pb-2 lg:pb-4">
        <h1 className="mt-1 font-semibold text-primary mb-2 lg:text-2xl lg:mt-2">{title}</h1>
        <p className="text-sm lg:text-base">{desctiption}</p>
      </div>
    </div>
  );
};

StepByStep.propTypes = {
  no: PropTypes.string,
  title: PropTypes.string,
  desctiption: PropTypes.string,
};

export default StepByStep;
