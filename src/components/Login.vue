
<template>
   <div class="container">
      <div class="row">
        <div class="col-md-5 mx-auto">
          <div id="first">
                <div class="myform form ">
                   <div class="logo mb-3">
                     <div class="col-md-12 text-center">
                      <h1>Login</h1>
                     </div>
                  </div>
                     <form action=""  name="login">
                             <div class="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input v-model="username" type="text" name="username"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter username">
                             </div>
                             <div class="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input v-model="password" type="password"  name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password">
                             </div>
                             <div class="col-md-12 text-center ">
                               <router-link to="/">
                                   <button @click="login" class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                               </router-link>
                             </div>                          
                          </form>
                         
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
  name: 'Login',
  
  data() {
    return {
    is_logged : true,
    username: '',
    password:'',
    errorMessage:"",
    }
  },
  props: {
   
  },
  methods: {
    login(){

  const utilisateur  = this.$store.state.liste_users.filter(user => user.username == this.username 
                                        && user.password == this.password)
    //console.log(utilisateur)
    if(utilisateur.length > 0){
      const new_user = {
        username : this.username,
        password : this.password
      }
      localStorage.setItem('user', new_user)
      window.location.reload();
    }else{
      this.errorMessage = "User not found "
    }
    
  }
   
  },
}
</script>

<style src="../style.css" scoped>

</style>

