<script>
import axios from 'axios'

export default {

  data() {
    return {
      city: "",
      error: "",
      info: null,

    }
  },
  methods: {
    getWeather() {
      if(this.city.trim().length < 2) {
        this.error = "Нужно название более одного символа"
        return false
      }
      this.error = ""

      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=c055466c0132a85554b777f5315a67a8`)
        .then(res => (this.info = res.data))

    }
    
  },
  computed: {
    cityName() {
      return "городе " + this.city
    },
    showTemp() {
      return "Температура: " + this.info.main.temp + " C"
    },
    showFeelsLike() {
      return "Ощущается как: " + this.info.main.feels_like + " C"
    },
    showMinTemp() {
      return "Минимальная температура: " + this.info.main.temp_min + " C"
    },
    showMaxTemp() {
      return "Максимальная температура: " + this.info.main.temp_max + " C"
    },

  }
}
</script>

<template>
  <div class="wrapper">
    <h1>Погодное приложение</h1>
    <p>Узнать погоду в {{ city === "" ? "вашем городе" : cityName }}</p>
    <input type="text" v-model="city" placeholder="Введите город">
    <button v-if="city != ''" @click="getWeather()">Получить погоду</button>
    <button disabled v-else>Введите название города</button>
    <p class="error">{{ error }}</p>

    <div v-if="info != null">
      <p>{{ showTemp }}</p>
      <p>{{ showFeelsLike }}</p>
      <p>{{ showMinTemp }}</p>
      <p>{{ showMaxTemp }}</p>
    </div>

  </div>
</template>

<style scoped>
.error {
  color: red;
}

.wrapper {
  width: 900px;
  height: 500px;
  border-radius: 50px;
  background: #91bffc;
  padding: 20px;
  text-align: center;
  color: #111;
}

.wrapper h1 {
  margin: 50px 0 0 0;
}

.wrapper p {
  margin: 20px 0 0 0;
}

.wrapper input {
  margin: 30px 0 0 0;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #6164c6;
  color: #112;
  font-size: 14px;
  padding: 5px 8px;
  outline: none;
}

.wrapper input:focus {
  border-bottom: 2px solid #313476;
}

.wrapper button {
  background: #87dfac;
  color: #112;
  border-radius: 10px;
  border: 2px solid #479f6c;
  padding: 10px 15px;
  margin: 0 0 0 20px;
  cursor: pointer;
  transition: transform 500ms ease;
}

.wrapper button:hover {
  transform: scale(1.05) translateY(-2px);
}
.wrapper button:disabled {
  background: #88c2a0;
  cursor: not-allowed;
}
</style>