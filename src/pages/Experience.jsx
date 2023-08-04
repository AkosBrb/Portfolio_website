import { BiSolidCalendar } from 'react-icons/bi';

function Experience() {
  return (
    <section className="experience-container" id="experience">
      <h2 className="heading">
        My <span>Journey</span>
      </h2>
      <div className="experience-row">
        <div className="experience-column">
          <h3 className="title">Experience</h3>
          <div className="experience-box">
            <div className="experience-content">
              <div className="content">
                <div className="year">
                  <BiSolidCalendar size={25} /> 2023.06 - 2023-08
                </div>
                <h3>Fullstack Webshop project - Progmatic Academy</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, ullam magnam ad corporis odit sunt expedita aut
                  laudantium voluptatum facilis?
                </p>
              </div>
            </div>

            <div className="experience-content">
              <div className="content">
                <div className="year">
                  <BiSolidCalendar size={25} /> 2023.04 - 2023-06
                </div>
                <h3>Frontend Webshop project - Progmatic Academy</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, ullam magnam ad corporis odit sunt expedita aut
                  laudantium voluptatum facilis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;
