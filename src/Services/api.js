import axios from 'axios'

const api = axios.create({
    baseURL: 'http://0d5223b3.ngrok.io/api/app',
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: 'json'
})

export default api

// >ngrok.exe http http://127.0.0.1:8000
