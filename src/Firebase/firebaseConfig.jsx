// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB35U3XgMFbEXJdm7JYaIZfG1MWePhEYiI",
  authDomain: "event-guchai.firebaseapp.com",
  projectId: "event-guchai",
  storageBucket: "event-guchai.appspot.com",
  messagingSenderId: "898705031103",
  appId: "1:898705031103:web:a5d2475f41fade77f46b0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;