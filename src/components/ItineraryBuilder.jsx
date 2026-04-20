import { useState, useContext } from "react";
import { TripContext } from "../context/TripContext";

export default function ItineraryBuilder({ trip }) {
  const { updateTrip } = useContext(TripContext);

  const [activity, setActivity] = useState("");
  const [expense, setExpense] = useState("");

  const addPlan = () => {
    if (!activity || !expense) return;

    const updated = {
      ...trip,
      itinerary: [
        ...trip.itinerary,
        { activity, expense: Number(expense) }
      ],
      expenses: [...trip.expenses, Number(expense)]
    };

    updateTrip(updated);

    setActivity("");
    setExpense("");
  };

  return (
    <div className="card">
      <h2>Itinerary</h2>

      <input
        placeholder="Activity"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />

      <input
        placeholder="Expense"
        type="number"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
      />

      <button onClick={addPlan}>Add</button>

      {trip.itinerary.map((item, i) => (
        <p key={i}>
          {item.activity} - ₹{item.expense}
        </p>
      ))}
    </div>
  );
}