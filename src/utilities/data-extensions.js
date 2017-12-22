import axios from 'axios'

export default {
    get (url) {
        return axios.get(url)
            .then(response => response.data)
            .then(data => {
                let arr = []
                for (let key in data) {
                    data[key].id = key
                    arr.push(data[key])
                }
                return arr
            })
    }
}
