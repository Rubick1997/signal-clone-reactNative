import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDfryicMiiM8AnF02X0Rw_QyidvT71xsVU",
	authDomain: "signal-clone-58dc0.firebaseapp.com",
	projectId: "signal-clone-58dc0",
	storageBucket: "signal-clone-58dc0.appspot.com",
	messagingSenderId: "667741404137",
	appId: "1:667741404137:web:236232b9c1c7f001a9a978",
	measurementId: "G-K1F1B0CJVE",
};

let app;

if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app - firebase.app();
}

const db = app.firestore;
const auth = firebase.auth();

export { db, auth };
