import axios from 'axios'

const KEY = "AIzaSyAH4nMpl9_Hll4p2UI82kaufRx-Ftwd_EQ"

const connection =  axios.create({
    //baseUrl: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

export default connection;