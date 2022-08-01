import styled from "styled-components";
export const Container = styled.div`
  color: ${(props) => props.theme.colors.white};
  max-width: 100vw;
  height: 100vh;
  padding: 3rem 5rem;
  font-size: 2rem;
  display: grid;
  place-items: center;
  grid-template-columns: 60% 40%;
  gap: 2rem;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    height: 100%;
    padding-left: 20%;

    h1 {
      font-size: 5rem;
      color: ${(props) => props.theme.colors.secondary};
      text-shadow: 1px 0px 2px ${(props) => props.theme.colors.white};
    }
    .info {
      display: flex;
      gap: 1rem;
      font-size: 3rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.colors.secondary};
      .type-string {
        color: ${(props) => props.theme.colors.white};
        font-weight: 500;
      }
    }
    .icons-grp {
      display: flex;
      gap: 2rem;
      font-size: 3.5rem;
      align-items: center;
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        background-color: ${(props) => props.theme.colors.white};
        cursor: pointer;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        &:hover {
          background-color: rgba(22, 30, 53, 1);
        }
      }
    }
  }

  .right {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .wrapper {
      position: relative;
      border-radius: 48% 52% 49% 51% / 92% 93% 7% 8%;
      /* border-radius: 68% 72% 18% 21% / 73% 72% 62% 61%; */
      width: 35rem;
      height: 35rem;
      background-color: ${(props) => props.theme.colors.primary};
       {
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          bottom: 8px;
        }
      }
    }
  }
  p {
    display: flex;
    gap: 0.5rem;
  }
  @media (max-width: 750px) {
    padding: 7rem 1rem;
    place-items: center;
    gap: 0;
    .left {
      h1 {
        font-size: 3rem;
      }
      .info {
        font-size: 1.7rem;
      }
    }
    .right {
      .wrapper {
        width: 20rem;
        height: 20rem;
      }
    }
  }
  @media (max-width: 400px) {
    grid-template-columns: 100%;
    padding: 7rem 1rem;
    place-items: center;
    gap: 0;
    .left {
      h1 {
        font-size: 3rem;
      }
      .info {
        font-size: 2rem;
      }
      .icons-grp {
        font-size: 3rem;
        a {
          width: 40px;
          height: 40px;
        }
      }
    }
    .right {
      .wrapper {
        width: 25rem;
        height: 25rem;
      }
    }
  }
`;
