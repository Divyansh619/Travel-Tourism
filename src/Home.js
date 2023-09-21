import React, { useState } from "react";
import Navbar from "./component/Navbar";
import ButtonsWithIcons from "./component/ButtonsWithIcons";
import Banner from "./component/Banner";
import HotelBanner from "./component/HotelBanner";

const Home = () => {
  const [selectBanner, setSelectBanner] = useState("Flight");

  return (
    <div>
      <Navbar />

      <div className="flex gap-x-2 px-4 sm:px-6 lg:px-8">
        <ButtonsWithIcons
          text={"Flight"}
          icon={"/flight.png"}
          onClick={() => setSelectBanner("Flight")}
        />
        <ButtonsWithIcons
          text={"Hotels"}
          icon={"/hotel.png"}
          onClick={() => setSelectBanner("Hotels")}
        />
      </div>
      <div className="px-4 mx-auto sm:px-6 lg:px-8">
        {selectBanner === "Flight" ? <Banner /> : <HotelBanner />}
      </div>
    </div>
  );
};

export default Home;
