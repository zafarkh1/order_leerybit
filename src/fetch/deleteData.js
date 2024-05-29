import { apiDelete } from './api'

const deleteUser = (id, close) => apiDelete(id, close)

export { deleteUser }
