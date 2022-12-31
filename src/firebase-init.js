import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCiU4M6bZq7UWhxKF4lV1jbiWA-CoiktRU',
	authDomain: 'clone-373113.firebaseapp.com',
	projectId: 'gmailclone-373113',
	storageBucket: 'gmailclone-373113.appspot.com',
	messagingSenderId: '1024998711491',
	appId: '1:1024998711491:web:8413ccfb6484bd8e0f0276',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
