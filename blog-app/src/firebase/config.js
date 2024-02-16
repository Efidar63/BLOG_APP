import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBi2ySpgM1leZAcJ3RUTUQY15m438e3uQ8",
  authDomain: "blog-vue3-439d9.firebaseapp.com",
  projectId: "blog-vue3-439d9",
  storageBucket: "blog-vue3-439d9.appspot.com",
  messagingSenderId: "742386752632",
  appId: "1:742386752632:web:d93f08c393c28d2df2e18d"
};

const fb = initializeApp(firebaseConfig);
export {fb};