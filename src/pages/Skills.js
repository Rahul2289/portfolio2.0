import { Container } from "./../styles/SkillsStyles";
import { SkillsImages } from "./../accets/data/SkillsData";
const Skills = () => {
  return (
    <Container>
      <h1 data-aos="zoom-in" id="skills">
        Skills
      </h1>
      <div className="wrapper">
        {SkillsImages.map((data) => {
          return (
            <div
              data-aos="flip-up"
              key={data.id}
              className="outer-circle"
              style={{
                background: `conic-gradient(#3071E7 ${data.per}%,transparent ${data.per}%)`,
              }}
            >
              <div className="inner-circle">
                <img src={data.img} alt={data.id} data-aos="zoom-in" />
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Skills;
