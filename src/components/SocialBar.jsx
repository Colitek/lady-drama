import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function SocialBar() {
  const [offsetTop, setOffsetTop] = useState(120); // domyślny offset

  useEffect(() => {
    const updateOffset = () => {
      const header = document.getElementById("header");
      if (header) {
        const height = header.offsetHeight;
        setOffsetTop(height + 20);
      }
    };

    const timeout = setTimeout(() => {
      updateOffset();
    }, 100);

    window.addEventListener("resize", updateOffset);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <div
      className="hidden md:flex fixed left-0 z-50 flex-col space-y-4"
      style={{ top: `${offsetTop}px` }}
    >
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
          className="bg-[#D6B8AE] hover:bg-[#cfaea4] text-white p-3 rounded-[8px] transition duration-300 shadow-md ml-0"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
