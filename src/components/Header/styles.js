import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: var(--blue);
  color: #fff;
`

export const XPBar = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  font-size: 1rem;


  & > div {
    flex:1;
    height: 4px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
  }

  .percentualBar {
    height: 4px;
    border-radius: 4px;
    background: var(--green);
   
  }

  .XP {
    width: 30px;
    height: 30px;
    margin-top: -17px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    transform: translateX(-50%);
    
    font-size: 0.8rem;
    background-color: var(--blue-dark);
    border-radius: 50%;
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.5rem;

  p {
    font-size: 1rem;
    margin-right: 1rem;

    img {
      margin-right: 0.5rem;
    }
  }

  strong {
    font-size: 1rem;
    font-weight: 600;
  }

  img.profile {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
`