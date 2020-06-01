import Axios from 'axios'

const BASE_URL = 'http://localhost:5110'

export function getSummary() {
    const request = Axios.get(`${BASE_URL}/summary`)
    return {
        type: 'MyMoney_fetched',
        action: request
    }
}