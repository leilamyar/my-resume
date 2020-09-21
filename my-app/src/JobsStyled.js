import styled from 'styled-components';

export const JobsContainerStyled = styled.div`
  width: 400px;
  margin: 30px auto;
`;

export const JobsList = styled.ul`
  list-style: none;
  padding: 0px 20px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top: 3px solid;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

export const JobItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px 0px;
  border-top: 1px solid;
  :first-of-type {
    border-top: none;
  }
`;

export const JobTitle = styled.span`
  font-size: 18px;
  color: black;
  margin-bottom: 5px;
`;