import axios from 'axios'

const api = axios.create({
    baseURL: 'http://3d0265e5.ngrok.io/api'
})
// >ngrok.exe http http://127.0.0.1:8000

export default api