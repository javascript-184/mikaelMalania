class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }

    getBalance() {
        return this._balance;
    }

    deposit(amount) {
        this._balance += amount;
    }
}

const account = new BankAccount(2000);
account.deposit(200);
account.deposit(200);
account.deposit(200);

console.log(account._balance);  

class PrivateBankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        this.#balance += amount;
    } 
}

const privateAccount = new PrivateBankAccount(1000);

console.log(privateAccount.getBalance());

// console.log(privateAccount)