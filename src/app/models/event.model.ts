import { Address } from './address.model';
import { Item } from './item.model';
export interface Event {
 
  id?: number;
  name: string;
  description: string;
  image: string;
  address: Address;
  status: boolean;
  startDate: Date;
  endDate: Date;  
  item?: Item;

}


