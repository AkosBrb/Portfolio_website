import bootstrapIcon from '../assets/icons/bootstrap.png';
import cssIcon from '../assets/icons/css-3.png';
import gitIcon from '../assets/icons/git.png';
import htmlIcon from '../assets/icons/html-5.png';
import jsIcon from '../assets/icons/js.png';
import nodeJsIcon from '../assets/icons/nodejs.png';
import reactIcon from '../assets/icons/physics.png';
import postgresIcon from '../assets/icons/postgre.png';
import typeScriptIcon from '../assets/icons/typescript.png';

function Skills() {
  return (
    <section className="skills-container" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
      </h2>
      <div className="skills-icons-container">
        <div className="html5 img-container">
          <img src={htmlIcon} alt="hmtl" />
          <h3 className="img-heading">HTML5</h3>
        </div>
        <div className="css img-container">
          <img src={cssIcon} alt="css" />
          <h3 className="img-heading">CSS3</h3>
        </div>
        <div className="bootstrap img-container">
          <img src={bootstrapIcon} alt="bootstrap" />
          <h3 className="img-heading">Bootstrap</h3>
        </div>
        <div className="js img-container">
          <img src={jsIcon} alt="js" />
          <h3 className="img-heading">JavaScript</h3>
        </div>
        <div className="ts img-container">
          <img src={typeScriptIcon} alt="ts" />
          <h3 className="img-heading">TypeScript</h3>
        </div>
        <div className="react img-container">
          <img src={reactIcon} alt="react" />
          <h3 className="img-heading">React</h3>
        </div>
        <div className="nodejs img-container">
          <img src={nodeJsIcon} alt="nodejs" />
          <h3 className="img-heading">NodeJS</h3>
        </div>
        <div className="postgres img-container">
          <img src={postgresIcon} alt="postgres" />
          <h3 className="img-heading">PostgresSQL</h3>
        </div>
        <div className="git img-container">
          <img src={gitIcon} alt="git" />
          <h3 className="img-heading">Git</h3>
        </div>
      </div>
    </section>
  );
}
export default Skills;
