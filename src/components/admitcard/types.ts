// components/AdminAdmitCardSystem/types.ts

export interface Student {
  rollNumber: string;
  name: string;
  class: string;
  section: string;
  dob: string;
  photo: null | string;
}

export interface TimetableItem {
  date: string;
  time: string;
  subject: string;
  code: string;
}
