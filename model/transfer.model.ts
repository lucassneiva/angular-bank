export interface Transfer {
  id?: string | number;
  value: string | number;
  destination_account: string | number;
  data?: Date;
}
