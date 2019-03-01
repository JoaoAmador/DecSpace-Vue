import Api from '@/services/Api'

export default {
  fetchPosts() {
    return Api().get('posts')
  },
  register(credentials) {
      Api().post('register', credentials)
        .then(response => {
          console.log (response.data)
        })
        .catch(error => {
          return Promise.reject(error.response);
        })

  },
  login(credentials) {
     Api().post('login', credentials)
      .then(response => {
        console.log (response.data)
      })
      .catch(error => {
        return Promise.reject(error.response);
      })
  },

}

