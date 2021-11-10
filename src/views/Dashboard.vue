<template>
<div class="wrapper">
<div class="dashboard">
        <topbar/>
        <Sidebar/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar.vue'
export default {
    name: 'Home',
    components: {
        Sidebar,Topbar
    }
}
</script>

<style>
.dashboard {
    display: grid;
    grid-template-columns: 1fr 5fr;
    background-color: #7DC6E0;
    height: 100vh;
    width: 100vw;
}
.content {
    background-color: white;
    border-radius: 10px;
    margin: 6px 6px 6px 0px;
}
</style>