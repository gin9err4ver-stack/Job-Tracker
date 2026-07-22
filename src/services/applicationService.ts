import type { JobApplication } from '../models/JobApplication.js';

const applications: JobApplication[] = [];

export function addJobApplication(application: JobApplication): void {
  if (!application.company.trim()) {
    throw new Error('Company name is required.');
  }

  if (!application.id.trim()) {
    throw new Error('Application ID is required.');
  }

  if (!application.position.trim()) {
    throw new Error('Position is required.');
  }

  if (!application.location.trim()) {
    throw new Error('Location is required.');
  }

  if (applications.some((item) => item.id === application.id)) {
    throw new Error('An application with this ID already exists.');
  }

  applications.push(application);
}

export function getApplications(): JobApplication[] {
  return applications;
}

export function clearApplications(): void {
  applications.length = 0;
}
