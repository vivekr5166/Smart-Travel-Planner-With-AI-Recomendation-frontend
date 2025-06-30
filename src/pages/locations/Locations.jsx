import React from 'react';
import patnaImg from '../../assets/images/patna_img.jpg'; 
import bodhGayaImg from '../../assets/images/bodhgaya-img.avif';
import rajgirImg from '../../assets/images/rajgir-img.webp';
import nalandaImg from '../../assets/images/Nalanda.avif';
import sitamarhiImg from '../../assets/images/Sitamarhi.jpg';
import valmikiNagarImg from '../../assets/images/Valmiki_Nagar.webp';
import  rohtasWaterfallImg from '../../assets/images/Rohtas_Water_Fall.jpg';
import kakolatImg from '../../assets/images/Kakolat_Water_Falls.webp';
import gayaImg from '../../assets/images/Vishnupad_Temple.webp';
import pawapuriImg from '../../assets/images/Rajgir_Pawapuri_Jal_Mandir_Main.jpg';
import vaishaliImg from '../../assets/images/Vaishali.jpg';
import vikramshilaImg from '../../assets/images/Vikramshila.webp';
import manerImg from '../../assets/images/Maner_Sharif.jpg';
import madhubaniImg from '../../assets/images/Madhubani.jpg';
import rohtasImg from '../../assets/images/Rohtasgarh_Fort.jpg';


const places = [
  {
  name: "Patna",
  image: patnaImg,
  description: "The vibrant capital city of Bihar, known for its rich historical heritage including the iconic Golghar, Gandhi Maidan, and Patna Museum. A cultural hub blending ancient legacy with modern growth.",
},
{
  name: "Bodh Gaya",
  image: bodhGayaImg,
  description: "One of the holiest Buddhist pilgrimage sites in the world, where Lord Buddha attained enlightenment under the Bodhi Tree. The Mahabodhi Temple here is a UNESCO World Heritage Site.",
},
{
  name: "Rajgir",
  image: rajgirImg,
  description: "An ancient city surrounded by hills and valleys, known for its scenic ropeway ride to the Peace Pagoda, natural hot springs, Venuvana garden, and deep Buddhist and Jain heritage.",
},
{
  name: "Nalanda",
  image: nalandaImg,
  description: "Home to the remains of the legendary Nalanda University, one of the world’s oldest and most prestigious ancient universities. It once attracted scholars from as far as China, Tibet, Korea, and Central Asia.",
},
{
  name: "Sitamarhi",
  image: sitamarhiImg,
  description: "Sitamarhi is believed to be the birthplace of Goddess Sita, making it a sacred place for Hindus. The town is home to the ancient Janki Mandir and is steeped in Ramayana legends, attracting pilgrims and mythological enthusiasts alike.",
},
{
  name: "Valmiki Nagar",
  image: valmikiNagarImg,
  description: "A scenic town in West Champaran, Bihar, known for the Valmiki Tiger Reserve. It offers rich wildlife, lush forests, the Gandak River, and tranquil views along the Indo-Nepal border."
},
{
  name: "Rohtas Waterfall",
  image: rohtasWaterfallImg, 
  description: "Rohtas Waterfall, located in the hilly terrains of Rohtas district in Bihar, is a hidden gem for nature lovers and adventure seekers. Surrounded by dense forests and rocky cliffs, the waterfall offers a scenic escape from city life. It is a perfect spot for trekking, photography, and spending time in serene surroundings. The area around the falls is also rich in historical significance due to its proximity to the ancient Rohtas Fort, making it an ideal mix of nature and heritage tourism."
},
{
  name: "Kakolat Falls",
  image: kakolatImg,
  description: "Located near Nawada, Kakolat is one of Bihar's most scenic waterfalls. Surrounded by forested hills, the waterfall drops into a natural pool and is a popular spot for picnics, nature lovers, and summer tourists seeking a refreshing retreat.",
},
{
  name: "Gaya Jee",
  image: gayaImg,
  description: "A sacred Hindu city nestled along the Falgu River, known for the Vishnupad Temple and the ritual of Pind Daan, performed by devotees for the salvation of their ancestors' souls.",
},
{
  name: "Pawapuri",
  image: pawapuriImg,
  description: "A holy pilgrimage destination for Jains, where Lord Mahavira, the 24th Tirthankara, was cremated. The beautiful Jal Mandir sits in the center of a lotus pond, symbolizing peace and purity.",
},
{
  name: "Vaishali",
  image: vaishaliImg,
  description: "An ancient city of immense historical significance, believed to be the birthplace of Lord Mahavira and an important site in Lord Buddha’s journey. It was one of the earliest republics in the world.",
},
{
  name: "Vikramshila",
  image: vikramshilaImg,
  description: "A lesser-known but equally important ancient Buddhist university, known for its structured layout, majestic stupas, and rich scholarly past. It served as a major center of learning in medieval India.",
},
{
  name: "Maner Sharif",
  image: manerImg,
  description: "A spiritual retreat known for the grand mausoleum of Sufi saint Hazrat Makhdoom Yahya Maneri. Located near Patna, it is also famous for the delicious ‘Maner ke Ladoo’, a local sweet delicacy.",
},
{
  name: "Madhubani",
  image: madhubaniImg,
  description: "Globally renowned for its unique and intricate Mithila art, this town is a celebration of folk traditions, vibrant colors, and deep-rooted cultural artistry passed down through generations.",
},
{
  name: "Rohtasgarh Fort",
  image: rohtasImg,
  description: "Perched atop the Kaimur Hills, Rohtasgarh Fort is a historic marvel spread across 4 km². Built in the medieval period, the fort boasts massive stone gates, ancient temples, and royal ruins, offering a glimpse into Bihar’s warrior past.",
},

];

const Locations = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto mt-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">Top Locations in Bihar</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {places.map((place, idx) => (
          <div key={idx} className="bg-white cursor-pointer rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-blue-700">{place.name}</h3>
              <p className="text-sm text-gray-600 mt-2">{place.description}</p>
            </div>
          </div>
        ))}
      </div> 
    </div>
  );
};

export default Locations;
