import { useContext, useState } from "react";
import { TripContext } from "../context/TripContext";
import TripCard from "../components/TripCard";

export default function Dashboard() {
  const { trips, addTrip } = useContext(TripContext);
  const [name, setName] = useState("");
  const [budget, setBudget] = useState("");

  return (
    <div className="container">
      <h1>Dashboard</h1>

      <input placeholder="Trip Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Budget" onChange={(e) => setBudget(e.target.value)} />

      <button onClick={() => addTrip({
        name,
        budget,
        expenses: [],
        itinerary: []
      })}>
        Add Trip
      </button>

      {trips.map(t => <TripCard key={t.id} trip={t} />)}
    </div>
  );
}