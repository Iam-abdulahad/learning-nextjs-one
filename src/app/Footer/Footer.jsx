import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Copyright */}
          <p className="text-sm text-center sm:text-left">
            © {new Date().getFullYear()} My First Next Js App. All rights reserved.
          </p>

          {/* Footer Links */}
          <nav className="flex flex-wrap justify-center sm:justify-end gap-x-6 gap-y-2 text-sm">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
