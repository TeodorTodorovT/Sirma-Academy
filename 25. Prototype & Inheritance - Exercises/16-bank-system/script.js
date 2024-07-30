class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}.`);
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}.`);
        } else {
            console.log(`Insufficient funds. Withdrawal of $${amount} denied.`);
        }
    }

    getBalance() {
        return this.balance;
    }
}

class SavingsAccount extends BankAccount {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }

    applyInterest() {
        const interest = this.balance * (this.interestRate / 100);
        this.balance += interest;
        console.log(
            `Applied interest of $${interest}. New balance: $${this.balance}.`
        );
    }
}

class CheckingAccount extends BankAccount {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (this.balance + this.overdraftLimit >= amount) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.balance}.`);
        } else {
            console.log(
                `Overdraft limit exceeded. Withdrawal of $${amount} denied.`
            );
        }
    }
}

// Example usage
const savings = new SavingsAccount('SA123', 1000, 5);
const checking = new CheckingAccount('CA123', 500, 200);

savings.deposit(200);
savings.applyInterest();
savings.withdraw(300);
console.log(`Savings Account Balance: $${savings.getBalance()}`);

checking.deposit(100);
checking.withdraw(700);
checking.withdraw(50);
console.log(`Checking Account Balance: $${checking.getBalance()}`);
