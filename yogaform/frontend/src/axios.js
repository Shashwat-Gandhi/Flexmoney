import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5000',
})

instance.defaults.timeout = 2500

instance.get('/longRequest', {timeout: 5000})

export default instance