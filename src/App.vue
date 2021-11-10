<template>
  <div class="content-fluid" id="app">
    <div v-if="is_logged">
       <dashboard/>
      <router-view/>   
    </div>
    <div v-else>
      <login/>
    </div> 
  </div>
</template>
<script>
import login from './components/Login.vue'
import Dashboard from './views/Dashboard.vue'

export default {
  components :{login,Dashboard},
  data(){
    return {
      is_logged: !!localStorage.getItem("user")
    }
  }

}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #7DC6E0;
}
body {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>