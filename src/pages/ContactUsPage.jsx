import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-[#121212] text-white py-10">
      <div className="container mx-auto px-4">
      <div className="text-center py-5">
          <span className="oswald-bold text-white text-5xl">CONTACT</span>{" "}
          <span className="oswald-bold text-customRed text-5xl px-2">US</span>
          <p className="text-white open-sans-regular text-sm my-5">
          We're here to help! Fill out the form below or reach us directly at our contact details.
          </p>
        </div>
       
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl oswald-bold mb-4">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm mb-1 open-sans-regular" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-customRed"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1 open-sans-regular" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-customRed"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm mb-1 open-sans-regular" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-2 bg-gray-700 rounded focus:outline-none focus:ring focus:ring-customRed"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-customRed text-white p-2 rounded hover:bg-red-600 transition duration-300 oswald-bold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Gym Information */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 oswald-bold">Our Location</h2>
            <p className="mb-2 open-sans-regular">123 Fitness Street, Kannur, Kerala</p>
            <p className="mb-2 open-sans-regular">Phone: +91 123 456 7890</p>
            <p className="mb-2 open-sans-regular">Email: info@xlevelgym.com</p>
            <h3 className="text-xl oswald-bold mt-4">Business Hours</h3>
            <p className='open-sans-regular'>Monday - Friday: 6 AM - 10 PM</p>
            <p className='open-sans-regular'>Saturday - Sunday: 8 AM - 8 PM</p>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-10">
        <div className="text-center py-5">
          <span className="oswald-bold text-white text-5xl">FIND US</span>{" "}
          <span className="oswald-bold text-customRed text-5xl px-2">HERE</span>
          
        </div>

          {/* Embed Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.9443518170833!2d75.36723151529023!3d11.871840391066437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05c92a27f7d8d3%3A0x63f6db56d0621627!2sXLEVEL%20Gym!5e0!3m2!1sen!2sin!4v1632614829296!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
