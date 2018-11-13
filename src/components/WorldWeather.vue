<template>
    <div>
        <div class="search" v-if="show">
            <h1 class="search__heading">Let's see the weather around the world</h1>
            <form v-on:submit.prevent>
                <input type="text" placeholder="Enter city name" class="search__input" v-model="city" v-on:keyup.enter="getData"/>
                <button type="button" class="search__btn" v-on:click="getData">Search</button>
            </form>
        </div>
        <div class="weather" v-else>
            <h1 class="weather__city">{{ cityData.city_name }}, {{ cityData.country_code }}</h1>
            <img class="weather__img" v-bind:src='"../assets/icons/" + cityDataWeather.icon + ".png"' alt="weather icon">
            <h2 class="weather__desc">{{ cityData.weather.description }}</h2>
            <ul class="weather__data">
                <li class="weather__details">Temperature: <span>{{ cityData.temp }}&#8451;</span></li>
                <li class="weather__details">Cloud coverage: <span>{{ cityData.clouds }}%</span></li>
                <li class="weather__details">Pressure: <span>{{ cityData.pres }}mb</span></li> 
                <li class="weather__details">Relative humidity: <span>{{ cityData.rh }}%</span></li>
                <li class="weather__details">Wind speed: <span>{{ cityData.wind_spd }}m/s</span></li>
                <li class="weather__details">Wind direction: <span>{{ cityData.wind_cdir_full }}</span></li>
                <li class="weather__details">Visibility: <span>{{ cityData.vis }}km</span></li>
                <li class="weather__details">UV index: <span>{{ cityData.uv }}</span></li>
                <li class="weather__details">Dew point: <span>{{ cityData.dewpt }}&#8451;</span></li>
                <li class="weather__details">Part of the day: <span>{{ cityData.pod }}</span></li>
                <li class="weather__details">Last observation time: <span>{{ cityData.ob_time }}</span></li>
           </ul>
           <button class="weather__back-btn" v-on:click="show=true">Search Again</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            city: '',
            cityData: {},
            cityDataWeather: {},
            show: true
        }
    },
    methods: {
        getData() {
             this.$http.get(`https://api.weatherbit.io/v2.0/current?city=${this.city}&key=0f659496fecf425ab7103b1dea18475c`).then(function(response) {
                this.cityData = response.body.data[0];
                this.cityDataWeather = response.body.data[0].weather;
                this.show = false;
            });
        }          
    }
}
</script>

<style scoped>

.search {
    width:70%;
    background-color: rgba(22, 23, 56, 0.8);
    margin: 100px auto;
    color: #f7e860;
    padding: 30px;
    border: 3px solid #f7e860;
    border-radius: 15px;
}

.search__heading {
    text-align: center;
    letter-spacing: .7px;
}

.search__input {
    display: block;
    width: 80%;
    height: 40px;
    margin: 20px auto;
    padding: 10px;
    font-size: 1rem;
    background-color: #f7e860;
    color: #161738;
    border: none;
    border-radius: 5px;
    outline: none;
    letter-spacing: .3px;
}

.search__btn {
    display: block;
    width: 80%;
    height: 40px;
    margin: 20px auto;
    padding: 5px;
    font-size: 1rem;
    border: 1px solid #f7e860;
    border-radius: 5px;
    color:#f7e860;
    background-color: #161738;
    transition: all 300ms;
    letter-spacing: .5px;
}

.search__btn:hover {
    color:#161738;
    background-color: #f7e860;
    cursor: pointer;
}

.weather {
    width:70%;
    background-color: rgba(22, 23, 56, 0.8);
    margin: 50px auto;
    color: #f7e860;
    padding: 30px;
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
    justify-content: center;
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

.weather__back-btn {
    display: block;
    width: 80%;
    height: 40px;
    margin: 10px auto;
    padding: 5px;
    font-size: 1rem;
    border: 1px solid #f7e860;
    border-radius: 5px;
    color:#f7e860;
    background-color: #161738;
    transition: all 300ms;
    cursor: pointer;
    letter-spacing: .5px;
}

.weather__back-btn:hover {
    color:#161738;
    background-color: #f7e860;
}

@media screen and (max-width: 650px) {
   
    .weather, .search {
        width:90%;
        padding: 10px;
    }

    .search__heading {
        width: 90%;
        margin: 0 auto;
    }

    .search__input, .search__btn, .weather__back-btn {
        width: 90%;
    }

}

</style>
