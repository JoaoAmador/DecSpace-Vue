import axios from 'axios'
import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: `http://localhost:8082/`,
    // baseURL: `http://app.decspacedev.sysresearch.org/api`,
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}


