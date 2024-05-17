import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-primary">
      <div className="container mx-auto text-center">
        <ul className="flex justify-center space-x-4">
          <li>
            <Link to="home" smooth={true} duration={1000}>
              Home
            </Link>
          </li>
          <li>
            <Link to="service" smooth={true} duration={1000}>
              Service
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={1000}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="powered" smooth={true} duration={1000}>
              Powered By
            </Link>
          </li>
          <li>
            <Link to="customer" smooth={true} duration={1000}>
              Customer Service
            </Link>
          </li>
        </ul>
        <p className="mt-4">&copy; 2023 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


