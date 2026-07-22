import { ApplicationStatus } from './models/JobApplication.js';
import type { JobApplication } from './models/JobApplication.js';
import {
  addJobApplication,
  getApplications,
} from './services/applicationService.js';

const application: JobApplication = {
  id: '1',
  company: 'Joinrs',
  position: 'Graduate Software Engineer',
  location: 'Remote',
  status: ApplicationStatus.Applied,
  dateApplied: new Date(),
};

addJobApplication(application);

console.log(getApplications());
console.log('Job Tracker initialised!');
