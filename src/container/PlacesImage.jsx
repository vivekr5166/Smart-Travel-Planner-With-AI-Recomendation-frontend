import React from 'react'
import img1 from "../../src/assets/images/Agam_Kuan.jpg";
import img2 from "../../src/assets/images/Archaeological_Museum.jpg";
import img3 from "../../src/assets/images/Golghar_patna.jpg";
import img4 from "../../src/assets/images/Glass_Bridge_Rajgir.jpg";
import img5 from "../../src/assets/images/Thai_Monastry.webp";
import img6 from "../../src/assets/images/Mahavir_Mandir_Patna.jpg";
import img7 from "../../src/assets/images/Mahabodhi_Temple_Bodhgaya.webp";
import img8 from "../../src/assets/images/Patna_Museum.jpg";
import img9 from "../../src/assets/images/Bihar_Museum.jpg";
import img10 from "../../src/assets/images/Bodhi_Tree.jpg";
import img11 from "../../src/assets/images/Eco_Park.jpg";
import img12 from "../../src/assets/images/Gandhi_Ghat.png";
import img13 from "../../src/assets/images/Gaya_ji_Dam.avif";
import img14 from "../../src/assets/images/Giant_Budhha_Statue.jpg";
import img15 from "../../src/assets/images/Iskcon_Temple_Patna.jpg";
import img16 from "../../src/assets/images/International Meditation Center.avif";
import img17 from "../../src/assets/images/Buddha_Smriti_Park.jpg";
import img18 from "../../src/assets/images/Nalanda_University_Ruins.jpg";
import img19 from "../../src/assets/images/Vishnupad_Temple.webp";
import img20 from "../../src/assets/images/Patna_Zoo.jpg";
import img21 from "../../src/assets/images/Gandhi_Maidan.jpg";
import img22 from "../../src/assets/images/Kumhrar_Park.jpg";
import img23 from "../../src/assets/images/Khuda_Bakhsh_Oriental_Library.jpg";
import img24 from "../../src/assets/images/Griddhakuta.jpg";
import img25 from "../../src/assets/images/gandhisetu.jpg";
import img26 from "../../src/assets/images/Hot_Springs_(Brahmakund).jpg";
import img27 from "../../src/assets/images/india_gate_delhi.jpg";
import img28 from "../../src/assets/images/Japanese_Temple.webp";
import img29 from "../../src/assets/images/Jarasand_kaAkhara.jpeg";
import img30 from "../../src/assets/images/Nature_Safari_Rajgir.jpg";
import img31 from "../../src/assets/images/Nit_Ghat_Patna.jpg";
import img32 from "../../src/assets/images/Pandu_Pokhar.jpg";
import img33 from "../../src/assets/images/Padri_Ki_Haveli.jpg";
import img34 from "../../src/assets/images/Rajgir_Pawapuri_Jal_Mandir_Main.jpg";
import img35 from "../../src/assets/images/Qila House.webp";
import img36 from "../../src/assets/images/Sabhyata_Dwar.jpg";
import img37 from "../../src/assets/images/Sujata_Garh.jpg";
import img38 from "../../src/assets/images/Srikrishna_Science_Centre.jpg";
import img39 from "../../src/assets/images/sher_shah_masjid.jpg";
import img40 from "../../src/assets/images/Rajgir_Ropeway.jpg";
import img41 from "../../src/assets/images/Root Institute.jpg";
import img42 from "../../src/assets/images/Patna_Sahib.jpg";
import img43 from "../../src/assets/images/Tibetan_Monastery.jpg";
import img44 from "../../src/assets/images/Venuvana.jpg";
import img45 from "../../src/assets/images/Vishnupad_Temple.webp";
import img46 from "../../src/assets/images/Vishwa_Shanti_Stupa.jpg";
import img47 from "../../src/assets/images/Rajgir_Pawapuri_Jal_Mandir_Main.jpg";
import img48 from "../../src/assets/images/Hiuen_Tsang_Memorial_Hall.jpg";
import img49 from "../../src/assets/images/Shopping_at_Maurya_Lok.jpg";
import img50 from "../../src/assets/images/Archaeological_Museum_Nalanda.jpg";
// import img51 from "../../assets/images/Mangla_Gauri_Temple.jpg";
// import img52 from "../../assets/images/Muchalinda_Lake.jpg";
import img53 from "../../assets/images/Animesh_Lochan_Chaitya.jpg";
// import img54 from "../../assets/images/Royal_Bhutan_Monastery.jpg";
// import img56 from "../../assets/images/Karma_Temple.jpeg";



export const getImage = (place) => {
    const images = {
     "Agam Kuan": img1,
      "Archaeological Museum": img2,
      "Golghar": img3,
      "Glass Bridge": img4,
      "Thai Monastery": img5,
      "Mahavir Mandir": img6,
      "Mahabodhi Temple": img7,
      "Patna Museum": img8,
      "Bihar Museum": img9,
      "Bodhi Tree":img10,
      "Eco Park": img11,
      "Gandhi Ghat":img12,
      "Gaua ji Dam":img13,
      "Great Buddha Statue": img14,
      "ISKCON Temple Patna":img15,
      "International Meditation Center":img16,
      "Buddha Smriti Park":img17,
      "Nalanda University Ruins":img18,
      "Vishnupad Mandir":img19,
      "Sanjay Gandhi Biological Park":img20,
      "Gandhi Maidan":img21,
      "Kumhrar":img22,
      "Khuda Bakhsh Oriental Library":img23,
      "Griddhakuta":img24,
      "Mahatma Gandhi Setu":img25,
      "Hot Springs":img26,
      "India Gate":img27,
      "Indosan Nippon Japanese Temple":img28,
      "Jarasand Akhara": img29,
      "Nature Safari":img30,
      "Nit Ghat":img31,
      "Pandu Pokhar":img32,
      "Padri Ki Haveli":img33,
      "Pawapuri Jal Mandir":img34,
      "Qila House":img35,
      "Sabhyata Dwar":img36,
      "Sujata Garh":img37,
      "Srikrishna Science Centre": img38,
      "Sher Shah Suri Masjid":img39,
      "Rajgir Ropeway":img40,
      "Root Institute":img41,
      "Takht Sri Patna Sahib":img42,
      "Tibetan Monastery": img43,
      "Venuvana":img44,
      "Vishnupad Temple": img45,
      "Vishwa Shanti Stupa": img46,
      "Pawapuri": img47,
      "Hiuen Tsang Memorial Hall": img48,
      "Shopping at Maurya Lok": img49,
      "Archaeological Museum, Nalanda": img50,
      // "Mangla Gauri Temple": img51,
      // "Muchalinda Lake": img52,
      "Animesh Lochan Chaitya": img53,
      // "Royal Bhutan Monastery": img54,
      // "Chinese Temple & Monastery": img55,
      // "Karma Temple": img56,
     
    };
    return images[place] || "/images/default.jpg";
  };

