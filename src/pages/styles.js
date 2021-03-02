import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 1rem 5rem;
  
  display: flex;
  flex-direction: column;
`

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;
  margin: 100px 0;

`