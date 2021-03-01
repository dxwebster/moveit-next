import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1rem 0 2.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px  solid #d7d8da;

  font-weight: 500;

  span :first-child{
    font-size: 1.25rem;
  }

  span :last-child{
    font-size: 1.5rem;
  }
`

export const Container = styled.div`
  height: 80%;

  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`


export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong{
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.5;
  }

  p{
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
  }


`

export const Challenge = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;


  header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.2rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: var(--title);
      margin: 1.5rem 0 1rem;
    }

    p {
      line-height: 1.5;
    }

    img {
      margin-bottom: 1rem;
    }
  }

  footer  {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    button  {
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 0;
      outline: 0;
      border-radius: 5px;

      color: var(--white);

      font-size: 1rem;
      font-weight: 600;
      transition: filter 0.2s;

      &:first-child{
        background: var(--red);
      }

      &:last-child{
        background: var(--green);
      }

      &:hover {
        filter:brightness(0.9);
      }
    }
  }
`

