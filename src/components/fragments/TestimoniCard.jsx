import PropTypes from 'prop-types'

const TestimoniCard = ({image}) => {
  return (
    <div className="px-8 mb-8">
      <img src={image} alt="image" className="w-full rounded-3xl" />
    </div>
  )
}

TestimoniCard.propTypes = {
  image: PropTypes.string
}

export default TestimoniCard