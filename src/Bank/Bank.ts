//You have been asked to create a banking application
//The bank can keep track of how much money it has, and how much it has loaned.
//Customers have a saving account, checking account, and need to be able to transfer money between the two.
//Customers need to be able to deposit and withdraw money
//Customers can also take out loans from the bank, and need to be able to view them
//The interest rate starts at 2.5% and doubles for every additional loan a customer takes out (but the other loans stay the same: loan 1 2.5%, loan 2 is 5%, etc)
//Robbers can come in an rob a customer at random (empty their accounts)
//Robinhood can come in and relieve a customer of their loans at random

export class Bank{
  totalMoney:number;
  totalLoaned:number;

  constructor(startingAmount:number){
    this.totalMoney = startingAmount;
    this.totalLoaned = 0;
  }
}

export class Customer{
  name: string;
  checkingTotal: number;
  savingsTotal: number;
  loanedAmount: number;

  constructor(name:string){
    this.name = name;
    this.checkingTotal = 0;
    this.savingsTotal = 0;
    this.loanedAmount = 0;
  }

  deposit(account:string, a:number){
    if(account == "checking"){
      this.checkingTotal += a;
    }
    else if(account == "savings"){
      this.savingsTotal += a;
    }
  }
  withdraw(account:string, a:number){
    if(account == "checking"){
      this.checkingTotal -= a;
    }
    else if(account == "savings"){
      this.savingsTotal -= a;
    }
  }
  transferCheckingToSavings(a:number){
    this.checkingTotal -= a;
    this.savingsTotal += a;
  }

  transferSavingsToChecking(a:number){
    this.savingsTotal -= a;
    this.checkingTotal += a;
  }

  takeoutLoan(a:number){
    this.loanedAmount += a;
  }
}