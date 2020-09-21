import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: 'AIzaSyC5tqJ06QIWPDAHBlpndjygaT7NJU942ok',
  authDomain: 'calender-vue-vueify-fire-1e159.firebaseapp.com',
  databaseURL: 'https://calender-vue-vueify-fire-1e159.firebaseio.com',
  projectId: 'calender-vue-vueify-fire-1e159',
  storageBucket: 'calender-vue-vueify-fire-1e159.appspot.com',
  messagingSenderId: '920187803700',
  appId: '1:920187803700:web:c99084177a250e713a5261',
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
