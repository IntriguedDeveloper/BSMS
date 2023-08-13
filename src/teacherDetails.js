import { AppInstance } from "../firebase";
import {
  getFirestore,
  doc,
  setDoc,
  query,
  where,
  getDocs,
  collection,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
const db = getFirestore(AppInstance);
const auth = getAuth(AppInstance);
const user = auth.currentUser;
export const userEmail = user.email;
const collection_ref_teachers = collection(db, "Teachers");
const classQuery = query(
  collection_ref_teachers,
  where("Email", "==", userEmail)
);
const querySnapShot = await getDocs(classQuery);

export const className = querySnapShot.docs[0].data().Class;
export const teacherName = querySnapShot.docs[0].data().Name;
