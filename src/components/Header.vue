<template>
  <div class="navbar">
      <router-link to="/" exact><h1 class="navbar__logo">Weatherman</h1>
      <img class="navbar__logo-img" src="../assets/sun-logo.png" alt="sun logo"></router-link>
      <router-link to="/world-weather/" exact><a class="navbar__link" href="#">Around the World</a></router-link>
      <router-link to="/" exact><a class="navbar__link" href="#">Home</a></router-link>
  </div>
</template>

<style scoped>

.navbar {
    width: 100%;
    height: 70px;
    background-color:#161738;
    border-bottom: 3px solid #f7e860;
}

.navbar__logo {
    float: left;
    height: 100%;
    padding: 10px 5px 0 10px;
    text-transform: uppercase;
    color:#f7e860;
    cursor: pointer;
}

.navbar__logo-img {
    height: 100%;
    width: 50px;
    padding: 8px 0px 12px;
}

.navbar__link {
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
    transition: color 300ms;
}

.navbar__link:hover {
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
    
    .navbar {
        height: 50px;
    }

    .navbar__logo {
        display: none;
    }

    .navbar__logo-img {
        width: 35px;
        margin-left: 5px;
    }

    .navbar__link {
        width: 120px;
        font-size: .7rem; 
        padding-top: 15px;
        margin: 0 5px 0 0;
    }
}

</style>
