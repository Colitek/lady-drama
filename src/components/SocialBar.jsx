// SocialBar.jsx
import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function SocialBar() {
  const [offsetTop, setOffsetTop] = useState(120);

  useEffect(() => {
    const updateOffset = () => {
      const menu = document.getElementById("menu-bar");
      if (menu) {
        const height = menu.offsetHeight;
        setOffsetTop(height + 10);
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => window.removeEventListener("resize", updateOffset);
  }, []);

  return (
    <div
      className="hidden md:flex fixed left-0 z-40 flex-col space-y-4"
      style={{ top: `${offsetTop}px` }}
    >
      {[{
        icon: <FaFacebookF size={20} />,
        url: "https://www.facebook.com/profile.php?id=100091560759911",
      }, {
        icon: <FaInstagram size={20} />,
        url: "https://www.instagram.com/ladydrama_oficial/",
      }, {
        icon: <FaMapMarkerAlt size={20} />,
        url: "https://maps.app.goo.gl/uuNykf6PtA4EYDTV7",
      }].map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#D6B8AE] hover:bg-[#cfaea4] text-white p-3 rounded-lg transition duration-300 shadow-md ml-0"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
