import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLocationArrow, faBirthdayCake, faMapMarkedAlt, faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/fontawesome-free-brands'

library.add(faBirthdayCake, faMapMarkedAlt, faEnvelope, faMobileAlt, faLocationArrow, faLinkedin) 

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
