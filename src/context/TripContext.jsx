import { createContext, useState, useEffect, useContext } from "react";
import { db } from "../services/firebase";
import { AuthContext } from "./AuthContext";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";

export const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchTrips = async () => {
      const snapshot = await getDocs(collection(db, "trips"));
      const data = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTrips(data.filter(t => t.userId === user.uid));
    };

    if (user) fetchTrips();
  }, [user]);

  const addTrip = async (trip) => {
    await addDoc(collection(db, "trips"), {
      ...trip,
      userId: user.uid,
    });
  };

  const updateTrip = async (trip) => {
    const ref = doc(db, "trips", trip.id);
    await updateDoc(ref, trip);
  };

  const deleteTrip = async (id) => {
    await deleteDoc(doc(db, "trips", id));
  };

  return (
    <TripContext.Provider value={{ trips, addTrip, updateTrip, deleteTrip }}>
      {children}
    </TripContext.Provider>
  );
};