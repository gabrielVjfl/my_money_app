import React from 'react'

const Check = () => {


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
        <div>
          <label>
             <button className="btn btn-light" onClick={DarkMode} id="mode" name="mode">Modo Light</button>
              
          </label>
        </div>
    )
}
export default Check