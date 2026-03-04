import React from 'react';
import Footer from '../footer/footer';
import Navbar from '../home/Navbar';

const SpeakersSection = () => {
  return (
    <div>
    <Navbar />
      <header
        className="text-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-60 relative"
        style={{ backgroundImage: "url('/images/iit-ropar-5.avif')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="bg-black bg-opacity-50 py-20 px-4">
          <h1 className="text-5xl font-extrabold">Venue and Travel</h1>
          <br/>
          <h2 className="text-3xl font-light">Coming Soon!</h2>
          <p className="text-xl mt-4 font-light"></p>
        </div>
      </header>
      <Footer/>
   </div>
  )
};
export default SpeakersSection;