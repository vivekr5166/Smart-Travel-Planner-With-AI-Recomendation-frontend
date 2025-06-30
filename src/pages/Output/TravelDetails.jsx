import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getImage } from '../../container/PlacesImage';


const TravelDetails = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [itinerary, setItinerary] = useState(null);

  

  useEffect(() => {
    if (location.state?.data?.itinerary) {
      setItinerary(location.state.data.itinerary);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [location.state]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-opacity-50"></div>
      </div>
    );
  }

  if (!itinerary) {
    return (
      <div className="h-screen flex items-center justify-center text-red-500 text-xl font-semibold">
        No travel data found. Please go back and search again.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto bg-gradient-to-br from-white via-blue-50 to-blue-100 min-h-screen">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-blue-900 drop-shadow-lg">
        Travel Itinerary for {itinerary.venue}
      </h2>
      <p className="text-center text-gray-700 mb-2 text-md">🕒 Duration: <strong>{itinerary.day_count}</strong></p>
      <p className="text-center text-gray-700 mb-6 text-md">👥 Guests: <strong>{itinerary.total_people}</strong></p>

      {itinerary.days.map((day, index) => (
        <div
          key={index}
          className="mb-10 p-6 bg-white/60 rounded-3xl shadow-[0_8px_20px_rgba(0,0,0,0.1)] backdrop-blur-sm transition transform hover:scale-[1.01]"
        >
          <h3 className="text-2xl font-bold text-blue-800 mb-5 shadow-inner py-1 px-2 bg-blue-50 rounded-lg inline-block">{day.day}</h3>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {day.places.map((place, i) => (
              <li
                key={i}
                className="rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 p-4 flex gap-4 items-start"
              >
                <div className="w-36 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200 border">
                  <img
                    src={getImage(place.name)}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-gray-800 mb-1">{place.name}</h4>
                  <p className="text-sm text-gray-600"><strong>🕑 Visit Duration:</strong> {place.time}</p>
                  <p className="text-sm text-gray-600"><strong>⏰ Open:</strong> {place.open_time} - {place.close_time}</p>
                  <p className="text-sm text-gray-600"><strong>📍 Type:</strong> {place.type}</p>
                  <p className="text-sm text-gray-600"><strong>🎟️ Ticket:</strong> {place.ticket_cost}</p>
                  <p className="text-sm text-gray-500 mt-1 italic">{place.description}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 p-4 rounded-xl bg-blue-50 shadow-inner">
            <p className="text-sm text-gray-700"><strong>🍽️ Food Suggestion:</strong> {day.food}</p>
            <p className="text-sm text-gray-700"><strong>💰 Approx. Cost:</strong> {day.approx_cost}</p>
          </div>
        </div>
      ))}

      <div className="text-center mt-10 p-5 bg-gradient-to-r from-green-100 to-green-200 shadow-inner rounded-2xl">
        <p className="text-2xl font-semibold text-green-800">
          💸 Total Estimated Cost: {itinerary.total_estimated_cost}
        </p>
      </div>
    </div>
  );
};

export default TravelDetails;
