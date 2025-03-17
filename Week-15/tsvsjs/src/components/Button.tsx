// import PropTypes from 'prop-types'

// Button.propTypes = {
//     text: PropTypes.string,
//     onClick: PropTypes.func
// }

type ButtonTypes = {
    text: string,
    onClick: () => void
}

const Button: React.FC<ButtonTypes> = ({ text, onClick }) => {
    return (
        <div onClick={onClick}> {text} </div>
    )
}

export default Button