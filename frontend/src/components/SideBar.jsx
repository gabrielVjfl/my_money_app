import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCreditCard, faIdCard, faTachometerAlt, faEdit, faAngleRight, faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons'



let SideBar = () => {


function abreFecha() {
    let sub = document.getElementById('submenu')

    if(sub.style.marginLeft === "0px") {
        sub.style.marginLeft = "-270px"
    }
    else {
        sub.style.marginLeft = "0px"
    }
}


    return (
        <div>
            <nav id="side">
       
  <div id="templateMenu">
     <a href="/crédito"> <div id="li1">Crédito Total
      <FontAwesomeIcon icon={faCreditCard} id="icon3"></FontAwesomeIcon> </div></a>
</div>

<div id="templateMenu">
     <a href="/débito"> <div id="li1">Débito Total
      <FontAwesomeIcon icon={faIdCard} id="icon3"></FontAwesomeIcon> </div></a>
</div>

<div id="templateMenu">
     <a href="/dashboards"> <div id="li1">Dashboard
      <FontAwesomeIcon icon={faTachometerAlt} id="icon3"></FontAwesomeIcon> </div></a>
</div>

<div id="templateMenu">
<div id="li1" onClick={() => abreFecha()}>Cadastro
<FontAwesomeIcon icon={faEdit} id="icon3"></FontAwesomeIcon>
<FontAwesomeIcon icon={faAngleRight} id="icon4" ></FontAwesomeIcon>
</div>
</div>


<div id="submenu">
<div id="templateMenu">

<a href="/cicloPagamento"> <div id="li2">Ciclos de Pagamento
<FontAwesomeIcon icon={faHandHoldingUsd} id="icon5"></FontAwesomeIcon>
</div></a>
</div>
</div>







</nav>



        </div>
    )
}
export default SideBar