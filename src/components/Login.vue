
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
                                <input type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                             </div>
                             <div class="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password">
                             </div>
                             <div class="col-md-12 text-center ">
                                <button type="submit" class=" btn btn-block mybtn btn-secondary tx-tfm">Login</button>
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
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
   
  },
}
</script>

<style src="../style.css" scoped>

</style>

