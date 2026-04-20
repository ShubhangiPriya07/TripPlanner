import { useMemo, useEffect } from "react";

export default function BudgetTracker({ trip }) {
  const totalSpent = useMemo(() => {
    return trip.expenses.reduce((a, b) => a + b, 0);
  }, [trip.expenses]);

  useEffect(() => {
    if (totalSpent > trip.budget) {
      alert("⚠️ Budget exceeded!");
    }
  }, [totalSpent, trip.budget]);

  return (
    <div className="card">
      <h2>Budget Tracker</h2>

      <p>Total Budget: ₹{trip.budget}</p>
      <p>Spent: ₹{totalSpent}</p>
      <p>Remaining: ₹{trip.budget - totalSpent}</p>
    </div>
  );
}