import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/cards'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }
/* OLD 
const create = async (content, id) => {
  const object = { content, id}
  const response = await axios.post(baseUrl, object)
  return response.data
}  */

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const del = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update, del}