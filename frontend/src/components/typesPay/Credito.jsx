import React, {useState} from 'react'
//import {connect} from 'react-redux'

const Credito = (props) => {

//    const {ola} = props.sunday

let [contador, setContador] = useState(0)
    
    return (
    <div id="creditoTotal">
        <div id="crédito">
            <h1 id="tituloCredito">Crédito : </h1>
    <h2 color="white" name="">CLICOU {contador} VEZES</h2>
    <button onClick={() => setContador(contador === 100 ? contador = 100 : contador + 1)}>INCREMENTAR</button>
    <button onClick={() => setContador(contador === 0 ? contador = 0 : contador - 1)}>DECREMENTAR</button>
    <button onClick={() => setContador(contador === 100 ? contador = 100 : contador + 3)}>INCREMENTAR 3X</button>
    
        </div>
        </div>
    )
}
 //const MapStateToProps = state => ({sunday: state.texto.sunday})

 export default Credito
