import React, { useRef, useState } from "react";
import { IoIosSend } from "react-icons/io";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { toast } from "react-toastify";
const Form = () => {
  const form = useRef();
  const [user, setUser] = useState({
    user_name: "",
    user_email: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const toastOptions = {
    position: "bottom-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };
  const sendEmail = (e) => {
    e.preventDefault();
    if (user.user_name.trim() && user.user_email) {
      emailjs
        .sendForm(
          "service_lucnvx4",
          "template_3nc3vzv",
          form.current,
          "LbTbDkCWyV78gH55Y"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast.success("email sent", toastOptions);
          },
          (error) => {
            console.log(error.text);
            toast.error(error.text, toastOptions);
          }
        );
    } else {
      toast.error("provide name/email", toastOptions);
    }
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        type="text"
        placeholder="name"
        name="user_name"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="email"
        name="user_email"
        onChange={handleChange}
      />
      <textarea
        cols="30"
        rows="10"
        placeholder="Leave a message here..."
        name="message"
      />
      <Button type="submit">
        <span>submit</span>
        <span>
          <IoIosSend />
        </span>
      </Button>
    </form>
  );
};

export default Form;

const Button = styled.button`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.color};
  border-radius: 3px;
  cursor: pointer;
  font-size: 1.5rem;
  outline: none;
  border: none;
  &:hover {
    background: transparent;
    outline: 2px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`;
