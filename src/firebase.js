import { initializeApp } from "firebase/app";
import { 
       createUserWithEmailAndPassword,
       getAuth,
       signInWithEmailAndPassword, 
       signOut
} from "firebase/auth";
import { 
      addDoc,
      collection,
      getFirestore 
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFZzIE4IFmuWWoci3mGcA1ej06n5wWwnQ",
  authDomain: "netflix-clone-12ea1.firebaseapp.com",
  projectId: "netflix-clone-12ea1",
  storageBucket: "netflix-clone-12ea1.appspot.com",
  messagingSenderId: "843984222424",
  appId: "1:843984222424:web:3b40b6a2aaf47249993fad"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

const logout = () => {
    signOut(auth);
}

export { auth, db, login, signup, logout };
