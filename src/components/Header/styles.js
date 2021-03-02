import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px;
  background-color: var(--blue);
  color: #fff;
  box-shadow: 0px 2px 7px 0 rgb(147 163 255);


`
export const Logo = styled.div` 
  width: 15%;
  
  img {
    width: 100%;
  }
`

export const XPBar = styled.div`
  width: 55%;
  display: flex;
  align-items: center;
  font-size: 1rem;


  & > div {
    flex: 1;
    height: 10px;
    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
    position: relative;
  }

  .percentualBar {
    height: 10px;
    border-radius: 4px;
    background: var(--green);
   
  }

  .XP {
    width: 30px;
    height: 30px;
    margin-top: -20px;

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

  strong {
    font-size: 0.8rem;
    font-weight: 600;
  }

  img.profile {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 1rem;
  }

  svg {
    width: 12px;
    margin-left: 0.5rem;
    cursor: pointer;
  }
`

export const Level = styled.div`
  font-size: 1rem;

  img {
    margin-right: 0.5rem;
  }
`