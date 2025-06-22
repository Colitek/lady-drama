import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function SocialBar() {
  const [offsetTop, setOffsetTop] = useState(null); // start null
  const [menuVisible, setMenuVisible] = useState(true);
  const [bannerVisible, setBannerVisible] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const updateOffset = (menuNowVisible, bannerNowVisible) => {
    const menu = document.getElementById("menu-container");
    let offset = 20;

    if (menuNowVisible && menu) {
      offset = menu.offsetHeight + 20;
    } else if (!menuNowVisible && bannerNowVisible) {
      const banner = document.querySelector("header > div:first-child");
      if (banner) {
        offset = banner.offsetHeight + 20;
      }
    }

    setOffsetTop(offset);
  };

  useEffect(() => {
    const handleMenuVisibility = (e) => {
      const isVisible = e.detail;
      setMenuVisible(isVisible);
      setTimeout(() => updateOffset(isVisible, bannerVisible), 0);
    };

    const handleBannerVisibility = (e) => {
      const isVisible = e.detail;
      setBannerVisible(isVisible);
      setTimeout(() => updateOffset(menuVisible, isVisible), 0);
    };

    window.addEventListener("menu-visibility", handleMenuVisibility);
    window.addEventListener("banner-visibility", handleBannerVisibility);

    setTimeout(() => {
      const menu = document.getElementById("menu-container");
      if (menu) {
        setOffsetTop(menu.offsetHeight + 20);
      } else {
        setOffsetTop(60); // jakaś domyślna wartość, żeby socialbar nie startował na 0
      }
      setInitialized(true);
    }, 0);

    return () => {
      window.removeEventListener("menu-visibility", handleMenuVisibility);
      window.removeEventListener("banner-visibility", handleBannerVisibility);
    };
  }, [menuVisible, bannerVisible]);

  return (
    <div
      className={`hidden md:flex fixed left-0 z-40 flex-col space-y-4 ${
        initialized ? "transition-all duration-300 ease-in-out" : ""
      }`}
      style={{ top: initialized && offsetTop !== null ? `${offsetTop}px` : "60px" }}
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
          className="bg-[#D6B8AE] hover:bg-[#cfaea4] text-white p-3 rounded-lg transition duration-300 shadow-md ml-0"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
