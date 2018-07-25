import CurrentWeather from './components/CurrentWeather.vue'
import WorldWeather from './components/WorldWeather.vue'

export default [
    { path: '/', component: CurrentWeather },
    { path: '/world-weather/', component: WorldWeather }
]