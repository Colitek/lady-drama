import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-500 text-sm text-center py-8">
      © {currentYear} Lady Drama. {t("footer.rightsReserved")}
    </footer>
  );
}
