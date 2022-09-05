export interface Transfer {
  id?: string | number;
  value: number;
  destination_account: string;
  data?: Date;
}
