// useStudentData.js
import { useState, useEffect, createContext, useContext } from "react";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";
import { AppInstance } from "./firebase";
import { getDetails } from "./teacherDetails";

const db = getFirestore(AppInstance);

const StudentDataContext = createContext();

export function StudentDataProvider({ children }) {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    async function fetchStudentData() {
      let className = (await getDetails()).className;
      const collection_ref = collection(
        db,
        `/classes/class-X/${className}/Students/Information`
      );
      const q = query(collection_ref);
      const querySnapShotRows = await getDocs(q);

      const sortedRows = querySnapShotRows.docs.map((doc) => doc.data()).sort((a, b) => a.roll - b.roll);
      setStudentData(sortedRows);
    }

    fetchStudentData();
  }, []);

  return (
    <StudentDataContext.Provider value={studentData}>
      {children}
    </StudentDataContext.Provider>
  );
}

export function useStudentData() {
  return useContext(StudentDataContext);
}
