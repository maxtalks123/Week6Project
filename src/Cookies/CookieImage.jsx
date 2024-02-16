import "./CookieImage.css";

export default function CookieImage({ incrementCookiesFunction }) {
  return (
    <div>
      <img
        onClick={() => incrementCookiesFunction((count) => count + 1)}
        src="https://clipground.com/images/cookie-clipart-icon-1.png"
        alt="A giant cookie, press to get more!"
      ></img>
    </div>
  );
}
