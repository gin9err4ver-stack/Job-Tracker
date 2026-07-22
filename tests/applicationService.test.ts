import { beforeEach, describe, expect, it } from 'vitest';
import { ApplicationStatus } from '../src/models/JobApplication.js';
import {
  addJobApplication,
  clearApplications,
  getApplications,
} from '../src/services/applicationService.js';

describe('Application Service', () => {
  beforeEach(() => {
    clearApplications();
  });

  it('should add a job application', () => {
    addJobApplication({
      id: '1',
      company: 'Joinrs',
      position: 'Graduate Software Engineer',
      location: 'Remote',
      status: ApplicationStatus.Applied,
      dateApplied: new Date(),
    });

    const applications = getApplications();

    expect(applications).toHaveLength(1);
    expect(applications[0]?.company).toBe('Joinrs');
  });

  it('should throw an error when application ID is empty', () => {
    expect(() =>
      addJobApplication({
        id: '',
        company: 'Joinrs',
        position: 'Graduate Software Engineer',
        location: 'Remote',
        status: ApplicationStatus.Applied,
        dateApplied: new Date(),
      })
    ).toThrow('Application ID is required.');
  });

  it('should throw an error when position is empty', () => {
    expect(() =>
      addJobApplication({
        id: '1',
        company: 'Joinrs',
        position: '',
        location: 'Remote',
        status: ApplicationStatus.Applied,
        dateApplied: new Date(),
      })
    ).toThrow('Position is required.');
  });

  it('should throw an error when position is empty', () => {
    expect(() =>
      addJobApplication({
        id: '1',
        company: 'Joinrs',
        position: '',
        location: 'Remote',
        status: ApplicationStatus.Applied,
        dateApplied: new Date(),
      })
    ).toThrow('Position is required.');
  });

  it('should throw an error when location is empty', () => {
    expect(() =>
      addJobApplication({
        id: '1',
        company: 'Joinrs',
        position: 'Graduate Software Engineer',
        location: '',
        status: ApplicationStatus.Applied,
        dateApplied: new Date(),
      })
    ).toThrow('Location is required.');
  });

  it('should throw an error when a duplicate ID is added', () => {
    const application = {
      id: '1',
      company: 'Joinrs',
      position: 'Graduate Software Engineer',
      location: 'Remote',
      status: ApplicationStatus.Applied,
      dateApplied: new Date(),
    };

    addJobApplication(application);

    expect(() => addJobApplication(application)).toThrow(
      'An application with this ID already exists.'
    );
  });
});
