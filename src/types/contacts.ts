export interface Contact {
  id: string;
  name: string;
  role: string;
  email: string;
  location: string;
  phone: string;
  avatar?: string;
  birthday?: string;
  favoriteIds?: string[]; 
}

export interface ContactFormValues {
  avatar: string;
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  jobTitle: string;
  address: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  notes: string;
}