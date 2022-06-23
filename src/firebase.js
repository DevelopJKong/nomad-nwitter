import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBuEqd6RWgugHFmcYoazZkgi-RHJKxWc30",
    authDomain: "nwitter-ae185.firebaseapp.com",
    projectId: "nwitter-ae185",
    storageBucket: "nwitter-ae185.appspot.com",
    messagingSenderId: "16764048918",
    appId: "1:16764048918:web:25728de47debaf27c30737"
  };

  const app = initializeApp(firebaseConfig);

  export default app;