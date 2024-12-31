import React, { useState } from 'react';
import { GitHub, LinkedIn } from '@mui/icons-material';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between px-6 py-3.5 bg-gray-900 rounded-full">
        {/* Logo Section --> Company Logo ? */}
        <div className="w-auto">
          <a href="#">
            <img src="https://cdn-icons-png.flaticon.com/512/6784/6784520.png" alt="Yanice" className="w-full h-8" />
          </a>
        </div>

        {/* Call to Action Buttons */}
        <div className="w-auto">
          <div className="flex items-center space-x-2">
            <a
              className="px-4 py-2.5 text-sm font-bold text-white bg-gray-900 hover:bg-orange-700 rounded-full"
              href="https://github.com/YaniceSze"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            <a
              className="px-4 py-2.5 text-sm font-bold text-white bg-gray-900 hover:bg-blue-600 rounded-full"
              href="https://www.linkedin.com/in/yanice-sze-959013146"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
