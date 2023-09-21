import React from "react";
import ButtonWithArrow from "./ButtonWithArrow";

const Banner = () => {
  return (
    <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
      <div className="absolute inset-0">
        <img className=" w-full h-full  " src="/flightbanner.jpg" alt="banner" />
      </div>

      <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

      <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Millions of cheap flights. One simple search.
          </h2>
          <p className="mt-4 text-base text-gray-200">
          Discover millions of affordable flights with just one effortless search
          </p>

          <form action="#" method="POST" className="mt-8 lg:mt-12">
            <div className="flex-1 w-full min-w-0 px-4 sm:px-0">
              <div className="relative text-gray-400 focus-within:text-gray-600">
                <div className="flex">
                  <div className="w-1/4">
                    <label htmlFor="from" className="text-white">
                      From
                    </label>
                    <input
                      type="text"
                      name="from"
                      id="from"
                      placeholder="Country, city or airport"
                      className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200  border-r-4 border-l-4 border-blue-500 caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div className="w-1/4">
                    <label htmlFor="destination" className="text-white">
                      Destination
                    </label>
                    <input
                      type="text"
                      name="destination"
                      id="destination"
                      placeholder="Country, city or airport"
                      className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 border-r-4 border-blue-500 caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      required
                    />
                  </div>
                  <div className="w-1/4">
                    <label htmlFor="depart" className="text-white">
                      Depart
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
                      Return
                    </label>
                    <input
                      type="date"
                      name="return"
                      id="return"
                      placeholder="Enter email address"
                      className="block w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 border-r-4 border-blue-500 caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      required
                    />
                  </div>
                </div>
                <div className="my-2">
                  <label htmlFor="cabin" className="text-white">
                    Cabin Class & Travellers
                  </label>
                  <input
                    type="text"
                    name="cabin"
                    id="cabin"
                    placeholder="Cabin class & travellers"
                    className="border-l-4 w-full py-4 pl-10 pr-4 text-base text-black placeholder-gray-500 transition-all duration-200 border-gray-200 border-r-4 border-blue-500 caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    required
                  />
                </div>
                <div className="my-3">
                  <ButtonWithArrow text={"Search Flights"} />{" "}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Banner;
