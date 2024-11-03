// import { v4 as uuidv4 } from 'uuid';
import BankAccountView from './api/BankAccountView';

class BankAccount implements BankAccountView {
  public readonly uuid: string;
  private _balance: number;

  constructor(balance: number = 0) {
    this.uuid = "TODO"; // TODO uuidv4(); does not work
    this._balance = balance;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
    } else {
      throw new Error("Deposit amount must be positive");
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
    } else {
      throw new Error("Invalid withdraw amount");
    }
  }

  get balance(): number {
    return this._balance;
  }
}

export default BankAccount;