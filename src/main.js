import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import vue3GoogleLogin from 'vue3-google-login';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app
	.use(pinia)
	.use(router)
	.use(vue3GoogleLogin, {
		clientId: '1024998711491-k1v36qhsohb13h8s27au1q9c4hee6d59.apps.googleusercontent.com',
	})
	.mount('#app');
