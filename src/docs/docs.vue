<template lang="html">
<div class="container col-4 col-xl-6 col-md-8 col-sm-10 col-xs-12">

  <h2>v-money <small class="label">Currency mask input for Vue</small></h2>

  <p>
    <img class="img-responsive centered" src="https://cdn-images-1.medium.com/max/600/1*Rpc289FpghuHrnzyVpOUig.gif" />
  </p>

  <p class="text-center">
    <a class="btn" href="https://github.com/vuejs-tips/v-money">https://github.com/vuejs-tips/v-money</a>
  </p>

  <label>No Negative</label>
  <div class="columns">
    <div class="column col-6 col-sm-12">
      <money v-model="amount" class="form-input input-lg" v-bind="noNegative"></money>
    </div>
    <div class="column col-6 col-sm-12">
      <h3>{{amount}}</h3>
    </div>
  </div>

</div>
</template>

<script>
import Vue from 'vue'
import money from '../index'
import vuetify from 'vuetify'

Vue.use(money)
Vue.use(vuetify)

export default {
  data () {
    return {
      amount: 0,
      noNegative: { decimal: ',', thousands: '.', prefix: '', suffix: '', precision: 0, masked: false }
    }
  }
}
</script>

<style lang="css">
@import url('https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.2.14/spectre.min.css');
.v-money {
  text-align: right;
}
input {
  font-family: monospace;
  font-size: 1.8rem !important;
}
body {
  background-color: #eee;
}
.container {
  background-color: white;
  border-radius: 4px;
  margin-top: 20px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25);
}
figure {
  text-align: center;
  padding-top: 10px;
}
figure img {
  width: 100%;
  border: 2px solid black;
}
.input-group__input {
  width: 100%;
}
.input-group__input input {
  width: 100%;
}
</style>
