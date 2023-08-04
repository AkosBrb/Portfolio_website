function LandingPage() {
  return (
    <section className="landing-page-container" id="landing-page">
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
          <a href="#" className="btn">
            Hire me
          </a>
          <a to="#contact" className="btn">
            Contact
          </a>
        </div>
        <div className="home-img-hover" />
      </div>
    </section>
  );
}
export default LandingPage;
