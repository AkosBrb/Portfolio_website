import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <section className="landing-page-container">
      <div className="introduction-container">
        <h1>
          Hi, I'm <span>Ákos Borbély</span>
        </h1>
        <div className="animated-text">
          <h3>Fullstack Developer</h3>
        </div>
        <p>
          Welcome to my portfolio website! Im a passionate Fullstack Developer
          showcasing my creative work, projects, and accomplishments. Explore my
          diverse portfolio and if you feel like it, feel free to contact me.
        </p>
        <div className="btn-container">
          <Link to="#" className="main-btn">
            Hire me
          </Link>
          <Link to="#" className="main-btn">
            Contact
          </Link>
        </div>
        <div className="home-img-hover" />
      </div>
    </section>
  );
}
export default LandingPage;
