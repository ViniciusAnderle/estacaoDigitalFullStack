import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyDWQH2VqEO5xwZL4UcHsPMbcGFwf3wFxTo",
  authDomain: "estacaodigital-7533a.firebaseapp.com",
  projectId: "estacaodigital-7533a",
  storageBucket: "estacaodigital-7533a.appspot.com",
  messagingSenderId: "191493224202",
  appId: "1:191493224202:web:02d4d986565018660c2cf3",
  measurementId: "G-PZV1PGRP7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);