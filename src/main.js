import { createApp} from 'vue';
import App from './App.vue'
import router from './router/index.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import header from './components/header.vue'
import footer from './components/footer.vue'
import navigator from './components/navigator.vue'

const app=createApp(App)
app.use(router)
app.component('Header', header)
app.component('Footer', footer)
app.component('Navigator',navigator)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component)
}
app.mount('#app')