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
//Index Signature
class IndexedAccount {
}
let indexedAccount = new IndexedAccount();
indexedAccount["name"] = "Alice"; // with the index signature, we can assign any string value to any string key
indexedAccount["email"] = "alice@example.com";
console.log(indexedAccount);
//static members
class StaticAccount {
    static _MAX_BALANCE = 100000; // static properties are shared among all instances of the class
    static _MIN_BALANCE = 0; // and can be accessed using the class name, not an instance.
    static get MAX_BALANCE() {
        return StaticAccount._MAX_BALANCE;
    }
    static get MIN_BALANCE() {
        return StaticAccount._MIN_BALANCE;
    }
}
console.log(StaticAccount.MAX_BALANCE); // 100000
console.log(StaticAccount.MIN_BALANCE); // 0
//Inheritance
class InheritedAccount extends Account {
    constructor(id, owner, _balance) {
        super(id, owner, _balance);
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
}
let inheritedAccount = new InheritedAccount(2, "Bob", 5000);
inheritedAccount.deposit(1000);
console.log(inheritedAccount);
//Method Overriding
class OverriddenAccount extends Account {
    constructor(id, owner, _balance) {
        super(id, owner, _balance);
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
}
let overriddenAccount = new OverriddenAccount(3, "Charlie", 10000);
console.log(overriddenAccount);
//Polymorphism
class PolymorphismAccount extends Account {
    constructor(id, owner, _balance) {
        super(id, owner, _balance);
    }
}
let polymorphismAccount = new PolymorphismAccount(4, "David", 15000);
console.log(polymorphismAccount);
//Abstract classes
class AbstractAccount {
    id;
    owner;
    _balance;
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
// Concrete implementation of the AbstractAccount class
class ConcreteAccount extends AbstractAccount {
    withdraw(amount) {
        this.balance -= amount;
    }
}
let concreteAccount = new ConcreteAccount(5, "Eve", 20000);
console.log(concreteAccount);
concreteAccount.deposit(5000);
console.log(concreteAccount);
concreteAccount.withdraw(1000);
console.log(concreteAccount);
let account1 = {
    id: 1,
    owner: "Alice",
    balance: 1000,
};
console.log(account1);
//# sourceMappingURL=objectOriented.js.map