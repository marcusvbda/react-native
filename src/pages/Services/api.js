import axios from 'axios'

const api = axios.create({
    baseURL: 'https://5036181f.ngrok.io/api'
})
// >ngrok.exe http http://127.0.0.1:8000

export default api