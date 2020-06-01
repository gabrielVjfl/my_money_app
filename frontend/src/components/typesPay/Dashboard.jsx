import React, {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faDollarSign} from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'

// mport {connect} from 'react-redux'

// import {bindActionCreators} from  'redux'

// import {getSummary} from '../redux/dashboardAction'



const Dashboard = (props) => {

 
    //const {credit, debt} = props.summary
    
    //useEffect(() => {
    //    props.getSummary()
   // }, [])
  
  //  const {dif} = props.summary2

  

  const [state, setState] = useState({creditSumTotal: 0, debtSumTotal: 0})

  Axios.get("http://localhost:5110/summary")
  .then(response => {
      setState(
          response.data
      )
    
      })

const {creditSumTotal,debtSumTotal } = state

    return (
        <div>
        
            <div id="dash" >
                <h1 id="tituloDash" >Dashboards :</h1>
                <br></br>
                            <div id="templateDash">
                
                                    <h2 id="dashTit"> Total de Créditos</h2>
                                         <p id="valorCredito">{`R$ ${creditSumTotal}`}</p>
                                    <FontAwesomeIcon id="iconCredit" icon={faCreditCard}></FontAwesomeIcon>
                
                            </div>
                
                            <div id="templateDash2">
                    <p id="valorDebito">{`R$ ${debtSumTotal}`}</p>
                            <FontAwesomeIcon id="iconCredit" icon={faCreditCard}></FontAwesomeIcon>
                <h2 id="dashTit2"> Total de Débitos</h2>
                
                            </div>
                
                            <div id="templateDash3">
                                <p id="valorDif">{`R$ ${creditSumTotal - debtSumTotal}`}</p>
                            <FontAwesomeIcon id="iconCredit" icon={faDollarSign}></FontAwesomeIcon>
                <h2 id="dashTit3"> Valor Consolidado</h2>
                            </div>
</div>

        </div>

 

            
    )
            
}
//const  mapStateToProps = state => ({summary: state.dashboard.summary})// summary2: state.dashboard.summary2})
//const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)

export default Dashboard
