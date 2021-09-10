import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkSoCnaVd2rAq2Wh8sGn1DOKceeeEeWNk",
    authDomain: "flywise-bb646.firebaseapp.com",
    projectId: "flywise-bb646",
    storageBucket: "flywise-bb646.appspot.com",
    messagingSenderId: "304540854489",
    appId: "1:304540854489:web:77a94545e5a921c11ab6c8"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = "en";

export {
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
};
