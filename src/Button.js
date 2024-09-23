import PropTypes from 'prop-types' //Permite añadir tipos de datos a los props
export function Button({text, name=' Hey'}){
    console.log(text)
    return <button onClick={function(){console.log('Hola Mundo')}}>
        {[text, name]}
    </button>
}

Button.propTypes ={
    text: PropTypes.string.isRequired
}

