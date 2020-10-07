export interface IUser {
  _id: string;
  name: string;
}
export interface IAd {
  title: string;
  category:string;
  description:string;
  _id: string;
  user: IUser;
  favorite?: boolean;
  date: Date;
}

