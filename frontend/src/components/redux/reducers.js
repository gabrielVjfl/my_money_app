import {combineReducers} from 'redux'

import DashboardReducer from './dashboarReducer'

const rootReduces = combineReducers({
     dashboard: DashboardReducer,
// text: dashh
       

    // texto: () => ({
    //     sunday: {ola: 'FLORIPA 2020'}
  //   }),
})


export default rootReduces