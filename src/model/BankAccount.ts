import uuid from 'react-native-uuid';
import BankAccountView from './api/BankAccountView';

class BankAccount implements BankAccountView {
  private readonly _uuid: string;
  private _balance: number;

  constructor(balance: number = 0) {
    this._uuid = uuid.v4() as string;
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

  get uuid(): string {
    return this._uuid;
  }

  toJSON() {
    // Only include properties you want in the JSON
    return {
      uuid: this.uuid,
      balance: this.balance
    };
  }
}

export default BankAccount;