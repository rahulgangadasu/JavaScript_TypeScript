class Account {
  readonly id: number; // readonly means that the id property can only be assigned once,
  //  either at the time of declaration or within the constructor. After that, it cannot be changed.
  owner: string;
  private _balance: number; // private means that the _balance property can only be accessed and
  // modified within the Account class.
  nickname?: string; // The nickname property is optional, meaning it can be undefined in constructor.
  //constructor(public id: number, public owner: string, private _balance: number) {
  // parameters are automatically declared as properties of the class.
  //}
  constructor(id: number, owner: string, _balance: number) {
    this.id = id;
    this.owner = owner;
    this._balance = _balance;
  }
  deposit(amount: number): void {
    this._balance += amount;
  }
  get balance(): number {
    return this._balance;
  }
  set balance(_balance: number) {
    this._balance = _balance;
  }
}

let account = new Account(1, "Rahul", 1000);
console.log(account);
console.log("Type of account: " + typeof account); // Type of account: object,
// because in JavaScript, all instances of classes are of type 'object'.
console.log(
  "Is account an instance of Account? " + (account instanceof Account), // Is account an instance of Account? true,
  //  because the account object was created with the Account constructor.
);

console.log("Account balance: " + account.balance); //balance is accessed using the getter method,
// which returns the current balance of the account.
account.balance = 2000; //balance is modified using the setter method,
// which updates the current balance of the account.
console.log("Account balance: " + account.balance); // The updated balance is accessed using the getter method.
