import React, {useState, useEffect} from 'react'
//import {connect} from 'react-redux'

import Axios from 'axios'

import $ from 'jquery'

import Navbar from './Navbar'

const Credito = (props) => {

//    const {ola} = props.sunday



const [state, setState] = useState({posts: []})



useEffect(() => {
    Axios.get("http://localhost:5110/api/todoscreditos2").then((response ) => {

           setState({
               posts: response.data
           })

    }).catch((err) => {
         console.log(err)
    })
})

const {posts} = state


if(posts.length === "") {
    return <div class="spinner-border text-info" role="status" id="carregar">
    <span class="sr-only" > CARREGANDO...</span>
  </div>
}

$(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


if(posts.length === 0) {
    return <h4 id="carregando1">Carregando...</h4>
}
    
    return (
        <div>
            <Navbar/>
    <div id="creditoTotal">
        <div id="crédito">
        <h1 id="tituloCredito">Meus Ganhos : </h1>
        <font color="white">BUSCAR : </font> <input id="myInput" autoFocus="on" className="form-control" type="text" placeholder="Buscar....."></input>
            <br></br>
            <br></br>
          <a href="/crédito" ><button className="btn btn-success" id="btCreditoNovo">Últimos Registros</button></a>
          <br></br>
         <div className="card" id="card_lista_credito">
  
               <div className="card-body" id="card_body_lista_credito">

                {
                    posts.map(posts => 
                        <ul id="myTable">
                            <li key={posts._id}>
                    <div id="titulo_lista_credito">Descrição : </div><p id="l1">{posts.name}</p>
                  
                        <div   id="titulo_lista_credito">Valor : </div><p id="l2">{posts.valor}</p>
                    
                        <div  id="titulo_lista_credito">Mes : </div><p id="l3">{posts.month}</p>
                
                        <div  id="titulo_lista_credito">Ano : </div><p id="l4">{posts.year}</p>
                        <br></br>
                        <br></br>
                        <hr id="barra_lista"></hr>
                        </li>
                        </ul>
                        )
                }
               </div>
         </div>
        
    
        </div>
        </div>
        </div>
    )
}
 //const MapStateToProps = state => ({sunday: state.texto.sunday})

 export default Credito