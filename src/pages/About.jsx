import React from 'react';
import trainerImage from '../assets/Images/trainer7.jpg';

const AboutUs = () => {
  return (
    <div className="bg-[#121212] text-white py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <p className="text-center mb-4">
          At XLEVEL Gym, we are dedicated to transforming lives through fitness, health, and wellness.
          Our community is built on support, motivation, and a shared passion for achieving personal goals.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
          {/* Mission and Values Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-4">
              Our mission is to empower individuals to reach their fitness goals by providing a supportive and
              motivating environment. We believe that fitness is not just a destination but a lifelong journey.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc list-inside">
              <li>Inclusivity: Everyone is welcome, regardless of their fitness level.</li>
              <li>Community: We foster a strong sense of community among our members.</li>
              <li>Integrity: We believe in honesty and transparency in all our interactions.</li>
              <li>Excellence: We strive for excellence in our facilities and services.</li>
            </ul>
          </div>

          {/* Team Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
            <div className="flex items-center mb-4">
              <img
                src={trainerImage}
                alt="Trainer"
                className="w-24 h-24 rounded-full border-2 border-customRed mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">Marco Louiz </h3>
                <p>Lead Trainer & Fitness Coach</p>
              </div>
            </div>
            <p>
              Our trainers are certified professionals with years of experience in helping individuals achieve
              their fitness goals. They are passionate about fitness and are here to support you every step of the way.
            </p>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4">Our Facilities</h2>
          <p className="text-center mb-4">
            We offer a wide range of state-of-the-art facilities to cater to all your fitness needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2">Weight Training Area</h3>
              <p>Fully equipped with the latest weight training equipment for all strength levels.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2">Cardio Zone</h3>
              <p>Featuring treadmills, ellipticals, and stationary bikes for a heart-pumping workout.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2">Group Classes</h3>
              <p>Join our dynamic classes ranging from yoga to high-intensity interval training.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2">Nutrition Counseling</h3>
              <p>Receive personalized nutrition plans from our certified nutritionists.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2">Relaxation Area</h3>
              <p>Unwind and recover in our comfortable lounge and relaxation spaces.</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-bold mb-2">Locker Rooms</h3>
              <p>Clean and secure locker rooms with showers for your convenience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
