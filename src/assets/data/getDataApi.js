import axios from 'axios'

const getDataApi = {
    async getAll(table) {
        const response = await axios.get(`https://app.artem.monster/api.php?table=${table}`)
        return response.data
    }
}
const getDataApiTest = {
    async getAll() {
        const response = await axios.get(`https://raw.githubusercontent.com/GrafVishna/OTHER/main/data.json`)
        return response.data
    }
}

export {getDataApi, getDataApiTest}