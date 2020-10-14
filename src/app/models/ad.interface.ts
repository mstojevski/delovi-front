export interface IContact {
  name: string;
  phone: string;
  email:string;
  city: string;
  _id: string;
}
export interface IAd {
  title: string;
  category:string;
  description:string;
  _id: string;
  favorite: boolean;
  brand: string;
  price: number;
  sold:boolean;
  model: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
  year: number;
  user: IContact
}

