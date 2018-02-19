import axios from 'axios'

export const serverUrl = 'http://plylst.sherydev.com:4028'

export default function query(url, body = {}) {
    return axios.post(serverUrl + url, body)
}