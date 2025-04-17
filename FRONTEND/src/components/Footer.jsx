import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 px-4 mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Get<span className='text-[#8E44AD]'>Placed</span></h2>
            <p className="text-sm">Connecting talent with opportunity. Your career journey starts here.</p>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/jobs" className="hover:underline" to="/Browse">Browse Jobs</a></li>
              <li><a href="/employers" className="hover:underline">For Employers</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">LinkedIn</a>
            </div>
          </div>
        </div>
  
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} GetPlaced. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  