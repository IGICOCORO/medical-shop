import { createStore } from 'vuex'

export default createStore({
  state: {
    user:null,
    logged_in : false,
    users : [],
    liste_users : [
      {
        username : "guy",
        password : "12345",
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
