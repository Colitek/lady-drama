import React from "react";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function SocialBar() {
  return (
    <div className="fixed top-[12%] left-0 z-50 flex flex-col space-y-4 p-2">
      {[
        {
          icon: <FaFacebookF size={20} />,
          url: "https://www.facebook.com/profile.php?id=100091560759911",
        },
        {
          icon: <FaInstagram size={20} />,
          url: "https://www.instagram.com/ladydrama_oficial/",
        },
        {
          icon: <FaMapMarkerAlt size={20} />,
          url: "https://maps.app.goo.gl/uuNykf6PtA4EYDTV7",
        },
      ].map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#D6B8AE] hover:bg-[#cfaea4] text-white p-3 rounded-full transition duration-300 shadow-md"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
