import BankAccountView from "./api/BankAccountView";
import Categories from "./Categories";

class Transaction implements JSONSerializable {
  private readonly _account: BankAccountView;
  private readonly _amount: number;
  private readonly _store: string;
  private readonly _date: Date;
  private readonly _category: Categories;

  constructor(account: BankAccountView, amount: number, store: string, date: Date, category: Categories) {
    this._account = account;
    this._amount = amount;
    this._store = store;
    this._date = date;
    this._category = category;
  }

  get account(): BankAccountView {
    return this._account;
  }

  get amount(): number {
    return this._amount;
  }

  get store(): string {
    return this._store;
  }

  get date(): Date {
    return this._date;
  }

  get category(): Categories {
    return this._category;
  }

  toJSON(): object {
    return {
      account: this._account.uuid,
      amount: this._amount,
      store: this._store,
      date: this._date,
      category: this._category
    };
  }
}

export default Transaction;