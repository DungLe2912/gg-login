// import { useEffect } from "react";

// function LoginButton() {
//   const handleCallbackResponse = (response: any) => {
//     console.log("id token: ", response.credential);
//   };

//   useEffect(() => {
//     if (typeof window.google !== "undefined") {
//       window.google.accounts.id.initialize({
//         client_id:
//           "300192009869-1cms7vtbqgem3ognlgg9gi428t2fljl7.apps.googleusercontent.com",
//         callback: handleCallbackResponse,
//       });

//       window.google.accounts.id.renderButton(
//         document.getElementById("signInDiv"),
//         { theme: "outline", size: "large" }
//       );
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return <div id="signInDiv" style={{ width: "fit-content" }}></div>;
// }

// export default LoginButton;

//External imports
import { useEffect, useRef } from "react";

const loadScript = (src: string) =>
  new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = (err) => reject(err);
    document.body.appendChild(script);
  });

const LoginButton = () => {
  const googleButton = useRef(null);

  useEffect(() => {
    const src = "https://accounts.google.com/gsi/client";
    const id =
      "300192009869-1cms7vtbqgem3ognlgg9gi428t2fljl7.apps.googleusercontent.com";

    loadScript(src)
      .then(() => {
        console.log(window.google);
        window.google.accounts.id.initialize({
          client_id: id,
          callback: handleCredentialResponse,
        });
        window.google.accounts.id.renderButton(googleButton.current, {
          theme: "outline",
          size: "large",
        });
      })
      .catch(console.error);

    return () => {
      const scriptTag = document.querySelector(`script[src="${src}"]`);
      // if (scriptTag) document.body.removeChild(scriptTag);
      if (scriptTag && scriptTag.parentNode === document.body) {
        document.body.removeChild(scriptTag);
      }
    };
  }, []);

  function handleCredentialResponse(response: any) {
    console.log("Encoded JWT ID token: " + response.credential);
  }

  return <div ref={googleButton} style={{ width: "fit-content" }}></div>;
};

export default LoginButton;
