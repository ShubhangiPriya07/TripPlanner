import { useParams } from "react-router-dom";
import { useContext } from "react";
import { TripContext } from "../context/TripContext";
import BudgetTracker from "../components/BudgetTracker";
import ItineraryBuilder from "../components/ItineraryBuilder";

export default function TripDetails() {
  const { id } = useParams();
  const { trips } = useContext(TripContext);

  const trip = trips.find(t => t.id == id);

  if (!trip) return <h2>Trip not found</h2>;

  return (
    <div className="container">
      <h1>{trip.name}</h1>

      <BudgetTracker trip={trip} />
      <ItineraryBuilder trip={trip} />
    </div>
  );
}