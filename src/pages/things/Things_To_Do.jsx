import React from 'react';

const thingsData = [
  {
    location: "Patna",
    things: [
      "Visit Bihar Museum and Patna Museum",
      "Boat ride at Gandhi Ghat",
      "Relax at Eco Park",
      "Explore Golghar and Sabhyata Dwar"
    ]
  },
  {
    location: "Rajgir",
    things: [
      "Take the Ropeway to Vishwa Shanti Stupa",
      "Visit Hot Springs",
      "Go for Nature Safari",
      "Explore Glass Bridge"
    ]
  },
  {
    location: "Bodh Gaya",
    things: [
      "Meditate under the Bodhi Tree",
      "Visit Mahabodhi Temple",
      "Explore Buddhist monasteries",
      "Walk around Bodhi Path"
    ]
  },
  {
    location: "Gaya Jee",
    things: [
      "Perform rituals at Vishnupad Temple",
      "Visit Mangla Gauri Temple",
      "Take a walk near Falgu River"
    ]
  },
  {
    location: "Nalanda",
    things: [
      "Visit International Nalanda University ruins",
      "Explore Nalanda Museum",
      "Visit Xuanzang Memorial Hall"
    ]
  },
  {
    location: " Rohtas Waterfall",
    things: [
      "Trek to Rohtas Waterfall through scenic hills",
      "Photography of lush green surroundings",
      "Enjoy a peaceful picnic near the waterfall",
      "Explore nearby Rohtasgarh Fort ruins"
    ]
  },
  {
    location: "Sitamarhi (Birthplace of Goddess Sita)",
    things: [
      "Visit Janki Temple dedicated to Goddess Sita",
      "Explore Haleshwar Sthan (ancient Shiva temple)",
      "Attend Sita Navami celebrations (if visiting during the festival)",
      "Discover local Mithila art and culture"
    ]
  },
  {
    location: "Kakolat Waterfall",
    things: [
      "Enjoy a refreshing dip in the natural pool under the falls",
      "Capture scenic beauty and waterfall spray photography",
      "Go for short forest trail walks nearby",
      "Have a relaxing picnic with family/friends"
    ]
  },
  {
    location: "Vaishali",
    things: [
      "Explore Ashokan Pillar and Buddha Stupa",
      "Visit World Peace Pagoda",
      "Visit Bawan Pokhar Temple"
    ]
  },
  {
    location: "Rohtas",
    things: [
      "Explore Rohtasgarh Fort",
      "Hike to Rohtas Waterfall",
      "Enjoy nature photography"
    ]
  },
  {
    location: "Valmiki Nagar",
    things: [
      "Enjoy jungle safari in Valmiki Tiger Reserve",
      "Visit Gandak Barrage",
      "Explore the scenic Indo-Nepal border forest areas"
    ]
  },
  {
  location: "Rohtasgarh Fort",
  things: [
    "Trek to the top of Rohtasgarh Fort through forested trails",
    "Explore ancient structures such as Hathiya Pol and the ruins inside the fort",
    "Enjoy scenic views from the top of the fort overlooking the Kaimur Hills",
    "Visit nearby waterfalls like Dhua Kund and Rohtas Falls",
    "Capture photographs of heritage architecture and landscapes"
  ]
}

];

const ThingsToDo = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">Things To Do in Bihar</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {thingsData.map((place, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">{place.location}</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {place.things.map((thing, i) => (
                <li key={i}>{thing}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThingsToDo;
