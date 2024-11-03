import React from "react";
import hero from "../assets/Images/Hero.png";
import mobileImage from "../assets/Images/iPhone 13 Pro.png";

const LandingPage = () => {

    const cardData = [
        {
            id: 1,
            title: 'MOBILE TEAM',
            description: 'We bring our trainers, workout technology and equipment to you, making every workout private, customized and convenient.',
        },
        {
            id: 2,
            title: 'PERSONAL TRAINING',
            description: 'Our trainers provide one-on-one sessions tailored to your individual fitness goals.',
        },
        {
            id: 3,
            title: 'GROUP CLASSES',
            description: 'Join our community in fun and engaging group classes for all fitness levels.',
        },
        {
            id: 4,
            title: 'NUTRITION PLANS',
            description: 'Get personalized nutrition plans from our certified nutritionists to complement your fitness journey.',
        },
    ];
  return (
    <>
      <div className="h-screen">
        <div
          style={{
            backgroundImage: `url(${hero})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <div className="mx-auto container grid items-center grid-cols-2">
            <div className="mt-40">
              <h4 className="text-white oswald-bold text-4xl sm:text-5xl md:text-6xl my-2">
                LOS ANGELES’ PREMIER
              </h4>
              <h4 className="text-customRed oswald-bold text-4xl sm:text-5xl md:text-6xl">
                MOBILE FITNESS AND{" "}
              </h4>
              <h4 className="text-customRed oswald-bold text-4xl sm:text-5xl md:text-6xl my-2">
                HEALTH PROFESSIONALS
              </h4>
              <p className="text-white open-sans-regular sm:text-lg md:text-md my-10 ">
                Level up your fitness and health journey with XLEVELs onsite
                personalized training, fitness technology, and dietitian
                services.
              </p>

              <div className="my-10">
                <span className="oswald-bold text-customRed border p-2 px-6 rounded-md border-customRed text-xl cursor-pointer">
                  GET THE APP
                </span>
              </div>

              <div className="grid grid-cols-3 text-center">
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

      {/* why choose us section */}

      <div className="bg-[#121212] ">
        <div className="text-center py-5">
          <span className="oswald-bold text-white text-5xl">WHY</span>{" "}
          <span className="oswald-bold text-customRed text-5xl">CHOOSE US</span>
          <p className="text-white open-sans-regular text-sm my-5">
            Gym workouts offer a versatile and customisable experience, allowing
            everyone to set specific fitness goals.
          </p>
        </div>

      <div className="grid grid-cols-2 container mx-auto gap-10">
    {cardData?.map((data)=>(
          <div className="border border-customRed rounded-md " key={data?.id}>
          <div className="m-5">
            <span className="oswald-bold text-white text-xl">0{data?.id}</span>
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

      <div className="bg-[#121212] ">
      <div className="text-center py-20 ">
          <span className="oswald-bold text-white text-5xl">MOBILE APP</span>{" "}
          <p className="oswald-bold text-customRed text-5xl my-3">FOR WORKOUT</p>
        
        </div>

        <div className="grod grid-cols-2 container mx-auto gap-10">
            <div><img src={mobileImage} alt="mobileImage" /></div>
            <div></div>
        </div>
        
      </div>
    </>
  );
};

export default LandingPage;
