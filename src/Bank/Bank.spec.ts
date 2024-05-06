import {Bank, Customer} from './Bank'

describe("Bank", () => {
  test("Create a bank with starting amount", () => {
    const newBank = new Bank(1500);
    expect(newBank.totalMoney).toEqual(1500);
  })

  test("have a customer deposit and withdraw from their account", () => {
    const newCustomer = new Customer("John Doe");
    newCustomer.deposit(3000);

    expect(newCustomer.checkingTotal).toEqual(3000)
  })
})