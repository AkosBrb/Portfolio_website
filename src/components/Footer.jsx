import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { BsGithub } from 'react-icons/bs';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="social-links-container">
        <Link to="https://www.facebook.com/akos.borbely.71/" target="_blank">
          <CiFacebook size={50} color="#00abf0" />
        </Link>
        <Link to="https://github.com/AkosBrb" target="_blank">
          <BsGithub size={42} color="#00abf0" />
        </Link>
        <Link to="https://www.linkedin.com/in/akos-borbely/" target="_blank">
          <CiLinkedin size={50} color="#00abf0" />
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
