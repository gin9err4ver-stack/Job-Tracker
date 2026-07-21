import { ApplicationStatus } from './models/JobApplication.js';
import type { JobApplication } from './models/JobApplication.js';

const application: JobApplication = {
  id: '1',
  company: 'Joinrs',
  position: 'Graduate Software Engineer',
  location: 'Remote',
  status: ApplicationStatus.Applied,
  dateApplied: new Date(),
};

console.log(application);

console.log('Job Tracker initialised!');
