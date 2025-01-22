import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bottom-0 left-0 flex bg-slate-800 text-white flex-col w-full gap-8 px-8 py-16 md:gap-12">
        <div className="grid grid-cols-2 gap-8 2xsm:grid-cols-2 md:grid-cols-4 ">
          <div className="flex flex-col gap-6">
            <label className="text-gray-400">SOLUTIONS</label>
            <ul className="flex flex-col gap-6 ">
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Commerce</li>
              <li>Insights</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <label className="text-gray-400">SUPPORT</label>
            <ul className="flex flex-col gap-6">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <label className="text-gray-400">COMPANY</label>
            <ul className="flex flex-col gap-6 ">
              <li>About</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Partners</li>
            </ul>
          </div>
          <div classname="flex flex-col gap-6">
            <label classname="text-gray-400">SUPPORT</label>
            <ul classname="flex flex-col gap-6 ">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guides</li>
              <li>API Status</li>
            </ul>
          </div>
        </div>
        <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        <div className="flex flex-col items-center gap-8 md:justify-between md:flex-row">
          <div className="flex flex-col gap-2">
            <p className="text-gray-400">SUBSCRIBE TO OUR NEWSLETTER</p>
            <p className="text-gray-300">
              The latest news, article, resources, sent to your inbox weekly
            </p>
          </div>
          <div className="flex flex-col gap-4 xsm:flex-row md:p-0">
            <input
              className="px-4 py-3 text-lg transition-all duration-300 rounded-lg focus:outline-none focus:right-1 "
              placeholder="Enter your email"
              type="text"
            />
            <button className="px-6 py-4 font-semibold bg-purple-500 rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full h-px m-auto bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between ">
          <div>© 2022</div>
          <div className="flex gap-4 p-2 rounded-md social-wrapper">
            <img
              onclick="relocate('facebook.com')"
              src="https://img.icons8.com/material/24/000000/twitter--v2.png"
              alt="Facebook"
            />
            <img
              onclick="relocate('instagram.com')"
              src="https://img.icons8.com/material/24/000000/instagram-new--v1.png"
              alt="Instagram"
            />
            <img
              onclick="relocate('twitter.com')"
              src="https://img.icons8.com/material/24/000000/twitter--v2.png"
              alt="twitter "
            />
            <img
              onclick="relocate('telegram.org')"
              src="https://img.icons8.com/ios-filled/24/000000/telegram-app.png"
              alt="telegram "
            />
            <img
              onclick="relocate('discird.com')"
              src="https://img.icons8.com/material/24/000000/discord-logo--v1.png"
              alt="discord"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
