import styled from 'styled-components';

export const Container = styled.div`
  width: 100%; 
`;

export const ContainerFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 18px;

  button{
    background: none;
    border: none;
    }
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  
  a{
    text-decoration: none;
    color: #000000;
  }
`;