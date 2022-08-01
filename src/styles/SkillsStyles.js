import styled, { keyframes } from "styled-components";

const progress = keyframes`
        0% {
          background: conic-gradient(#ff0a45 0%, transparent 0%);
         
        }
        15% {
          background: conic-gradient(#ff0a45 15%, transparent 15%);
          
        }
        25% {
          background: conic-gradient(#ff0a45 25%, transparent 25%);
          
        }
        50% {
          background: conic-gradient(#ff0a45 50%, transparent 50%);
        
        }
        70% {
          background: conic-gradient(#ff0a45 70%, transparent 70%);
          
        }
        100% {
          background: conic-gradient(#ff0a45 ${(props) =>
            props.prog}%, transparent ${(props) => props.prog}%);
         
        }
`;

export const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  max-width: 100vw;
  /* min-height: 100vh; */
  padding: 3rem 3rem;
  font-size: 2rem;
  gap: 2rem;
  h1 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 6rem;
    text-transform: uppercase;
  }
  .wrapper {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto auto;
    place-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 3rem;
    .outer-circle {
      display: grid;
      place-items: center;
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
      transition: color 2s ease-in-out;
      /* animation: ${progress} 2s; */
      cursor: pointer;
      &:hover {
        border: none;
        transform: scale(1.2);
        animation: ${progress} 1s;
      }
      .inner-circle {
        display: grid;
        place-items: center;
        width: 9rem;
        height: 9rem;
        border-radius: 50%;
        background-color: rgba(22, 30, 53, 1);
        img {
          height: 5rem;
          width: 5rem;
          border-radius: 50%;
        }
      }
    }
  }
  @media (max-width: 400px) {
    h1 {
      font-size: 2.5rem;
    }
    .wrapper {
      width: 100%;
      height: 50%;
      .outer-circle {
        width: 7rem;
        height: 7rem;
        .inner-circle {
          width: 6.5rem;
          height: 6.5rem;
          img {
            height: 5rem;
            width: 5rem;
          }
        }
      }
    }
  }
`;
