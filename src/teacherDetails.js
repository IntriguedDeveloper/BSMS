import { getAuth } from "firebase/auth";
import { AppInstance } from "./firebase";
import { getFirestore, where, query, collection, getDocs } from "firebase/firestore";
const auth = getAuth(AppInstance);
const db = getFirestore(AppInstance);

export async function getDetails() {
  let detailsObject = {
    className : '',
    userEmail : '',
    userName : '',
  };
  const user = await auth.currentUser;
  const userEmail = user.email;
  const collection_ref_teachers = collection(db, "Teachers");
  const classQuery = query(
    collection_ref_teachers,
    where("Email", "==", userEmail)
  );
  const querySnapShot = await getDocs(classQuery);
  const className = querySnapShot.docs[0].data().Class;
  
  detailsObject.userName = querySnapShot.docs[0].data().Name;
  detailsObject.className = className;
  detailsObject.userEmail = userEmail;
  return detailsObject;
}

