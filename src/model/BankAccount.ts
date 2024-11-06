import uuid from 'react-native-uuid';
import BankAccountView from './api/BankAccountView';

class BankAccount implements BankAccountView, JSONSerializable {
  private readonly _uuid: string;
  private _balance: number;

  private static generateID(length = 16): string {
    return Array.from({ length }, () => Math.random().toString(36).charAt(2)).join('').toUpperCase();
  }

  constructor(balance: number = 0) {
    this._uuid = BankAccount.generateID();
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
    return {
      id: this.uuid,
      balance: this.balance
    };
  }
}

export default BankAccount;