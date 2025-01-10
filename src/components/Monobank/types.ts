export interface Transaction {
    trans_id: string;
    trans_type: string;
    trans_amount: string;
    trans_date: number;
}

export interface TransactionType {
    balance: string;
    transaction: Transaction;
    trans_type: string;
}
