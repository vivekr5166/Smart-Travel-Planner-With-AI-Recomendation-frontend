import React, { useEffect, useState } from 'react';
import axios from '../../components/axios';

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("/travel/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });

      setHistory(response.data.history);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch history:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-xl">Loading history...</div>;
  }

  if (!history.length) {
    return <div className="text-center py-20 text-xl text-gray-500">No history found.</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Your Travel History</h2>

      {history.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 mb-6 border border-blue-100"
        >
          <div className="mb-2">
            <strong>🔍 Searched for:</strong> {item.searchInput.venue} | {item.searchInput.day} days | {item.searchInput.total_people} people
          </div>

          <div className="mb-2">
            <strong>📅 Searched At:</strong> {new Date(item.searchedAt).toLocaleString()}
          </div>

          <div className="mb-2">
            <strong>💰 Estimated Total Cost:</strong> {item.itinerary?.total_estimated_cost}
          </div>

          <details className="mt-3">
            <summary className="cursor-pointer text-blue-600 underline">View Itinerary</summary>
            <ul className="mt-2 list-disc pl-5">
              {item.itinerary?.days?.map((day, idx) => (
                <li key={idx} className="mb-2">
                  <strong>{day.day}:</strong>{" "}
                  {day.places?.map((place, i) => place.name).join(", ")}
                </li>
              ))}
            </ul>
          </details>
        </div>
      ))}
    </div>
  );
};

export default History;
