import con from "../accets/pngegg (14).png";
import { Container } from "./../styles/ContactStyles";
import Form from "./../components/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  return (
    <>
      <Container>
        <h1 data-aos="zoom-in" id="contact">
          get in touch
        </h1>
        <div className="wrapper" data-aos="fade-up">
          <section
            className="left"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={con} alt="img" />
          </section>
          <section className="right">
            <Form />
          </section>
        </div>
      </Container>
      <ToastContainer style={{ fontSize: "1.5rem" }} />
    </>
  );
};

export default Contact;
