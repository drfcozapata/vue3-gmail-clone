import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

axios.defaults.baseURL = 'http://localhost:4001/';

export const useUserStore = defineStore(
	'user',
	() => {
		const sub = ref('');
		const email = ref('');
		const picture = ref('');
		const firstname = ref('');
		const lastname = ref('');
		const emails = ref([]);

		async function getUserDetailsFromGoogle(data) {
			let res = await axios.post('api/google-login', {
				token: data.credential,
			});

			sub.value = res.data.sub;
			email.value = res.data.email;
			picture.value = res.data.picture;
			firstname.value = res.data.given_name;
			lastname.value = res.data.family_name;
		}

		function clearUser() {
			sub.value = null;
			email.value = null;
			picture.value = null;
			firstname.value = null;
			lastname.value = null;
		}

		return {
			sub,
			email,
			picture,
			firstname,
			lastname,
			emails,
			clearUser,
			getUserDetailsFromGoogle,
		};
	},
	{
		persist: true,
	}
);
