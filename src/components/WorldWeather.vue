<template>
    <div>
        <div id="search-container" v-if="show">
            <h1>Let's see the weather around the world</h1>
            <form v-on:submit.prevent>
                <input type="text" placeholder="Enter city name" id="input" v-model="city"/>
                <button type="button" id="search-btn" v-on:click="getData">Search</button>
            </form>
        </div>
        <div id="result-container" v-else>
            <h1>{{ cityData.city_name }}, {{ cityData.country_code }}</h1>
            <img v-bind:src='"../assets/icons/" + cityData.weather.icon + ".png"' alt="weather icon">
            <h2>{{ cityData.weather.description }}</h2>
            <div id="flex-container">
                <p>Temperature: <span>{{ cityData.temp }}&#8451;</span></p>
                <p>Cloud coverage: <span>{{ cityData.clouds }}%</span></p>
                <p>Pressure: <span>{{ cityData.pres }}mb</span></p> 
                <p>Relative humidity: <span>{{ cityData.rh }}%</span></p>
                <p>Wind speed: <span>{{ cityData.wind_spd }}m/s</span></p>
                <p>Wind direction: <span>{{ cityData.wind_cdir_full }}</span></p>
                <p>Visibility: <span>{{ cityData.vis }}km</span></p>
                <p>UV index: <span>{{ cityData.uv }}</span></p>
                <p>Dew point: <span>{{ cityData.dewpt }}&#8451;</span></p>
                <p>Part of the day: <span>{{ cityData.pod }}</span></p>
                <p>Last observation time: <span>{{ cityData.ob_time }}</span></p>
           </div>
           <button id="back-btn" v-on:click="show=true">Search Again</button>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            city: '',
            cityData: {},
            show: true
        }
    },
    methods: {
        getData() {

             this.$http.get('https://api.weatherbit.io/v2.0/current?city=' + this.city + '&key=0f659496fecf425ab7103b1dea18475c').then(function(response) {
                this.cityData = response.body.data[0];
                this.show = false;
            });

        }          
    }
}
</script>

<style scoped>

#search-container {
    width:70%;
    background-color: rgba(22, 23, 56, 0.8);
    margin: 100px auto;
    color: #f7e860;
    padding: 30px;
    border: 1px solid #f7e860;
}

#search-container h1{
    text-align: center;
}

#input {
    display: block;
    width: 80%;
    height: 40px;
    margin: 20px auto;
    padding: 10px;
    font-size: 1rem;
    background-color: #f7e860;
    color: #161738;
}

#search-btn {
    display: block;
    width: 80%;
    height: 40px;
    margin: 20px auto;
    padding: 5px;
    font-size: 1rem;
    border: 2px solid #f7e860;
    color:#f7e860;
    background-color: #161738;
}

#search-btn:hover {
    border: 2px solid #161738;
    color:#161738;
    background-color: #f7e860;
    cursor: pointer;
}

#result-container {
    width:70%;
    background-color: rgba(22, 23, 56, 0.8);
    margin: 50px auto;
    color: #f7e860;
    padding: 30px;
    border: 1px solid #f7e860;
}

#result-container h1 {
    width: 70%;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
    border-bottom: 2px solid #f7e860;
    border-radius: 30px;
}

#result-container img {
    display: block;
    width: 100px;
    height: 100px;
    margin: 20px auto 0;
}

#result-container h2 {
    text-align: center;
    padding-bottom: 10px;
    letter-spacing: .7px;
}

#flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
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

#back-btn {
    display: block;
    width: 80%;
    height: 40px;
    margin: 10px auto;
    padding: 5px;
    font-size: 1rem;
    border: 2px solid #f7e860;
    color:#f7e860;
    background-color: #161738;
}

#back-btn:hover {
    border: 2px solid #161738;
    color:#161738;
    background-color: #f7e860;
    cursor: pointer;
}

@media screen and (max-width: 650px) {
   
    #result-container, #search-container {
        width:90%;
        padding: 10px;
    }

    #search-container h1 {
        width: 90%;
        margin: 0 auto;
    }

    #input, #search-btn, #back-btn {
        width: 90%;
    }

}

</style>
