import axios from 'axios'

window.axios = axios.create({
    transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = [];
        for (let it in data) {
            ret.push(encodeURIComponent(it) + '=' + encodeURIComponent(data[it]));
        }
        return ret.join('&');
    }],
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});
window.axios.defaults.withCredentials = true; //让ajax携带cookie

let demoService = {
    async query(params = {}) {
        return await axios.post('', params)
    },
    async create(params = {}) {
        return await axios.post('', params)
    },
    async modify(params = {}) {
        return await axios.post('', params)
    },
    async delete(params = {}) {
        return await axios.post('', params)
    }
}

let claimedOrderService = {
    async query(params = {}) {
        return await axios.post('', params)
    },
    async create(params = {}) {
        return await axios.post('', params)
    },
    async modify(params = {}) {
        return await axios.post('', params)
    },
    async delete(params = {}) {
        return await axios.post('', params)
    }
}

export {
    demoService,
    claimedOrderService
}