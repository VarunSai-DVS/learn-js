this.firstName = "VV"
const person = {
 firstName: 'Grace',
 lastName: 'Hopper',
 age: 89,
 fullName: () => { return this.firstName + ' ' + this.lastName }
}

p = {
 firstName: "V",
 lastName: "S"
}
let x = person.fullName();
console.log(x);
