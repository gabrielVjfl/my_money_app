import React from 'react'

const Listar_debito1 = ({posts}) => {
    return (
        <div>
         {
             posts.map(posts => 
                <div>{posts.name}</div>
                )
         }
        </div>
    )
}

const Listar_debito2 = ({posts2}) => {
    return (
        <div>
                {
             posts2.map(posts => 
                <div>{posts.valor}</div>
                )
         }
        </div>
    )
}

const Listar_debito3 = ({posts3}) => {
    return (
        <div>
                {
             posts3.map(posts => 
                <div>{posts.month}</div>
                )
         }
        </div>
    )
}

const Listar_debito4 = ({posts4}) => {
    return (
        <div>
                {
             posts4.map(posts => 
                <div>{posts.year}</div>
                )
         }
        </div>
    )
}

const Listar_debito5 = ({posts5}) => {
    return (
        <div>
                {
             posts5.map(posts => 
                <div>{posts.status}</div>
                )
         }
        </div>
    )
}
export {Listar_debito1, Listar_debito2, Listar_debito3, Listar_debito4, Listar_debito5}