import PropTypes from 'prop-types'

const buttonCustom = ({children, name, id, customClass}) => {
  return (
    <button className={`${customClass} w-full text-center rounded-lg py-2 px-3 text-base font-bold shadow-buttonShadow `} name={name} id={id}>
      {children}
    </button>
  );
}

buttonCustom.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  id: PropTypes.string,
  customClass: PropTypes.string
}

export default buttonCustom