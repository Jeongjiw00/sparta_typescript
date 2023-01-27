interface BankAccount {
  accountNumber: string;
  balance: bigint;
}

const myAccount: Readonly<BankAccount> = {
  accountNumber: "1234",
  // balance: BigInt(Number.MAX_SAFE_INTEGER),
  balance: BigInt(10000000),
};

// 컴파일되지 않습니다
// myAccount.accountNumber = "123"; // ❌ Cannot assign to 'accountNumber' because it is a read-only property.
// myAccount.balance = BigInt(Number.MIN_VALUE); // ❌ Cannot assign to 'balance' because it is a read-only property.
// myAccount.balance = BigInt(2315161);
console.log(myAccount);
