import { Link } from "react-router-dom";
import { useContext } from "react";
import { TripContext } from "../context/TripContext";

export default function TripCard({ trip }) {
  const { deleteTrip } = useContext(TripContext);

  return (
    <div className="card">
      <h3>{trip.name}</h3>
      <p>Budget: ₹{trip.budget}</p>

      <Link to={`/trip/${trip.id}`}>
        <button>View</button>
      </Link>

      <button
        onClick={() => {
          if (window.confirm("Delete this trip?")) {
            deleteTrip(trip.id);
          }
        }}
      >
        Delete Trip
      </button>
    </div>
  );
}