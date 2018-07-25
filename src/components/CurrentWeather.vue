<template>
    <div id="container">
        <h1>{{ weatherData.city_name }}, {{ weatherData.country_code }}</h1>
        <img v-bind:src='"../assets/icons/" + weatherData.weather.icon + ".png"' alt="weather icon">
        <h2>{{ weatherData.weather.description }}</h2>
        <div id="flex-container">
            <p>Temperature: <span>{{ weatherData.temp }}&#8451;</span></p>
            <p>Cloud coverage: <span>{{ weatherData.clouds }}%</span></p>
            <p>Pressure: <span>{{ weatherData.pres }}mb</span></p> 
            <p>Relative humidity: <span>{{ weatherData.rh }}%</span></p>
            <p>Wind speed: <span>{{ weatherData.wind_spd }}m/s</span></p>
            <p>Wind direction: <span>{{ weatherData.wind_cdir_full }}</span></p>
            <p>Visibility: <span>{{ weatherData.vis }}km</span></p>
            <p>UV index: <span>{{ weatherData.uv }}</span></p>
            <p>Dew point: <span>{{ weatherData.dewpt }}&#8451;</span></p>
            <p>Part of the day: <span>{{ weatherData.pod }}</span></p>
            <p>Last observation time: <span>{{ weatherData.ob_time }}</span></p>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
        weatherData: {}
    }
  },
  beforeCreate() {
  
    getLocation();

    const self = this;

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    };

    function showPosition(position) {

        self.$http.get('https://api.weatherbit.io/v2.0/current?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&key=0f659496fecf425ab7103b1dea18475c')
            .then(function(response) {
                self.weatherData = response.body.data[0];
        }); 
    }
  
  }
}
</script>

<style scoped>

#container {
    width:70%;
    background-color: rgba(22, 23, 56, 0.8);
    margin: 100px auto;
    color: #f7e860;
    padding: 0 20px;
    border: 1px solid #f7e860;
}

#container h1 {
    width: 70%;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    border-bottom: 2px solid #f7e860;
    border-radius: 30px;
}

#container img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 20px auto 0;
}

#container h2 {
    text-align: center;
    padding-bottom: 10px;
    letter-spacing: .7px;
}

#flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

#flex-container p {
    font-size: .9rem;
    letter-spacing: .5px;
    text-align: center;
    width: 200px;
    padding: 15px;
    margin: 20px 0;
}


#flex-container p span {
    font-size: 1.2rem;
    text-transform: uppercase;
    display: block;
}

@media screen and (max-width: 650px) {
   
    #container {
        width:90%;
    }

}
</style>

