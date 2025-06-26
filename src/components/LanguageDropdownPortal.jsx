import React from "react";
import ReactDOM from "react-dom";

export default function LanguageDropdownPortal({ children }) {
  const portalRoot = document.getElementById("portal-root");

  return portalRoot ? ReactDOM.createPortal(children, portalRoot) : null;
}
