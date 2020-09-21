import React from 'react';
import {
  JobsStyled, 
  JobsTimelineStyled,
  JobItemStyled,
  JobTitleStyled,
  JobDetailsStyled,
  JobTasksStyled,
  TaskItemStyled,
} from './JobsStyled';

const jobs = require('./data/jobs.json');

const Jobs = () => {
  return (
    <JobsStyled>
      <JobsTimelineStyled>
      {jobs.map(({ id, jobTitle, employer, jobPlace, tasks }) => (
        <JobItemStyled key={id}>
          <JobTitleStyled>{jobTitle}</JobTitleStyled>
          <JobDetailsStyled>{employer} - {jobPlace}</JobDetailsStyled>
          {tasks.map((task, index) => (
          <JobTasksStyled key={index}>
            <TaskItemStyled>{task}</TaskItemStyled>
          </JobTasksStyled>
          ))}
        </JobItemStyled>
      ))}
      </JobsTimelineStyled>
    </JobsStyled>
  )
}

export default Jobs;
