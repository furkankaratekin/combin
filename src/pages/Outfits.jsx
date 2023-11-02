import React from "react";
import Navbar from "../components/Navbar";
import OutfitCategory from "../components/OutfitCategory/OutfitCategory";
import OutfitList from "../components/OutfitList";
import Footer from "../components/Footer";

const Outfits = () => {
  return (
    <div>
      <Navbar/>
      <OutfitCategory/>
      <OutfitList/>
      <Footer />
    </div>
  )
}

export default Outfits
