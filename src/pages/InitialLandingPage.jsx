import React from "react";
import hero from "../assets/Images/Hero.png";
import Loader from "../components/Loader";
import useLoading from "../hooks/useLoading";
import LandingPage from "./LandingPage";
import { useEffect } from "react";
import AOS from "aos";

const InitialLandingPage = () => {
  // Custom hook for managing initial loading state with a 2-second delay
  const isLoading = useLoading(2000);

  // Initialize AOS animation library on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  // Show the loader while isLoading is true
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <div className=" lg:h-screen">
        <div
          style={{
            backgroundImage: `url(${hero})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
          data-aos="fade-up"
          
        >
          <div className="mx-auto container grid items-center grid-cols-2">
            <div className="mt-40">
              <h4
                className="text-white oswald-bold text-4xl sm:text-5xl md:text-6xl my-2"
                data-aos="flip-right"
              >
                LOS ANGELES’ PREMIER
              </h4>
              <h4
                className="text-customRed oswald-bold text-4xl sm:text-5xl md:text-6xl"
                data-aos="flip-right"
              >
                MOBILE FITNESS AND{" "}
              </h4>
              <h4
                className="text-customRed oswald-bold text-4xl sm:text-5xl md:text-6xl my-2"
                data-aos="flip-right"
              >
                HEALTH PROFESSIONALS
              </h4>
              <p
                className="text-white open-sans-regular sm:text-lg md:text-md my-10 "
                data-aos="flip-right"
              >
                Level up your fitness and health journey with XLEVELs onsite
                personalized training, fitness technology, and dietitian
                services.
              </p>

              <div className="my-10">
                <span className="oswald-bold text-customRed border p-2 px-6 rounded-md border-customRed text-xl cursor-pointer">
                  GET THE APP
                </span>
              </div>

              <div
                className="grid sm:grid-cols-1 lg:grid-cols-3 text-center"
                data-aos="zoom-in"
              >
                <div>
                  <span className="oswald-bold text-customRed text-3xl">
                    05+
                  </span>
                  <p className="text-white open-sans-regular text-sm">
                    Years of Experience
                  </p>
                </div>
                <div>
                  <span className="oswald-bold text-customRed text-3xl">
                    1000+
                  </span>
                  <p className="text-white open-sans-regular text-sm">
                    Members Join
                  </p>
                </div>
                <div>
                  <span className="oswald-bold text-customRed text-3xl">
                    2000+
                  </span>
                  <p className="text-white open-sans-regular text-sm">
                    Happy Members
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LandingPage />
    </>
  );
};

export default InitialLandingPage;
