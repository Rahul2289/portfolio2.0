import React from "react";
import Typewriter from "typewriter-effect";
import { HiDownload } from "react-icons/hi";
import img from "../accets/pngegg (13).png";
import { Container } from "./../styles/HomeStyles";
import Button from "./../utils/Button";
import { SocialLinks } from "./../accets/data/SocialLinks";

const options = {
  strings: ["  Frontend Developer", "  MERN stack Developer", "web developer"],
  autoStart: true,
  loop: true,
};

const Home = () => {
  return (
    <Container id="home">
      <section
        className="left"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <h1>Hello , I'm Rahul</h1>
        <div className="info">
          <span className="type-string">
            <Typewriter options={options} />
          </span>
        </div>
        <Button
          size={14}
          bgcolor="#3071E7 "
          color="#fff"
          link={
            "https://drive.google.com/file/d/1YpE3pZdZ6b96yZ8TLZedaDJ18HaQkJsV/view?usp=sharing"
          }
        >
          <span>Resume</span>
          <span>
            <HiDownload />
          </span>
        </Button>
        <div className="icons-grp">
          {SocialLinks.map((data) => (
            <a key={data.id} href={data.link} rel="noreferrer" target="_blank">
              {data.icons}
            </a>
          ))}
        </div>
      </section>
      <section
        className="right"
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div className="wrapper">
          <img src={img} alt="profile" />
        </div>
      </section>
    </Container>
  );
};

export default Home;
