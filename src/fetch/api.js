import { Message } from '@iqueue/ui-kit'

const url = process.env.REACT_APP_SERVER_URL

export function apiGet() {
  const api = `${ url }/users`

  return fetch(api, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => {

      if (!res.ok) {
        throw new Error('HTTP Error')
      }

      return res.json()
    })
    .catch(err => {
      console.error(err)
      throw new Error('Failed to get data')
    })
}

export function apiPost(body) {
  const api = `${ url }/users`

  return fetch(api, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => {

      if (!res.ok) {
        throw new Error('HTTP Error')
      }

      Message({
        type: 'success',
        title: 'Success',
        timeout: 1500,
      })

      return res.json()
    })
    .catch((err) => {
      console.error(err)
      throw new Error('Failed to post data')
    })
}

export function apiDelete(id, close) {
  const api = `${ url }/users/${ id }`

  return fetch(api, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(res => {

      if (!res.ok) {
        throw new Error('HTTP Error')
      }

      Message({
        type: "error",
        title: "User deleted successfully",
        timeout: 1500,
      })

      close(false)
      return res.json()
    })
    .catch((err) => {
      console.error(err)
      throw new Error('Failed to delete')
    })
}

export function apiPut(body) {
  const api = `${ url }/users/${ body.id }`
  return fetch(api, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then(res => {

      if (!res.ok) {
        throw new Error('HTTP Error')
      }

      Message({
        type: "info",
        title: "User edited successfully",
        timeout: 1500
      })

      return res.json()
    })
    .catch((err) => {
      console.error(err)
      throw new Error('Failed to edit data')
    })
}
