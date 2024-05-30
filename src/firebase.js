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
import { toast } from "react-toastify";

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
        toast.success('Signup successful!');
    } catch (error) {
        console.error(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Login successful!');
    } catch (error) {
        console.error(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

const logout = () => {
    signOut(auth).then(() => {
        toast.success('Logout successful!');
    }).catch((error) => {
        console.error(error);
        toast.error(error.message);
    });
}

export { auth, db, login, signup, logout };
