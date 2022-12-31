import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';
import {
	collection,
	query,
	where,
	onSnapshot,
	setDoc,
	doc,
	deleteDoc,
	getDoc,
	orderBy,
} from 'firebase/firestore';
import { db } from '@/firebase-init';
import { v4 as uuid } from 'uuid';
import moment from 'moment';

axios.defaults.baseURL = 'http://localhost:4001/';

export const useUserStore = defineStore(
	'user',
	() => {
		const sub = ref('');
		const email = ref('');
		const picture = ref('');
		const firstName = ref('');
		const lastName = ref('');
		const emails = ref([]);

		function getEmailsByEmailAddress() {
			const q = query(
				collection(db, 'emails'),
				where('toEmail', '==', email.value),
				orderBy('createdAt', 'desc')
			);
			onSnapshot(
				q,
				querySnapshot => {
					let resultArray = [];
					querySnapshot.forEach(doc => {
						resultArray.push({
							id: doc.id,
							firstName: doc.data().firstName,
							lastName: doc.data().lastName,
							fromEmail: doc.data().fromEmail,
							toEmail: doc.data().toEmail,
							subject: doc.data().subject,
							body: doc.data().body,
							hasViewed: doc.data().hasViewed,
							createdAt: moment(doc.data().createdAt).format('MMM D hh:mm a'),
						});
					});
					emails.value = resultArray;
				},
				error => console.log(error)
			);
		}

		async function sendEmail(data) {
			try {
				await setDoc(doc(db, 'emails/' + uuid()), {
					firstName: firstName.value,
					lastName: lastName.value,
					fromEmail: email.value,
					toEmail: data.toEmail,
					subject: data.subject,
					body: data.body,
					hasViewed: false,
					createdAt: Date.now(),
				});
			} catch (error) {
				console.log(error);
			}
		}

		async function getEmailById(id) {
			const docRef = doc(db, 'emails', id);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				return {
					id: id,
					firstName: docSnap.data().firstName,
					lastName: docSnap.data().lastName,
					fromEmail: docSnap.data().fromEmail,
					toEmail: docSnap.data().toEmail,
					subject: docSnap.data().subject,
					body: docSnap.data().body,
					hasViewed: docSnap.data().hasViewed,
					createdAt: docSnap.data().createdAt,
				};
			} else {
				console.log('No such document');
			}
		}

		async function emailHasBeenViewed(id) {
			try {
				await setDoc(
					doc(db, 'emails/' + id),
					{
						hasViewed: true,
					},
					{ merge: true }
				);
			} catch (error) {
				console.log(error);
			}
		}

		async function deleteEmail(id) {
			try {
				await deleteDoc(doc(db, 'emails', id));
			} catch (error) {
				console.log(error);
			}
		}

		async function getUserDetailsFromGoogle(data) {
			let res = await axios.post('api/google-login', {
				token: data.credential,
			});

			sub.value = res.data.sub;
			email.value = res.data.email;
			picture.value = res.data.picture;
			firstName.value = res.data.given_name;
			lastName.value = res.data.family_name;
		}

		function clearUser() {
			sub.value = null;
			email.value = null;
			picture.value = null;
			firstName.value = null;
			lastName.value = null;
		}

		return {
			sub,
			email,
			picture,
			firstName,
			lastName,
			emails,
			clearUser,
			getEmailsByEmailAddress,
			getUserDetailsFromGoogle,
			sendEmail,
			getEmailById,
			emailHasBeenViewed,
			deleteEmail,
		};
	},
	{
		persist: true,
	}
);
