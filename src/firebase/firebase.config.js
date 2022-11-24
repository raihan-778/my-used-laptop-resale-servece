// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

/*   REACT_APP_apiKey=AIzaSyDD-1Joy3gXF1zO-9JpRAgbKj1ZxmaPLPI
  REACT_APP_authDomain=used-product-resale-client.firebaseapp.com
  REACT_APP_projectId=used-product-resale-client
  REACT_APP_storageBucket=used-product-resale-client.appspot.com
  REACT_APP_messagingSenderId=896144178604
  REACT_APP_appId=1:896144178604:web:2a897c9a04bce422874e09
  */

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
