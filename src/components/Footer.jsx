import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="bg-[#0D0D0E] text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Navigation Links */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <button onClick={() => navigate('/about')} className="hover:underline focus:outline-none">
                                    About Us
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/services')} className="hover:underline focus:outline-none">
                                    Services
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/classes')} className="hover:underline focus:outline-none">
                                    Classes
                                </button>
                            </li>
                            <li>
                                <button onClick={() => navigate('/contact')} className="hover:underline focus:outline-none">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        <p>123 Gym Street</p>
                        <p>City, State, ZIP</p>
                        <p>Email: info@gymwebsite.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>

                    {/* Newsletter Subscription */}
                    <div>
                        <h2 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h2>
                        <p>Get the latest updates and offers!</p>
                        <form className="flex flex-col space-y-2 mt-2">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="p-2 rounded-md border border-gray-600"
                                required
                            />
                            <button type="submit" className="bg-customRed text-white p-2 rounded-md hover:bg-red-600">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center mt-10 space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
                    </a>
                </div>
            </div>

            <div className="text-center mt-8 border-t border-gray-700 pt-4">
                <p>&copy; 2024 Gym Website. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
