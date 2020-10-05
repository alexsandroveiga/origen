import styled from 'styled-components'

import logo from '../../assets/background.png'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${logo}) no-repeat bottom center;
  display: flex;
  padding: 4rem 0;

  aside {
    width: 300px;
    background: #ffffff;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 0 45px 45px 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    header {
      text-align: center;

      img {
        width: 120px;
        border-radius: 50%;
      }

      h1 {
        color: ${props => props.theme.colors.primary};
        font-size: 20px;
      }

      span {
        color: #ff5243;
      }
    }

    main {
      flex: 1;
      margin: 1rem 0;
      padding: 1rem 0;
      border-top: 1px solid ${props => props.theme.colors.secondary};
      border-bottom: 1px solid ${props => props.theme.colors.secondary};
      display: flex;
      flex-direction: column;

      ul {
        margin: 0 -1rem;
        list-style: none;

        li {
          padding: 0.5rem 3rem;

          a {
            text-decoration: none;
            color: ${props => props.theme.colors.text};
          }

          &.active {
            background: ${props => props.theme.colors.primary};

            a {
              color: #ffffff;
            }
          }
        }
      }

      em {
        flex: 1;
      }

      button {
        background: ${props => props.theme.colors.primary};
        color: #ffffff;
        display: flex;
        height: 40px;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;
        border: 0;
        font-size: 18px;
        cursor: pointer;

        svg {
          display: block;
          margin-right: 0.5rem;
        }
      }
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        display: block;
        height: 24px;
        margin: 0 -1rem;
      }
    }
  }

  > main {
    margin: 0 3rem;
    padding: 3rem 0;
    flex: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: stretch;

    .box {
      width: calc(33.3333333333% - 1.33333333333rem);
      background: #ffffff;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.25);
      border-radius: 16px;
      padding: 1rem 0;

      h1 {
        margin: 0 0 1rem 0;
        text-align: center;
        font-size: 24px;
        color: ${props => props.theme.colors.primary};
      }

      .image {
        position: relative;
        width: 100%;
        height: 320px;
        overflow: hidden;

        img {
          display: block;
          width: 100%;
          position: absolute;
        }
      }

      .table {
        padding: 1rem;

        .row {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          margin-bottom: 0.5rem;

          span {
            text-align: center;

            &:first-child {
              text-align: left;
            }

            &:last-child {
              color: #0da400;
              text-align: right;
            }
          }
        }
      }
    }

    .full {
      margin-top: 2rem;
      width: 100%;

      img {
        width: 100%;
      }

      h1 {
        text-align: left;
        padding-left: 1rem;

        span {
          color: #0da400;
          margin-right: 2rem;
        }
      }
    }
  }
`
