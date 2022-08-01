import styled from "styled-components";

export const Container = styled.div`
color: #fff;
max-width: 100vw;
min-height: 100vh;
padding: 3rem 3rem;
font-size: 2rem;
margin: auto;
display: grid;
justify-content: center;
h1 {
  text-align: center;
  font-size: 4rem;
  margin-bottom: 6rem;
  text-transform:uppercase;
}
.wrapper {
  width: 90vw;
  height: 45rem;
  display: grid;
  grid-template-columns: 50% 50%;
  background-color: rgba(22, 30, 53, 1);
  place-items: center;
  justify-content: space-between;
  border-radius: 10px;
  padding: 1rem 1rem;
  gap: 2rem;
  .left {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .right {
    width: 90%;
    height: 90%;
    form {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      padding: 2rem;
      input{
        height: 4rem;
      }
      input ,textarea {
        width: 100%;
        padding: 0.5rem;
        border-radius: 5px;
        outline: none;
        border: none;
        &:active {
          border: 1px solid ${(props) => props.theme.bg};;
        }
        }
      }
    }
  }
}
@media (max-width:400px){
  h1{
  font-size:2.5rem;
  }
.wrapper{
  grid-template-columns: 100%;
  padding:0;
.left{
display:none;
}
}
}
`;
