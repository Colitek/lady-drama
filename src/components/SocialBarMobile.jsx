import React from "react";
import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function SocialBarMobile() {
  const { t } = useTranslation();

  return (
    <div className="md:hidden flex flex-col items-center py-4 px-6 bg-ladydrama-darkest text-white">
      <span className=" font-bold text-2xl mb-2">{t("socialBar.followUs")}</span>
      <div className="flex space-x-12">
        <a
          href="https://www.facebook.com/LadyDramaOfficial"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-gray-300 transition"
        >
          <FaFacebookF size={20} />
        </a>
        <a
          href="https://www.instagram.com/LadyDramaOfficial"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-gray-300 transition"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://www.youtube.com/channel/YourChannelID"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="hover:text-gray-300 transition"
        >
          <FaMapMarkerAlt size={20} />
        </a>
      </div>
    </div>
  );
}
