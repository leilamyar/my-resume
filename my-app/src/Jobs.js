import React from 'react'
import { JobsContainerStyled } from './JobsStyled'
const jobs = require('./data/jobs.json');

const Jobs = () => {
  return (
    <JobsContainerStyled>${JSON.stringify(jobs)}</JobsContainerStyled>
  )
}

export default Jobs;
