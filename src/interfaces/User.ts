import {Roles} from "@/interfaces/Roles";

export interface User{
  user_id: number,
  first_name: string,
  middle_name: string | null,
  last_name: string,
  email: string,
  phone: string,
  postal_address: string,
  physical_address: string,
  token: string,
  role: Roles
}