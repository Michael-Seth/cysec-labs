import axios from "axios";
axios.defaults.baseURL = "http://localhost:8081/api/v1";
let refresh = false
axios.interceptors.response.use(resp => resp, async error => {
    if (error.response.status === 401 && !refresh) {

        refresh =true
        const response = await axios.post('/users/refresh', {
            
        }, {
        

        })
  
        if (response.status === 200) {
            
          sessionStorage.setItem("token", JSON.stringify(response.data))
            return axios(error.config)
        }
    }
    refresh =false
    return error
})