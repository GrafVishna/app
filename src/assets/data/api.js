import axios from 'axios';

const Tables = axios.create({
    baseURL: `https://app.artem.monster/api.php?table=`,
    responseType: "json"
});


export default Client;