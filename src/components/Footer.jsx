import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { BsGithub, BsFillArrowUpSquareFill } from 'react-icons/bs';

function Footer() {
  return (
    <footer>
      <div className="social-links-container">
        <a
          href="https://www.facebook.com/akos.borbely.71/"
          target="_blank"
          rel="noreferrer"
        >
          <CiFacebook size={50} color="#00abf0" />
        </a>
        <a href="https://github.com/AkosBrb" target="_blank" rel="noreferrer">
          <BsGithub size={42} color="#00abf0" />
        </a>
        <a
          href="https://www.linkedin.com/in/akos-borbely/"
          target="_blank"
          rel="noreferrer"
        >
          <CiLinkedin size={50} color="#00abf0" />
        </a>
      </div>
      <div className="nav-back-container">
        <a href="#landing-page">
          <BsFillArrowUpSquareFill size={42} color="#00abf0" />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
