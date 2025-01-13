export interface Transaction {
  _id: string;
  collect_id: string;
  status: 'SUCCESS' | 'PENDING' | 'FAILURE';
  payment_method: string;
  gateway: string;
  transaction_amount: number;
  bank_reference: string;
}

export interface TransactionDetails {
  _id: string;
  school_id: string;
  trustee_id: string;
  gateway: string;
  order_amount: number;
  custom_order_id: string;
}

export interface School {
  _id: string;
  name: string;
}
