import React from 'react'



const Switch = () => {


    let DarkMode = () => {
        let btn = document.getElementById("mode") 
        let body = document.getElementById("body")
    
        if(btn.className === 'btn btn-light'  && btn.innerHTML === "Modo Light" && btn.style.color === "blue" && body.style
        .backgroundColor === "black") {
            
         return btn.className = 'btn btn-dark', btn.innerHTML = "Modo Dark", btn.style.color = "red", 
         body.style.backgroundColor = "white"
        }
        else {
            
            return btn.className = 'btn btn-light', btn.innerHTML = "Modo Light" ,  btn.style.color = "blue",
            body.style.backgroundColor = "black"
    
        }
    }
    return (
    
      
        <div className="switch" id="switch">
  
    <label id="labelDark">
      MODO DARK
      <input type="checkbox"></input>
      <span className="lever" onClick={DarkMode}></span>
      MODO WHITE
    </label>
  
  </div>
 
    )
}

export default Switch