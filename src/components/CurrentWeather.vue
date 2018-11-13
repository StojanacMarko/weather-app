<template>
    <div class="weather">
        <h1 class="weather__city">{{ weatherData.city_name }}, {{ weatherData.country_code }}</h1>
        <img class="weather__img" v-bind:src='"../assets/icons/" + weatherData.weather.icon + ".png"' alt="weather icon">
        <h2 class="weather__desc">{{ weatherData.weather.description }}</h2>
        <ul class="weather__data">
            <li class="weather__details">Temperature: <span>{{ weatherData.temp }}&#8451;</span></li>
            <li class="weather__details">Cloud coverage: <span>{{ weatherData.clouds }}%</span></li>
            <li class="weather__details">Pressure: <span>{{ weatherData.pres }}mb</span></li> 
            <li class="weather__details">Relative humidity: <span>{{ weatherData.rh }}%</span></li>
            <li class="weather__details">Wind speed: <span>{{ weatherData.wind_spd }}m/s</span></li>
            <li class="weather__details">Wind direction: <span>{{ weatherData.wind_cdir_full }}</span></li>
            <li class="weather__details">Visibility: <span>{{ weatherData.vis }}km</span></li>
            <li class="weather__details">UV index: <span>{{ weatherData.uv }}</span></li>
            <li class="weather__details">Dew point: <span>{{ weatherData.dewpt }}&#8451;</span></li>
            <li class="weather__details">Part of the day: <span>{{ weatherData.pod }}</span></li>
            <li class="weather__details">Last observation time: <span>{{ weatherData.ob_time }}</span></li>
        </ul>
    </div>
</template>

<script>

export default {
  data() {
    return {
        weatherData: {}
    }
  },
  created() {
  
    getLocation();

    const self = this;

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    };

    function showPosition(position) {
        self.$http.get(`https://api.weatherbit.io/v2.0/current?lat=${position.coords.latitude}&lon=${position.coords.longitude}&key=0f659496fecf425ab7103b1dea18475c`)
            .then(function(response) {
                self.weatherData = response.body.data[0];
            }); 
        }
    }
}
</script>

<style scoped>

.weather {
    width:70%;
    background-color: rgba(22, 23, 56, 0.8);
    margin: 100px auto;
    color: #f7e860;
    padding: 0 20px;
    border: 3px solid #f7e860;
    border-radius: 15px;
}

.weather__city {
    width: 70%;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    border-bottom: 2px solid #f7e860;
    border-radius: 30px;
}

.weather__img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 20px auto 0;
}

.weather__desc {
    text-align: center;
    padding-bottom: 10px;
    letter-spacing: .7px;
}

.weather__data {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    list-style-type: none;
}

.weather__details {
    font-size: .9rem;
    letter-spacing: .5px;
    text-align: center;
    width: 200px;
    padding: 15px;
    margin: 20px 0;
    letter-spacing: .7px;
}

.weather__details span {
    font-size: 1.4rem;
    text-transform: uppercase;
    display: block;
    position: relative;
    padding-top: 10px;
    margin-top: 5px;
}

.weather__details span::before {
    content: '';
    position: absolute;
    width: 20%;
    height: 1px;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    display: block;
    background-color:#f7e860;
}

@media screen and (max-width: 650px) {
   
    .weather {
        width:90%;
    }

}
</style>

