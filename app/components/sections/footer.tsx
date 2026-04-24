"use client";

import { PhoneIcon } from "../ui/icons";
import { LuMapPin, LuMail, LuClock, LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";

export default function Footer() {
  return (
    <footer className="relative w-full bg-white px-4 pt-12 pb-8 overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-full pointer-events-none z-3"
        style={{
          height: "60%",
          background: "linear-gradient(to bottom, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 8px, rgba(255,255,255,0) 100%)"
        }}
      />
      <img
        src="/images/footer-effect.gif"
        alt=""
        className="absolute bottom-0 left-0 w-full object-cover object-bottom z-0"
      />
      <div className="relative z-10 max-w-xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <span className="font-display text-gray-900 text-xl font-semibold tracking-wide">
            ACIC
          </span>
          <p className="font-sans text-sm text-gray-600 mt-3 leading-relaxed">
            Your trusted partner for Australian education and migration services since 1988.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="font-sans text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="font-sans text-sm text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="#" className="font-sans text-sm text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="font-sans text-sm text-gray-600 hover:text-gray-900">Services</a></li>
              <li><a href="#" className="font-sans text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2">
                <PhoneIcon color="#374151" size={16} />
                <span className="font-sans text-sm text-gray-600">+61 2 9876 5432</span>
              </li>
              <li className="flex items-center gap-2">
                <LuMail size={16} color="#374151" />
                <span className="font-sans text-sm text-gray-600">info@acic.com</span>
              </li>
              <li className="flex items-start gap-2">
                <LuMapPin size={16} color="#374151" className="shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-gray-600">Sydney, NSW, Australia</span>
              </li>
              <li className="flex items-center gap-2">
                <LuClock size={16} color="#374151" />
                <span className="font-sans text-sm text-gray-600">Mon-Fri: 9AM-5PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center">
            <h3 className="font-sans text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Follow Us
            </h3>
            <div className="flex items-center gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <LuFacebook size={18} color="#374151" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <LuInstagram size={18} color="#374151" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <LuLinkedin size={18} color="#374151" />
              </a>
            </div>
          </div>

          <p className="font-sans text-xs text-gray-500 mt-8 text-center">
            © 2026 ACIC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}