import axios from "axios";
const url = "http://192.168.30.11:4500";

export type TransactionType = "debit" | "credit"; //debit-withdraw credit-deposit
type Service = "mps" | "jen";
/**
 * rtgs => send money to local kenya bank account using rtgs ||
 * swift => send money to global accounts using swift ||
 * kyc => know your customer ||
 * equity => send money to equity bank account ||
 * placc => send money to another bank account using pesa link bank ||
 * plmb => send money to mobile number using pesa link mobile
 */
export type ServiceId =
  | "express"
  | "rtgs"
  | "swift"
  | "kyc"
  | "equity"
  | "placc"
  | "plmb"
  | "mbwt";
// p3: { bankCode: "06", accNo: "12345", amt: "", fee: "" },

export interface TransactionBody {
  walletId: number; //wallet ID
  comment: string;
  transactionType: TransactionType; //transaction type: debit or credit
  service: Service;
  serviceId: ServiceId;
  serviceBody: any;
}

interface jen {
  amount: number;
  comment: string;
  appId: string;
  phoneNumber: string;
  walletId: number;
  accountNumber: string;
}
export interface walletInterface {
  id: number;
  userId: string;
  balance: number;
  currency: {
    countryName: string;
    currencyCode: string;
    countryCode: string;
  };
}

export interface transaction {
  transactionId: number;
  transactionType: string;
  walletId: number;
  amount: number;
  cost: number;
  comment: string;
  balance: number;
  accNumber: string;
  con: Date;
  valueTime: Date;
}

export const createWallet = async (userId: string) => {
  const wallet = await axios.post(`${url}/wallet`, {
    userId: userId,
    currencyId: 1,
  });

  const walletData = wallet.data;

  return walletData;
};

export const fetchWallet = async (): Promise<walletInterface> => {
  const wallet = await axios.post(`${url}/fetchWallet`, { userId: "2" });

  const walletData = wallet.data;

  if (walletData !== undefined) {
  }
  return walletData;
};

export const requestPayment = async (reqData: TransactionBody) => {
  const reqPayment = await axios.post(`${url}/mpsTransaction`, reqData);

  const reqPaymentData = reqPayment.data;
  return reqPaymentData;
};

export const withDraw = async (data: jen) => {
  const withdraw = await axios.post(`${url}/jenTransaction`, data);

  const withdrawData = withdraw.data;

  return withdrawData;
};

export const fetchRecentTransaction = async (
  walletId: number
): Promise<transaction[]> => {
  const result = await axios.post(`${url}/fetchRecenttransactions`, {
    n: 10,
    walletId: 3,
  });

  const results = result.data;

  if (results === undefined) {
  }
  return results;
};
