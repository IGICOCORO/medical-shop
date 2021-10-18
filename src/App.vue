<template>
  <div id="nav">
    <login/>
  </div>
  <router-view/>
</template>
<script>
import login from './components/Login.vue'
export default {
  components :{login},

}
</script>

<style>

</style>
