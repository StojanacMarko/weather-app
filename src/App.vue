<template>
  <div>
    <Header />
    <vue-particles color="#f7e860" :particlesNumber="200" hoverMode="grab"></vue-particles>
    <transition name="router-anim" enter-active-class="animated bounceInLeft">
       <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import CurrentWeather from './components/CurrentWeather.vue';
import Header from './components/Header.vue'
import WorldWeather from './components/WorldWeather.vue'

export default {

  components: {
    CurrentWeather,
    Header,
    WorldWeather
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald');


* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Oswald', sans-serif;
}

body {
    background-image: url('./assets/bckg-pic.jpeg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #f7e860;
    font-family: 'Armata', sans-serif;
}

#particles-js {
    position: absolute; 
    background-size: cover; 
    width: 100%;
    height: 100vh; 
    z-index: -1;
}
</style>
