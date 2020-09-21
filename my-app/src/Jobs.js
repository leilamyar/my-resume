import React from 'react'
import { 
  JobsContainerStyled, 
  JobsList,
  JobItem, JobTitle 
} from './JobsStyled'
const jobs = require('./data/jobs.json');

const Jobs = () => {
  return (
    <JobsContainerStyled>
      <JobsList>
      {jobs.map(({ id, jobTitle, employer }) => (
        <JobItem key={id}>
          <JobTitle>{jobTitle}</JobTitle>
          <div>{employer}</div>
        </JobItem>
      ))}
      </JobsList>
    </JobsContainerStyled>
  )
}

export default Jobs;
