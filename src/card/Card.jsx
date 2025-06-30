import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import photo1 from "../../src/assets/images/patna_img.jpg"
import photo2 from "../../src/assets/images/bodhgaya-img.avif"
import photo3 from "../../src/assets/images/rajgir-img.webp"
import photo4 from "../../src/assets/images/Himachal-Pradesh.jpg"
import photo5 from "../../src/assets/images/india_gate_delhi.jpg"
import photo6 from "../../src/assets/images/Uttar_Pradesh.jpg"

const Card = () => {
  const navigate = useNavigate();

  const staticCities = [
    { id: 1, place: "Patna", image: photo1},
    { id: 2, place: "BodhGaya", image: photo2 },
    { id: 3, place: "Rajgir", image:photo3},
    { id: 4, place: "HimachalPradesh", image: photo4},
    { id: 5, place: "Delhi", image: photo5},
    { id: 6, place: "UttraPradesh", image: photo6 },
  ];

  const [loadingCityId, setLoadingCityId] = useState(null); 

  const fetchCityItinerary = async (cityName, cityId) => {
    setLoadingCityId(cityId); 
    try {
      const res = await axios.post('http://localhost:3000/travel/plan-trip', {
        venue: cityName,
        day: `2 days`,
        total_people: 2
      });

      navigate('/traveldetail', {
        state: { data: res.data }
      });
    } catch (err) {
      console.error("API Error:", err.message);
      alert("Failed to fetch itinerary.");
    } finally {
      setLoadingCityId(null);
    }
  };

  return (
    <div className='mt-10 px-6 pb-20'>
      <h1 className='font-semibold text-4xl sm:text-5xl mb-6 text-center'>
        Explore Beautiful Places Now
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12'>
        {staticCities.map((item) => (
          <div
            key={item.id}
            onClick={() => fetchCityItinerary(item.place, item.id)}
            className='cursor-pointer relative hover:scale-105 transition-transform duration-300'
          >
            <img
              src={item.image}
              alt={item.place}
              className='h-64 w-full object-cover rounded-2xl shadow-lg'
            />

           
            {loadingCityId === item.id && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl">
                <div className="h-10 w-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <h2 className='font-semibold text-2xl mt-3 text-center'>
              {item.place}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
