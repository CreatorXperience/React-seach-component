import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: "Client-ID BVV7xjoSdGk7_CQ_y9cOtIUcUrK6173pgCdfvjXkYds"
    }
})