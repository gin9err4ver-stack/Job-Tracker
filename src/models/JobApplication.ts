export enum ApplicationStatus {
  Applied = 'Applied',
  Interview = 'Interview',
  Rejected = 'Rejected',
  Offer = 'Offer',
}

export interface JobApplication {
  id: string;
  company: string;
  position: string;
  location: string;
  status: ApplicationStatus;
  dateApplied: Date;
  salary?: number;
  notes?: string;
}
