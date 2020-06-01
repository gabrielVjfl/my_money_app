import React from 'react'



import Navbar from './Navbar'

import SideBar from './SideBar'

import Footer from './Footer'


import Routes from '../Routes/Routes'



let Main = () => {
    return (
        <div>
<Navbar></Navbar>

<Routes></Routes>

<SideBar></SideBar>

<Footer></Footer>


        </div>
    )
}
export default Main