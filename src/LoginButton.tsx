import { useEffect } from "react";

function LoginButton() {
  const handleCallbackResponse = (response: any) => {
    console.log("id token: ", response.credential);
  };

  useEffect(() => {
    if (typeof window.google !== "undefined") {
      window.google.accounts.id.initialize({
        client_id:
          "300192009869-1cms7vtbqgem3ognlgg9gi428t2fljl7.apps.googleusercontent.com",
        callback: handleCallbackResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div id="signInDiv" style={{ width: "fit-content" }}></div>;
}

export default LoginButton;
