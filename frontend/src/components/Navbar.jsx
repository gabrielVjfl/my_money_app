import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillAlt, faBars } from '@fortawesome/free-solid-svg-icons'




let Navbar = () => {

  function abreFecha() {
    let sub = document.getElementById('side')

    if(sub.style.marginLeft === "-400px") {
        sub.style.marginLeft = "0px"
    }
    else {
        sub.style.marginLeft = "-400px"
    }
}



    return (
        <div>
            <nav id="nav">
       
  <a className="navbar-brand" href="/" id="titulo">My Money <font color="blue" >App</font></a>

  <FontAwesomeIcon id="icone" icon={faMoneyBillAlt} />

  
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      
     
     
    </ul>
  </div>


<FontAwesomeIcon id="icone2" onClick={() => abreFecha()}  icon={faBars} />

<p id="Version">Version 1.0.0</p>
</nav>

        </div>
    )
}
export default Navbar