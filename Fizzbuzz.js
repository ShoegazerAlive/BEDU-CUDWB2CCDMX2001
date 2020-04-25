/* 
  RETO: FizzBuzz

  Dado un número entre 1 y 100,
    Si el número es divisible entre 3 entonces "Fizz"
    Si el número es divisible entre 5 entonces "Buzz"
    Si el número es divisible entre 3 y 5 entonces "FizzBuzz"

  function fizzbuzz(n) {

  }

  fizzbuzz(1); ""
  fizzbuzz(2); ""
  fizzbuzz(3); "Fizz"
  fizzbuzz(4): ""
  fizzbuzz(5); "Buzz"
  fizzbuzz(15); "FizzBuzz"
*/

for (var n=15; n < 101;){
    if (n % 15 == 0) console.log("FizzBuzz");
    else if (n % 3 == 0) console.log("Fizz");
    else if (n % 5 == 0) console.log("Buzz");
    else console.log(n);
}