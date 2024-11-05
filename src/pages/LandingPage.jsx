import React, { useState, useEffect } from "react";

import mobileImage from "../assets/Images/iPhone 13 Pro.png";
import Card from "../components/Card";
import {
  cardData,
  serviceCardData,
  features,
  pricingPlans,
  trainers,
  journeyPoints,
  responsive,
} from "../utils/hardCodedData";
import TrainerCard from "../components/TrainerCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import manWithDumbell from "../assets/Images/Image (4).png";
import AOS from "aos";

const LandingPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function for the animations
      once: false, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      {/* why choose us section */}

      <div className="bg-[#121212] ">
        <div className="text-center py-5" data-aos="fade-up">
          <span className="oswald-bold text-white text-5xl">WHY</span>{" "}
          <span className="oswald-bold text-customRed text-5xl ">
            CHOOSE US
          </span>
          <p className="text-white open-sans-regular text-sm my-5">
            Gym workouts offer a versatile and customisable experience, allowing
            everyone to set specific fitness goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  container mx-auto gap-10 ">
          {cardData?.map((data) => (
            <div
              className="border border-customRed rounded-md "
              key={data?.id}
              data-aos="fade-right"
            >
              <div className="m-5">
                <span className="oswald-bold text-white text-xl">
                  0{data?.id}
                </span>
                <h4 className="oswald-bold text-customRed text-xl my-3">
                  {data?.title}
                </h4>
                <p className="open-sans-regular text-white text-md my-3">
                  {data?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* mobile app for workout section */}

      <div className="bg-[#121212] overflow-x-hidden " style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE and Edge
        }}>
        <div className="text-center py-20 " data-aos="fade-up">
          <span className="oswald-bold text-white text-5xl">MOBILE APP</span>{" "}
          <p className="oswald-bold text-customRed text-5xl my-3">
            FOR WORKOUT
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  container mx-auto gap-10 px-10">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={mobileImage} alt="mobileImage" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            {features.map((feature, index) => (
              <div key={index} className="p-6 flex items-center">
                <span>🔴</span>{" "}
                <span className="text-xl text-white open-sans-regular ml-2">
                  {feature}
                </span>
              </div>
            ))}
            <div className="my-10 m-8">
              <span className="oswald-bold text-customRed border p-2 px-6 rounded-md border-customRed text-xl cursor-pointer">
                TRY NOW
              </span>
            </div>
          </div>
        </div>
        <div className="text-center py-5 pt-20" data-aos="fade-up">
          <span className="oswald-bold text-white text-5xl">OUR</span>{" "}
          <span className="oswald-bold text-customRed text-5xl ">SERVICES</span>
          <p className="text-white open-sans-regular text-sm my-5">
            Delivered By Highly Trained Fitness and Health Professionals
          </p>
        </div>
        <div
          className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 container mx-auto gap-10 px-10 "
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          {serviceCardData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              content={card.content}
              buttonText={card.buttonText}
              onButtonClick={() => alert(`${card.title} button clicked!`)}
            />
          ))}
        </div>
      </div>

      {/* trainers section */}
      <div className="  bg-[#121212] ">
        <div className="container mx-auto p-10">
          <div className="text-center py-5 pt-20" data-aos="fade-up">
            <span className="oswald-bold text-white text-5xl">
              OUR PROFESSIONAL
            </span>{" "}
            <span className="oswald-bold text-customRed text-5xl">
              TRAINERS
            </span>
            <p className="text-white open-sans-regular text-sm my-5">
              Delivered By Highly Trained Fitness and Health Professionals
            </p>
          </div>
          <Carousel responsive={responsive}>
            {trainers.map((trainer, index) => (
              <div key={index} data-aos="fade-down">
                <TrainerCard
                  image={trainer.image}
                  name={trainer.name}
                  role={trainer.role}
                  rating={trainer.rating}
                />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      {/* monthly paln amount section */}
      <div className="bg-[#121212] ">
        <div className="text-center py-5 pt-20" data-aos="fade-up">
          <h1 className="oswald-bold text-5xl">
            <span className="text-white">LEVEL UP </span>
            <span className="text-customRed">YOUR</span>
          </h1>
          <div className="lg:flex justify-center items-center">
            <h1 className="oswald-bold text-5xl text-white">JOURNEY WITH </h1>
            <h1 className="oswald-bold text-5xl text-customRed ml-2 ">
              X_LEVEL
            </h1>
          </div>
        </div>

        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Designed for business teams like yours
              </h2>
              <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
            </div>
            <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.title}
                  className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border-2  shadow dark:border-customRed xl:p-8 dark:bg-gray-800 dark:text-white "
                  data-aos="fade-down"
                >
                  <h3 className="mb-4 text-2xl  oswald-bold">{plan.title}</h3>
                  <p className="font-light text-gray-500 sm:text-md dark:text-gray-400 open-sans-regular ">
                    {plan.description}
                  </p>
                  <div className="flex justify-center items-baseline my-8">
                    <span className="mr-2 text-5xl font-extrabold oswald-bold">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 open-sans-regular">
                      /month
                    </span>
                  </div>
                  <ul className="mb-8 space-y-4 text-left open-sans-regular">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index + 1}
                        className="flex items-center space-x-3"
                      >
                        <svg
                          className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="text-white bg-[#090707] hover:bg-customRed focus:ring-4 focus:ring-primary-200 oswald-bold rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900"
                  >
                    Get started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* lets start gym section */}
      <div className="bg-[#121212] text-white py-10 overflow-x-hidden" 
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none', // IE and Edge
        }}
      >
        <div className="text-center pt-20 px-4" data-aos="fade-up">
          <h1 className="oswald-bold text-5xl mb-4">
            <span className="text-white">LET'S START </span>
            <span className="text-customRed">YOUR</span>
          </h1>
          <div className="flex flex-wrap justify-center items-center mb-6">
            <span className="oswald-bold text-5xl">JOURNEY WITH </span>
            <span className="oswald-bold text-5xl text-customRed ml-2">
              XLEVEL
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-20 px-4">
          <div
            className="flex justify-center items-center"
            data-aos="fade-down-right"
          >
            <img
              src={manWithDumbell}
              alt="man with dumbell"
              className="w-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col gap-8">
            {journeyPoints.map((point) => (
              <div
                key={point.id}
                className="bg-gray-800 p-4  rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                data-aos="fade-down-left"
              >
                <h3 className="oswald-bold text-xl text-customRed">
                  {point.title}
                </h3>
                <p className="text-gray-300 open-sans-regular">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
