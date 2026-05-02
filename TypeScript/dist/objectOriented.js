"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    owner;
    balance;
    constructor(id, owner, balance) {
        this.id = id;
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
}
let account = new Account(1, "Rahul", 1000);
console.log(account);
console.log("Type of account: " + typeof account);
console.log("Is account an instance of Account? " + (account instanceof Account));
//# sourceMappingURL=objectOriented.js.map