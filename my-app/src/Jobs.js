import React from 'react';
import {
  JobsStyled, 
  JobsTimelineStyled,
  JobItemStyled,
  JobTitleStyled,
} from './JobsStyled';

const jobs = require('./data/jobs.json');

const Jobs = () => {
  return (
    <JobsStyled>
      <JobsTimelineStyled>
      {jobs.map(({ id, jobTitle, employer, jobPlace }) => (
        <JobItemStyled key={id}>
          <JobTitleStyled>{jobTitle}</JobTitleStyled>
          <div>{employer} - {jobPlace}</div>
        </JobItemStyled>
      ))}
      </JobsTimelineStyled>
    </JobsStyled>
  )
}

export default Jobs;
