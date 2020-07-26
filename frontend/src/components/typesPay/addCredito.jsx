import React from 'react'

import {Form, Formik, Field} from 'formik'

import Axios from 'axios'

import { useState } from 'react'

import Navbar from '../Navbar'


const AddCredito= () => {

const INITIAL_STATE = {
    name: '',
    valor: '',
    year: '',
    month: ''
}

const [state, setState] = useState(INITIAL_STATE)




const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault()
Axios.post('http://localhost:5110/api/registrarCredito', state).then((response) => {

    const msgSuc = document.getElementById("alert_suc").style.visibility = "visible"
      return msgSuc

      
})

.catch(() => {
     const msgErr = document.getElementById("alert_error").style.visibility = "visible"
     return msgErr
})
   setState(INITIAL_STATE)

   setTimeout(() => {
    window.location.reload(1)
}, 3000)

}


    return (
        <div>
            <Navbar/>
        <div id="cicloTotal">
        <div id="ciclo">

            <h1 id="titulo_add_credito">Adicionar Crédito : </h1>
            <hr id="hr2"></hr>
            <div className="card" id="card_add_credito">
              <div className="card-body" id="card_body_add_credito">
           <Formik initialValues={INITIAL_STATE} >
                <Form onChange={handleChange} onSubmit={handleSubmit}>
<label>Nome : </label><Field type="text" id="name_credito"  value={state.name}  className="form-control" name="name"  placeholder="Digite um nome" required autofocus="on"></Field>
<br></br>
<label>Valor : </label><Field id="valor_debito"  value={state.valor} className="form-control" type="number" name="valor" min="0" required placeholder="Digite o Valor"></Field>
<br></br>

<label>Month : </label><Field name="month" value={state.month} className="form-control" type="number" min="1" max="12" required name="month" placeholder="Month"></Field>
<br></br>
<label>Ano : </label><Field name="year" value={state.year} className="form-control" type="number" min="1970" required name="year" placeholder="Ano"></Field>
<br></br>
<button  type="submit" id="btn_add_credito" className="btn btn-success">ADICIONAR CRÉDITO</button>
<div class="alert alert-success" role="alert" id="alert_suc">
   Crédito Salvo com Sucesso!
</div>
<div class="alert alert-success" role="alert" id="alert_error" id="alert_error">
   Ocorreu um Erro Tente Novamente!
</div>
</Form>
           </Formik>
              </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default AddCredito