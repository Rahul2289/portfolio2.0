import React from "react";
import styled from "styled-components";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { GiSkills } from "react-icons/gi";
import { MdContactPage } from "react-icons/md";
const Nav = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <span>
              <AiFillHome />
            </span>
            <a href="#home">home</a>
          </li>
          <li>
            <span>
              <GiSkills />
            </span>
            <a href="#skills">skills</a>
          </li>
          <li>
            <span>
              <AiFillProject />
            </span>
            <a href="#projects">projects</a>
          </li>
          <li>
            <span>
              <MdContactPage />
            </span>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Nav;

const Container = styled.div`
  @media (min-width: 450px) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    color: #fff;
    width: 100%;
    height: 3rem;
    padding: 3rem 3rem;
    font-size: 2rem;
    background-color: rgba(22, 30, 53, 1);
    nav {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: right;
      ul {
        display: flex;
        align-items: center;
        gap: 2.5rem;
        list-style: none;
        li {
          color: ${(props) => props.theme.primary};
          cursor: pointer;
          span {
            display: none;
          }
          a {
            font-size: 1.5rem;
            color: white;
            text-decoration: none;
            text-transform: uppercase;
          }
        }
      }
    }
  }

  @media (max-width: 450px) {
    nav {
      width: 100%;
      position: fixed;
      left: 0;
      bottom: 0;
      background-color: rgba(22, 30, 53, 1);
      z-index: 99;
      display: flex;
      font-size: 2rem;
      align-items: center;
      ul {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        li {
          padding: 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          &:hover {
            border-radius: 10px;
            background: ${(props) => props.theme.colors.bg};
          }
          span {
            color: white;
            display: flex;
            font-size: 3rem;
          }
          a {
            text-decoration: none;
            color: white;
            text-transform: uppercase;
            font-size: 1.5rem;
          }
        }
      }
    }
  }
`;
