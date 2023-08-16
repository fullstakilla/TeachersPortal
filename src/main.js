import { createApp } from 'vue'
import '@/assets/style/main.css'
import App from './App.vue'
import router from './router'
import components from '@/components/UI'
import store from '@/store/store.js'

const app = createApp(App)
components.forEach(component => {
  app.component(component.name, component)
})


app.use(router).use(store).mount('#app')
