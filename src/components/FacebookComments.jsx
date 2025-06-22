import React, { useEffect, useRef } from "react";

export default function FacebookComments({ url, width = "100%", numPosts = 5 }) {
  const fbRef = useRef(null);

  useEffect(() => {
    // Załaduj SDK FB, jeśli jeszcze nie jest załadowane
    if (!window.FB) {
      // dodaj skrypt SDK
      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: "v17.0",
        });
      };

      (function (d, s, id) {
        let js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/pl_PL/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    } else {
      // Jeśli SDK już jest, parsuj XFBML ponownie (odśwież komentarze)
      window.FB.XFBML.parse(fbRef.current);
    }
  }, [url]);

  return (
    <>
      <div id="facebook-jssdk"></div>
      <div
        ref={fbRef}
        className="fb-comments"
        data-href={url}
        data-width={width}
        data-numposts={numPosts}
      ></div>
    </>
  );
}
