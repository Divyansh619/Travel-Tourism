import React from "react";
import ButtonWithArrow from "./ButtonWithArrow";

const HotelBanner = ({selected}) => {
  return (
    <section 
 
    className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
      <div className="absolute inset-0">
      <img className=" w-full h-full  " src="/hotelbanner.jpg" alt="bannertwo" />
      </div>

      <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

      <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Find the right hotel today
          </h2>
          <p className="mt-4 text-base text-gray-200">
          "Find the perfect hotel for your next adventure today! Our user-friendly platform makes it easy to search and book accommodations that match your preferences and budget. Explore a world of options and secure your ideal stay with confidence."
          </p>

          <form action="#" method="POST" className="mt-8 lg:mt-12">
            <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
              <div className="relative text-gray-400 focus-within:text-gray-600">
                <div className="flex">
                  <div className="w-1/4">
                    <label htmlFor="from" className="text-white">
                    Where do you want to stay?
                    </label>
                    <input
                      type="text"
                      name="from"
                      id="from"
                      placeholder="Enter destination or hotel name"
                      className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200  border-r-4 border-l-4 border-blue-500 caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div className="w-1/4">
                    <label htmlFor="destination" className="text-white">
                    Check-in
                    </label>
                    <input
                     type="date"
                      name="destination"
                      id="destination"
                      placeholder="Check-in"
                      className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 border-r-4 border-blue-500 caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div className="w-1/4">
                    <label htmlFor="depart" className="text-white">
                    Check-out
                    </label>
                    <input
                      type="date"
                      name="depart"
                      id="depart"
                      className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 border-r-4 border-blue-500 caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div className="w-1/4">
                    <label htmlFor="return" className="text-white">
                    Guests and rooms
                    </label>
                    <input
                    //   type="date"
                      name="return"
                      id="return"
                      placeholder="Guests and rooms"
                      className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 border-r-4 border-blue-500 caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      required
                    />
                  </div>
                </div>
              
                <div className="my-3">
                  <ButtonWithArrow text={"Search Hotels"} />{" "}
                </div>
                <div className="my-3 flex items-center gap-x-4">
              <p className="text-white items-center font-semibold mb-2">Popular filters:</p>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="filter"
                //   value="freeCancellation"
                //   onChange={() => handleFilterSelection("freeCancellation")}
                //   checked={selectedFilter === "freeCancellation"}
                  className="text-blue-500 form-radio focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-white">Free Cancellation</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="filter"
                //   value="fourStars"
                //   onChange={() => handleFilterSelection("fourStars")}
                //   checked={selectedFilter === "fourStars"}
                  className="text-blue-500 form-radio focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-white">4 Stars</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="filter"
                //   value="threeStars"
                //   onChange={() => handleFilterSelection("threeStars")}
                //   checked={selectedFilter === "threeStars"}
                  className="text-blue-500 form-radio focus:ring-2 focus:ring-blue-500"
                />
                <span className="text-white">3 Stars</span>
              </label>
              {/* Add more filters as needed */}
            </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HotelBanner;
