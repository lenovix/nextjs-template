import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";

const CookieBanner = () => {
  const handleAccept = () => {
    Cookies.set("Cookies", "accepted", { expires: 365 });
    console.log("cookies accepted");
  };
  return (
    <CookieConsent
      onAccept={handleAccept}
      location="bottom"
      buttonText="Accept"
      cookieName="Cookies"
    >
      This Website uses cookies to enhance user experience
    </CookieConsent>
  );
};

export default CookieBanner;
