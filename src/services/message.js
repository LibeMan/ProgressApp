import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/messages'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }
  console.log("Testi taas",token)
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const del = id => {
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

export default { getAll, create, del, setToken}