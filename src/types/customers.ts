export type CustomerStatus = "Active" | "Blocked";

export interface Customer {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  location: string;
  phone: string;
  date: string;
  status: CustomerStatus;
}

export type CustomerTab = "all" | "active" | "blocked";

export interface CustomerTabCounts {
  all: number;
  active: number;
  blocked: number;
}

export interface CustomerAddress {
  address: string;
  city: string;
  state: string;
  country: string;
  postcode: string;
}

export interface CustomerPayment {
  cardholderName: string;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

export interface CustomerFormValues {
  avatar: string; 
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  phone: string;
  status: CustomerStatus;
  address: CustomerAddress;
  payment: CustomerPayment;
}