import React, {useState, useEffect}  from 'react'

import Axios from 'axios'

import $ from 'jquery'

import Navbar from './Navbar'


const Debito2 = () => {


    const [state, setState] = useState({posts: []})


    useEffect(() => {
        Axios.get("http://localhost:5110/api/lastdebitos").then((response) => {
                setState({
                    posts: response.data
                })
        }).catch((err) => {
             console.log(err)
        }, [])
    })
    
    const {posts} = state

    if(posts.length === 0) {
        return <h4 id="carregando1">Carregando...</h4>
    }


    $(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable li").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });


      if(posts.length === "") {
        return <div class="spinner-border text-info" role="status" id="carregar">
        <span class="sr-only"> CARREGANDO...</span>
      </div>
    }



    return (
        <div>
            <Navbar/>
        <div id="debito">
            <h1 id="tituloDebito">Débito :</h1>
          <font color="white">  BUSCAR :</font> <input autoFocus="on"  id="myInput" className="form-control" type="text" placeholder="Buscar....."></input>
            <br>
            </br>
            <br></br>
            <a href="/débito" ><button className="btn btn-success" id="btCreditoNovo">Últimos Registros</button></a>
            <br></br>
            <div className="card" id="card_lista_debito">
         <div className="card-body"  id="card_body_lista_debito">

                    {
                        posts.map(posts => 
                            <ul id="myTable">
                                <li key={posts._id}>
                                    <div id="titulo_lista_debito">Descrição : </div><p id="l1">{posts.name}</p>
                         
                        <div id="titulo_lista_debito">Valor : </div><p id="l2">{posts.valor}</p>
                    
                                    <div id="titulo_lista_debito">Mes : </div><p id="l3">{posts.month}</p>
                               
                                    <div id="titulo_lista_debito">Ano : </div><p id="l4">{posts.year}</p>
                                
                                    <div id="titulo_lista_debito">Status : </div><p id="l5">{posts.status}</p>
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
        
    )
}
export default Debito2