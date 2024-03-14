<script>
import Input from './components/Input.vue'
import Selector from './components/Selector.vue'
import Favourite from './components/Favourite.vue'
import CryptoConvert from 'crypto-convert';

const convert = new CryptoConvert();

export default {
  components: { Input, Selector, Favourite },

  data() {
    return {
      amount: 0,
      cryptoFirst: '',
      cryptoSecond: '',
      error: '',
      result: '',
      favs: [],
    }
  },
  methods: {
    favourite() {
      if(this.cryptoFirst === '' || this.cryptoSecond === '') {
        this.error = 'Выберите валюты для Избранного';
        return;
      } else if(this.favs.some(fav => fav.from === this.cryptoFirst && fav.to === this.cryptoSecond)) {
        this.error = 'Такой вариант уже есть в Избранном';
      } else {
        this.favs.push({
          from: this.cryptoFirst,
          to: this.cryptoSecond,
        })
      }
    },
    getFromFavs(index) {
      this.cryptoFirst = this.favs[index].from
      this.cryptoSecond = this.favs[index].to
    },
    changeAmount(val) {
      this.amount = val
    },
    setCryptoFirst(val) {
      this.cryptoFirst = val
    },
    setCryptoSecond(val) {
      this.cryptoSecond = val
    },
    async convert() {
      if(this.amount <= 0) {
        this.error = 'Введите значение больше нуля';
        return;
      } else if(this.cryptoFirst === '' || this.cryptoSecond === '') {
        this.error = 'Выберите валюту';
        return;
      } else if(this.cryptoFirst === this.cryptoSecond) {
        this.error = 'Выберите другую валюту для перевода';
        return;
      }

      this.error = ''

      await convert.ready();

      if(this.cryptoFirst === 'BTC' && this.cryptoSecond === 'ETH')
        this.result = `${this.amount} ${this.cryptoFirst} = ${convert.BTC.ETH(this.amount)} ${this.cryptoSecond}`;
      else if(this.cryptoFirst === 'BTC' && this.cryptoSecond === 'USDT')
        this.result = `${this.amount} ${this.cryptoFirst} = ${convert.BTC.USDT(this.amount)} ${this.cryptoSecond}`;
      else if(this.cryptoFirst === 'ETH' && this.cryptoSecond === 'BTC')
        this.result = `${this.amount} ${this.cryptoFirst} = ${convert.ETH.BTC(this.amount)} ${this.cryptoSecond}`;
      else if(this.cryptoFirst === 'ETH' && this.cryptoSecond === 'USDT')
        this.result = `${this.amount} ${this.cryptoFirst} = ${convert.ETH.USDT(this.amount)} ${this.cryptoSecond}`;
      else if(this.cryptoFirst === 'USDT' && this.cryptoSecond === 'BTC')
        this.result = `${this.amount} ${this.cryptoFirst} = ${convert.USDT.BTC(this.amount)} ${this.cryptoSecond}`;
      else if(this.cryptoFirst === 'USDT' && this.cryptoSecond === 'ETH')
        this.result = `${this.amount} ${this.cryptoFirst} = ${convert.USDT.ETH(this.amount)} ${this.cryptoSecond}`;
    }
  },
}
</script>

<template>
  <h1>CRYPTO</h1>
  <Input :changeAmount="changeAmount" :convert="convert" :favourite="favourite"/>
  <p v-if="error != ''" style="color: red;">{{ error }}</p>
  <p v-if="result != ''" class="result-text">{{ result }}</p>
  <Favourite :favs="favs" v-if="favs.length > 0" :getFromFavs="getFromFavs"/>
  <div class="selectors">
    <Selector :setCrypto="setCryptoFirst" :cryptoNow="cryptoFirst"/>
    <Selector :setCrypto="setCryptoSecond" :cryptoNow="cryptoSecond"/>
  </div>

</template>

<style scoped>
.selectors {
  display: flex;
  justify-content: space-around;
  width: 700px;
  margin: 0 auto;
}
</style>