
import { initializeApp } from "firebase/app";
import { getAnalytics} from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3rlvTVlFYXalf3I3VMSV76WhpdxfmJXU",
  authDomain: "fir-ed599.firebaseapp.com",
  projectId: "fir-ed599",
  storageBucket: "fir-ed599.appspot.com",
  messagingSenderId: "647652132928",
  appId: "1:647652132928:web:7d565eb6e74e6996cdb7a5",
  measurementId: "G-3QCTN6JQWT"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const   auth=getAuth();
export  const db =  getFirestore(app);
export const  provider=new  GoogleAuthProvider();
