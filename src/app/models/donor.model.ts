import { Address } from './address.model';
export interface Donor {
 
  id?: number;
  name: string;
  surname?: string;
  address: Address;
  phone: string;
  email: string;  
}
