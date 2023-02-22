import { createApp } from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import App3 from './App3.vue'

import Datepicker from '@vuepic/vue-datepicker';
import './assets/main.css'

const app = createApp(App);

app.component('Datepicker', Datepicker);

createApp(App).mount('#calendar1')
createApp(App2).mount('#calendar2')
createApp(App3).mount('#calendar3')