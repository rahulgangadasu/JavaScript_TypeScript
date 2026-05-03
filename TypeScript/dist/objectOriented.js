"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id; // readonly means that the id property can only be assigned once,
    //  either at the time of declaration or within the constructor. After that, it cannot be changed.
    owner;
    _balance; // private means that the _balance property can only be accessed and
    // modified within the Account class.
    nickname; // The nickname property is optional, meaning it can be undefined in constructor.
    //constructor(public id: number, public owner: string, private _balance: number) {
    // parameters are automatically declared as properties of the class.
    //}
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
    set balance(_balance) {
        this._balance = _balance;
    }
}
let account = new Account(1, "Rahul", 1000);
console.log(account);
console.log("Type of account: " + typeof account); // Type of account: object,
// because in JavaScript, all instances of classes are of type 'object'.
console.log("Is account an instance of Account? " + (account instanceof Account));
console.log("Account balance: " + account.balance); //balance is accessed using the getter method,
// which returns the current balance of the account.
account.balance = 2000; //balance is modified using the setter method,
// which updates the current balance of the account.
console.log("Account balance: " + account.balance); // The updated balance is accessed using the getter method.
//# sourceMappingURL=objectOriented.js.map