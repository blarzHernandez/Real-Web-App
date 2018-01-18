import axios from "axios";
const API_ENDPOINT = "http://localhost:9090";
export default {
    user :{
        login: (credentials) => 
        axios.post('/api/auth',{credentials})
        .then(res => res.data.user)
    }
}