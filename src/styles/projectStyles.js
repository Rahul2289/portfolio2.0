import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  max-width: 100vw;
  min-height: 100vh;
  padding: 3rem 3rem;
  font-size: 2rem;
  h1 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 6rem;
    text-transform: uppercase;
  }
  .wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    gap: 0.5rem;
    padding: 1rem;
    row-gap: 2rem;
    .outer-div {
      padding: 0.8rem;
      background: ${(props) => props.theme.colors.secondary};
      width: 100%;
      height: 30rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      border-radius: 5px;
      transform: scale(1);
      cursor: pointer;
      &:hover {
        transform: scale(1.01);
      }
      .top {
        width: 100%;
        height: 100%;
        flex: 2;
        border-radius: 5px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 5px;
        }
      }
      .bottom {
        width: 100%;
        height: 100%;
        display: flex;
        flex: 0.8;
        .btn-group {
          background-color: ${(props) => props.theme.colors.secondary};
          border: none;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 2rem;
        }
      }
    }
  }

  @media (max-width: 750px) {
    .wrapper {
      grid-template-columns: 50% 50%;
    }
  }
  @media (max-width: 450px) {
    h1 {
      font-size: 2.5rem;
    }
    .wrapper {
      grid-template-columns: 100%;
    }
  }
`;
