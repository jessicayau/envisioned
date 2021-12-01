import { initializeApp } from "firebase/app";
import {
    getFirestore,
    writeBatch,
    doc,
    getDocs,
    collection,
    query,
    orderBy,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCZZKuGUxenm54b6jJ4UbpDgyK7eTAL_08",
    authDomain: "envisioned-8ca07.firebaseapp.com",
    projectId: "envisioned-8ca07",
    storageBucket: "envisioned-8ca07.appspot.com",
    messagingSenderId: "315663607394",
    appId: "1:315663607394:web:16879e9724b132441c133b",
};

initializeApp(firebaseConfig);

export const firestoreDB = getFirestore();

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(firestoreDB, collectionKey);

    const batch = writeBatch(firestoreDB);
    objectsToAdd.forEach((obj) => {
        const newDocRef = doc(collectionRef);
        batch.set(newDocRef, obj);
    });
    return await batch.commit();
};

export const retrieveAllCollections = async () => {
    const palettes = [];

    const collectionRef = await collection(firestoreDB, "palettes");
    const orderedCollectionRef = query(collectionRef, orderBy("categoryId"));
    const collectionSnapshot = await getDocs(orderedCollectionRef);

    collectionSnapshot.forEach((doc) => {
        palettes.push(doc.data());
    });
    return palettes;
};
