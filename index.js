// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count(data) {
    //return the count of numbers in data
    return this.data.length;
  }
  printNumbers() {
    //print the numbers in data
    this.data.forEach((number, index) => {
      const numbers = console.log(`index ${index}: number ${number}`);
      
    } );
    
  }
  odds() {
    //return the odd numbers in data
    const oddNum = this.data.filter((number) => number % 2 !== 0);
    return oddNum;
  }
  evens() {
    //return the even numbers in data
    const evenNum = this.data.filter((number) => number % 2 === 0);
    return evenNum;
  }
  sum() {
    //return the sum of the numbers
    const total = this.data.reduce((element, sum) => element + sum, 0);
    return total;
  }
  product() {
    //return the product of the numbers
    const product = this.data.reduce((element, sum) => element * sum, 1);
    return product;
  }
  greaterThan(target) {
    //return the numbers greater than the target
    const greater = this.data.filter((number) => number > target);
    return greater;
  }
  howMany(target) {
    //return the count of a given number
    const greater = this.data.filter((number) => number === target);
    return greater;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
