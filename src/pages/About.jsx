import aboutImg from '../assets/pics/about.png';

function About() {
  return (
    <section className="about-container" id="about">
      <h2 className="heading">
        About <span>Me</span>
      </h2>
      <div className="about-img">
        <img src={aboutImg} alt="about" />
        <span className="circle-spin" />
      </div>
      <div className="about-content">
        <h3>Fullstack Developer!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati
          consequuntur quae a possimus dolorem at modi voluptatum esse? Error
          atque, repellat accusantium ab culpa reiciendis, ex laborum quidem,
          accusamus corporis tenetur aliquam necessitatibus ad sed eaque
          blanditiis nihil quisquam maiores esse! Soluta excepturi molestiae
          magni ea quasi, aliquam voluptatem?
        </p>
      </div>
      <div className="btn-container btns">
        <a className="btn" href="#">
          Read More
        </a>
      </div>
    </section>
  );
}
export default About;
