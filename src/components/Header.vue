<template>
  <div id="navbar">
      <router-link to="/" exact><h1 id="heading">Weatherman</h1>
      <img id="sun-logo" src="../assets/sun-logo.png" alt="sun logo"></router-link>
      <router-link to="/world-weather/" exact><a class="nav-link" href="#">Around the World</a></router-link>
      <router-link to="/" exact><a class="nav-link" href="#">Home</a></router-link>
  </div>
</template>

<script>

export default {
    mounted() {
       
    }
}
</script>

<style scoped>

#navbar {
    width: 100%;
    height: 70px;
    background-color:#161738;
    border-bottom: 2px solid #f7e860;
}

#heading {
    float: left;
    height: 100%;
    padding: 10px 5px 0 10px;
    text-transform: uppercase;
    color:#f7e860;
}

#heading:hover {
    color:aliceblue;
    cursor: pointer;
}

#sun-logo {
    height: 100%;
    width: 50px;
    padding: 8px 0px 12px;
}

.nav-link {
    display: block;
    height: 100%;
    width: 150px;
    text-align: center;
    padding-top: 50%;
    float: right;
    margin: 0 20px 0 0;
    text-decoration: none;
    color:#f7e860;
    padding: 20px;
    margin-top: 0;
}

.nav-link:hover {
    color:aliceblue;
    cursor: pointer;
    border-left: 2px solid #f7e860;
    border-right:2px solid #f7e860;
    border-radius: 30%;
}

.router-link-active a  {
    border-left: 2px solid #f7e860;
    border-right:2px solid #f7e860;
    border-radius: 30%;
}

@media screen and (max-width: 650px) {
    
    #navbar {
        height: 50px;
    }

    #heading {
        display: none;
    }

    #sun-logo {
        width: 35px;
        margin-left: 5px;
    }

    .nav-link {
        width: 120px;
        font-size: .7rem; 
        padding-top: 15px;
        margin: 0 5px 0 0;
    }
}

</style>
