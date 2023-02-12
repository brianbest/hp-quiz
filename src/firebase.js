// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, setDoc, getFirestore, query, collection, orderBy, getDocs } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCfYx4SYx1DCQRij0qJlp_daY-PFP_4m6g",

  authDomain: "hp-quiz-d522c.firebaseapp.com",

  projectId: "hp-quiz-d522c",

  storageBucket: "hp-quiz-d522c.appspot.com",

  messagingSenderId: "887008058957",

  appId: "1:887008058957:web:45a60a56712af5e96f0604",

  measurementId: "G-CKRSLENVMX"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

class HousesCollection{
    constructor() {
        this.app = initializeApp(firebaseConfig);
        this.db = getFirestore(this.app);
        this.collectionRef = collection(this.db, 'userhouses');
        this.userHouses = [];
    }
    async getUserHouses() {
        if (this.userHouses.length > 0) {
          return this.userHouses;
        }
    
        const q = query(this.collectionRef, orderBy("name"));
        const querySnapshot = await getDocs(q);
        this.userHouses = [];
        querySnapshot.forEach((doc) => {
            this.userHouses.push({id: doc.id, ...doc.data()});
        });

        return this.userHouses;
    }

    async addHouse(name, houseOrder) {
        const listing = {name:name, houses:houseOrder};
        const docRef = setDoc(doc(this.db, "userhouses", name), listing).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            return docRef;
        }

        ).catch((error) => {
            console.error("Error adding document: ", error);
        });
        return docRef;
    }

} 

export default HousesCollection;