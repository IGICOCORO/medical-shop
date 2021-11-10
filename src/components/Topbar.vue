<template>
<div class="fixed-top" style="background-color:white;">
<div id="right-panel" class="right-panel">
        <header id="header" class="header">
            <div class="top-left">
              <h1 style="font-family: 'Kaushan Script', cursive;" >Medical store</h1>
              <!--<img class="logo" src="../assets/isteebu-logo.png" /> -->
            </div>
            <div class="top-right">
                <div class="header-menu">
                    <div class="header-left">
                        <!--<button class="search-trigger"><i class="fa fa-search"></i></button> -->
                        <div class="dropdown for-message">
                          <router-link to="/">
                            <button @click="logout" class="btn btn-secondary dropdown-toggle" type="button" id="message" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fa fa-power-off"></i>
                            </button>
                          </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</div>
</div>
</template>
<script>
export default {
  name: 'Topbar',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
    logout(){
      
      localStorage.removeItem("user")
      window.location = "/"
    }
  },
}
</script>

<style scoped>
.fixed-top{
  box-shadow:2px solid;
}

.top-left{
  display: flex;
}
.right-panel .top-left {
    width: 350px;
    float: left;
     }
.logo{
  height: 60px;
  padding-left: 30px;
  margin-bottom: 5px;
}
.user-area .dropdown-toggle {
  position: relative;
  z-index: 0; }
  .user-area .dropdown-toggle:before {
    content: "";
    position: absolute;
    right: -3px;
    bottom: 10px;
    background: #868e96;
    width: 11px;
    height: 11px;
    border-radius: 100%;
    border: 2px  solid white;
    z-index: 1; }
  .user-area .dropdown-toggle.active:before {
    background: #49a342; }
header.fixed-top {
    height: 0%;
  background: #fff;
  padding: 20px; }


header .form-inline {
  background: #131c21;
  display: none;
  height: 55px;
  margin: 0;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9999; }
  header .form-inline .search-form {
    height: 100%;
    max-width: 1025px;
    margin: 0 auto;
    position: relative; }
    header .form-inline .search-form input[type="text"] {
      background: #131c21;
      border: none;
      border-radius: 0;
      -webkit-box-shadow: none;
              box-shadow: none;
      color: #d3d3d3;
      font-size: 16px;
      height: inherit;
      margin-right: 0 !important;
      padding: 10px 36px 10px 15px;
      width: 100%; }
    header .form-inline .search-form input[type="text"].active,
    header .form-inline .search-form input[type="text"]:focus {
      border-color: rgba(0, 0, 0, 0.125);
      outline: 0; }
    header .form-inline .search-form button {
      background: transparent;
      border: none;
      color: #fff;
      font-size: 16px;
      position: absolute;
      right: 15px;
      top: 50%;
      margin-top: -14px !important; }
    header .form-inline .search-form button:active,
    header .form-inline .search-form button:focus,
    header .form-inline .search-form button:visited,
    header .form-inline .search-form .btn-outline-success:hover {
      background: transparent;
      border: none !important;
      -webkit-box-shadow: none;
              box-shadow: none;
      outline: 0 !important; }
    header .form-inline .search-form.close {
      display: none; }

.header-left {
  display: inline-block; }

.header-left.open .form-inline {
  display: block; }

.header-left .dropdown {
  display: inline-block; }
  .header-left .dropdown .dropdown-toggle {
    background: transparent;
    border: none;
    color: #99abb4;
    font-size: 16px;
    line-height: 55px;
    padding-top: 0;
    padding-bottom: 0; }
    .header-left .dropdown .dropdown-toggle:after {
      display: none; }
    .header-left .dropdown .dropdown-toggle .count {
      border-radius: 50%;
      color: #fff;
      font-size: 11px;
      height: 15px;
      width: 15px;
      line-height: 15px;
      right: 0;
      top: 12px;
      position: absolute; }
    .header-left .dropdown .dropdown-toggle:active, .header-left .dropdown .dropdown-toggle:focus, .header-left .dropdown .dropdown-toggle:visited {
      background: none !important;
      border-color: transparent !important;
      color: #292b35 !important; }
  .header-left .dropdown .dropdown-menu {
    background: #fff;
    border: none;
    border-radius: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
    top: 52px !important;
    left: inherit !important;
    right: 0 !important;
    -webkit-box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
    line-height: 35px; }
    .header-left .dropdown .dropdown-menu p {
      font-size: 15px;
      margin: 0;
      padding: 5px 15px; }
    .header-left .dropdown .dropdown-menu .dropdown-item {
      color: #99abb4;
      font-size: 13px;
      padding: 10px 15px 3px;
      text-overflow: ellipsis;
      -webkit-transition: all .25s;
      transition: all .25s; }
      .header-left .dropdown .dropdown-menu .dropdown-item:hover {
        background: rgba(233, 236, 239, 0.5); }
      .header-left .dropdown .dropdown-menu .dropdown-item .photo {
        float: left;
        margin-right: 15px;
        width: 25px; }
      .header-left .dropdown .dropdown-menu .dropdown-item .message .name {
        margin-top: -5px; }
      .header-left .dropdown .dropdown-menu .dropdown-item .message .time {
        font-size: 11px; }
      .header-left .dropdown .dropdown-menu .dropdown-item .message p {
        clear: both;
        font-size: 14px;
        margin: 0;
        padding: 0;
        text-overflow: ellipsis; }

.header-menu {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end; }
  .header-menu .dropdown {
    line-height: 55px;
    margin-top: 0 !important; }
    .header-menu .dropdown .dropdown-toggle {
      line-height: 55px; }

.user-area .dropdown-toggle {
  position: relative;
  z-index: 0; }
  .user-area .dropdown-toggle:before {
    content: "";
    position: absolute;
    right: -3px;
    bottom: 10px;
    background: #868e96;
    width: 11px;
    height: 11px;
    border-radius: 100%;
    border: 2px  solid white;
    z-index: 1; }
  .user-area .dropdown-toggle.active:before {
    background: #49a342; }

.dropdown-menu {
  border-radius: 0;
  -webkit-transform: none !important;
          transform: none !important; }

.for-notification .dropdown-menu .dropdown-item {
  padding: 5px 15px !important;
  text-overflow: ellipsis; }
  .for-notification .dropdown-menu .dropdown-item i {
    float: left;
    font-size: 14px;
    margin: 5px 5px 0 0;
    text-align: left;
    width: 20px; }
  .for-notification .dropdown-menu .dropdown-item p {
    padding: 0 !important;
    text-overflow: ellipsis; }

.user-area {
  float: right;
  padding-right: 0;
  position: relative;
  padding-left: 20px; }
  .user-area .user-menu {
    background: #fff;
    border: none;
    left: inherit !important;
    right: 0;
    top: 54px !important;
    margin: 0;
    max-width: 150px;
    padding: 5px 10px;
    position: absolute;
    width: 100%;
    z-index: 999;
    min-width: 150px;
    -webkit-box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
            box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05); }
    .user-area .user-menu .nav-link {
      color: #607d8b;
      display: block;
      font-size: 13px;
      line-height: 22px;
      padding: 5px 0; }
      .user-area .user-menu .nav-link > i {
        margin-right: 10px; }
  .user-area .user-avatar {
    float: right;
    width: 40px; }
  .user-area .user-info .name {
    color: #8c8c8c;
    font-size: 14px;
    position: relative;
    text-transform: uppercase; }
  .user-area .count {
    background: #d9534f;
    border-radius: 50%;
    color: #fff;
    font-family: 'Open Sans';
    font-size: 9px;
    font-weight: 700;
    float: right;
    height: 20px;
    width: 20px;
    line-height: 20px;
    text-align: center; }
  .user-area .dropdown-toggle {
    line-height: 55px;
    height: 55px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center; }
    .user-area .dropdown-toggle:after {
      display: none; }

#menuToggle2 {
  padding-left: 25px;
   }
</style>

