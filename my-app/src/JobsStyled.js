import styled from 'styled-components';

export const JobsStyled = styled.div`
  width: 400px;
  margin: 30px auto;
`;

export const JobsTimelineStyled = styled.ul`
  list-style-type: none;
  width: fit-content;
  font-family: 'Arial', sans-serif;
  list-style: none;
`;

export const JobItemStyled = styled.li`
  border-left: 3px solid;
  background-color: whitesmoke;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  text-align: left;
  margin-top: 20px;
`;

export const JobTitleStyled = styled.div`
  font-weight: bolder;
  padding: 5px;
`;

export const JobDetailsStyled = styled.div`
  padding-left: 10px;
  padding-bottom: 5px;
  font-size: smaller;
  font-style: italic;
`;

export const JobTasksStyled = styled.ul`
  list-style-type: none;
  margin-left: 0;
  padding-left: 5px;
  font-size: smaller;
`;

export const TaskItemStyled = styled.li`
  ::before {
    display: inline-block;
    content: "-";
    width: 1em;
  }
`;