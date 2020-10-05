import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(255, 82, 67, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  header {
    position: fixed;
    padding: 4rem;
    top: 0;
    left: 0;
  }

  .login {
    width: 416px;
    height: 562px;
    background: #ffffff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 45px;
    display: flex;
    align-items: center;
    justify-content: center;

    form {
      width: 80%;

      img {
        border: 4px solid ${props => props.theme.colors.primary};
        width: 120px;
        border-radius: 50%;
        display: block;
        margin: 0 auto 1rem auto;
      }

      label {
        color: ${props => props.theme.colors.primary};
        margin-bottom: 1rem;
        display: block;

        span {
          padding: 0 0 0.25rem 1rem;
          display: inline-block;
        }

        input {
          width: 100%;
          height: 40px;
          background: #ffffff;
          border: 1px solid #15ff01;
          box-sizing: border-box;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 20px;
          padding: 0 1rem;
          font-size: 18px;
        }
      }

      a {
        color: ${props => props.theme.colors.text};
        text-decoration: none;
      }

      button {
        background: ${props => props.theme.colors.primary};
        color: #ffffff;
        display: flex;
        height: 40px;
        border-radius: 20px;
        align-items: center;
        padding: 0 2rem;
        border: 0;
        font-size: 18px;
        margin: 1rem 0 0 auto;
      }
    }
  }
`
