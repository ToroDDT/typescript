function addNumbers(x: number, y: number) {
  return x + y;
}
console.log(addNumbers(3, 6));

let x: number;
x = 1;
let y = 1;
let z;

enum ContractStatus {
  Permanent,
  Temp,
  Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
let randomValue: unknown = 10;
randomValue = true;
randomValue = "Mateo";

console.log(randomValue.name); // Error: Object is of type unknown
randomValue(); // Error: Object is of type unknown
randomValue.toUpperCase(); // Error: Object is of type unknown
