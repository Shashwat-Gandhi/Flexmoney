import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://flexmoney-umber.vercel.app/',
})

instance.defaults.timeout = 2500

instance.get('/longRequest', {timeout: 5000})

export default instance