import axios from "axios"


const instance=axios.create({
    baseURL:"https://team3luna.propulsion-learn.ch/backend/api"
})
instance.defaults.headers.post['Content-Type'] = 'application/json'

export default instance
