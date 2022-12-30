import axios from "axios";

interface mps {
  amount: number;
  fee: number;
  comment: string;
  appId: string;
  phoneNumber: string;
  walletId: number;
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
  UserId: string;
  currencyId: number;
  balance: number;
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
  const wallet = await axios.post("http://192.168.86.11:8000/wallet", {
    userId: userId,
    currencyId: 1,
  });

  const walletData = wallet.data;

  return walletData;
};

export const fetchWallet = async (
  walletId: number
): Promise<walletInterface> => {
  const wallet = await axios.get(
    `http://192.168.86.11:8000/wallet/${walletId}`
  );

  const walletData = wallet.data;

  if (walletData !== undefined) {
  }
  return walletData;
};

export const requestPayment = async (reqData: mps) => {
  const reqPayment = await axios.post(
    "http://192.168.86.11:8000/mpsTransaction",
    reqData
  );

  const reqPaymentData = reqPayment.data;
  return reqPaymentData;
};

export const withDraw = async (data: jen) => {
  const withdraw = await axios.post(
    "http://192.168.86.21:8000/jenTransaction",
    data
  );

  const withdrawData = withdraw.data;

  return withdrawData;
};

export const fetchRecentTransaction = async (
  walletId: number
): Promise<transaction[]> => {
  const result = await axios.post(
    "http://192.168.86.11:8000/fetchRecenttransactions",
    { n: 10, walletId }
  );

  const results = result.data;

  if (results === undefined) {
  }
  return results;
};
