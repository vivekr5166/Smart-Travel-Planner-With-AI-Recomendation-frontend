import React, { useState } from 'react';
import axios from '../../components/axios';
import { useNavigate } from 'react-router-dom';

const Video = () => {
  const [formData, setFormData] = useState({
    venue: '',
    day: '',
    total_people: ''
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSearch = async () => {
    const payload = {
      venue: formData.venue,
      day: `${formData.day} days`,
      total_people: parseInt(formData.total_people)
    };

    try {
      setLoading(true);
      const response = await axios.post('/travel/plan-trip', payload);
      navigate('/traveldetail', { state: { data: response.data } });
    } catch (error) {
      console.error('API Error:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-[200px] relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        className="pointer-events-none absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/India-360-v2.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 mt-20 flex justify-center px-4">
        <div className="relative bg-white bg-opacity-100 backdrop-blur-md p-3 rounded-xl shadow-lg flex flex-col md:flex-row gap-5 w-207 max-w-4xl">

          {loading && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center rounded-xl z-10">
              <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
          )}

          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            placeholder="Enter Destination"
            className="w-full md:w-auto px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="number"
            name="day"
            value={formData.day}
            onChange={handleChange}
            placeholder="Trip Duration (Days)"
            className="w-full md:w-auto px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-500"
          />
          <input
            type="number"
            name="total_people"
            value={formData.total_people}
            onChange={handleChange}
            placeholder="Guests"
            className="w-full md:w-auto px-4 py-2 rounded-md border focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md border border-blue-500 hover:bg-green-700 transition"
          >
            Search
          </button>
        </div>
      </div>

      <div className="h-85" />
    </div>
  );
};

export default Video;
