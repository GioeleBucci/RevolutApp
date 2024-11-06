import BankAccountView from "./api/BankAccountView";
import Categories from "./Categories";

class Transaction implements JSONSerializable {
  private readonly _source: string;
  private readonly _destination: string;
  private readonly _amount: number;
  private readonly _date: Date;
  private readonly _category: Categories;
  private _messsage: string = "";

  constructor(source: string, destination: string, amount: number, date: Date, category: Categories, message: string) {
    this._source = source;
    this._amount = amount;
    this._destination = destination;
    this._date = date;
    this._category = category;
    this._messsage = message;
  }

  get source(): string {
    return this._source;
  }

  get destination(): string {
    return this._destination;
  }

  get amount(): number {
    return this._amount;
  }

  get date(): Date {
    return this._date;
  }

  get category(): Categories {
    return this._category;
  }

  get message(): string {
    return this._messsage;
  }

  toJSON(): object {
    const json: any = {
      account: this._source,
      destination: this._destination,
      amount: this._amount,
      date: this._date,
      category: this._category
    };
    if (this._messsage) {
      json.message = this._messsage;
    }
    return json;
  }
}

export default Transaction;