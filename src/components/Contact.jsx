import React from "react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="bg-ladydrama-light text-white py-20 px-6 md:px-0">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_auto_1fr] gap-12 items-center">
        {/* FORM */}
        <div className="ml-0 md:ml-[50px]">
          <h3 className="text-4xl font-bold text-center mb-10">
            {t("contact.title")}
          </h3>
          <form className="space-y-6">
            <input
              type="text"
              placeholder={t("contact.form.fullName")}
              className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900"
              required
            />
            <input
              type="email"
              placeholder={t("contact.form.email")}
              className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-900"
              required
            />
            <textarea
              rows="5"
              placeholder={t("contact.form.message")}
              className="w-full p-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none text-gray-900"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-ladydrama hover:bg-ladydrama-dark text-white py-4 rounded-lg font-semibold transition"
            >
              {t("contact.form.send")}
            </button>
          </form>
        </div>

        {/* VERTICAL LINE */}
        <div className="hidden md:block w-[2px] h-full bg-white mx-auto"></div>

        {/* CONTACT DETAILS */}
        <div className="flex flex-col items-center text-center justify-center space-y-6 text-lg">
          <h4 className="text-2xl font-semibold">{t("contact.details.title")}</h4>
          <p>
            <strong>{t("contact.details.addressLabel")}</strong><br />
            {t("contact.details.addressLine1")}<br />
            {t("contact.details.addressLine2")}<br />
            {t("contact.details.addressLine3")}
          </p>
          <p>
            <strong>{t("contact.details.emailLabel")}</strong><br />
            <a href="mailto:verapbylucca77@gmail.com" className="hover:underline">
              verapbylucca77@gmail.com
            </a>
          </p>
          <p>
            <strong>{t("contact.details.phoneLabel")}</strong><br />
            <a href="tel:+48696971370" className="hover:underline">(48) 696 971 370</a><br />
            <a href="tel:+48519108317" className="hover:underline">(48) 519 108 317</a>
          </p>
        </div>
      </div>
    </section>
  );
}
