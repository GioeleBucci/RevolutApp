import BankAccountView from "./api/BankAccountView";

class Transfer {
  private readonly _from: BankAccountView;
  private readonly _to: BankAccountView;
  private readonly _amount: number;

  constructor(from: BankAccountView, to: BankAccountView, amount: number) {
    if (amount < 0) {
      throw new Error("Transfer amount must be positive");
    }
    this._from = from;
    this._to = to;
    this._amount = amount;
  }

  get from(): BankAccountView {
    return this._from;
  }

  get to(): BankAccountView {
    return this._to;
  }

  get amount(): number {
    return this._amount;
  }
}

export default Transfer;