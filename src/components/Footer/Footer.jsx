import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="footer__links">
        <a href="/" className="footer__link">
          About
        </a>
        <a href="/" className="footer__link">
          Privacy Notice
        </a>
        <a href="/" className="footer__link">
          Company
        </a>
        <a href="/" className="footer__link">
          EULA
        </a>
        <a href="/" className="footer__link">
          Support
        </a>
        <a href="/" className="footer__link">
          Uninstall
        </a>
        <a href="/" className="footer__link">
          Cookie
        </a>
        <a href="/" className="footer__link">
          Policy
        </a>
        <a href="/" className="footer__link">
          Refund Policy
        </a>
      </div>

      <div className="footer__copyrights">
        <p>Copyright ©</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
