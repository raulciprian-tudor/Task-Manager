import './assets/style.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faArrowDownZA } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'

const app = createApp(App)

library.add(faPlus, faBell, faSearch, faInbox, faArrowDownZA, faCircleCheck, faCalendarDay)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())

app.mount('#app')
