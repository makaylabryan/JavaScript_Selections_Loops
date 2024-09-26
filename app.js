console.log("Hello World!\n==========\n");

// Exercise 1 Section

/*for (let oneToHundred = 1; oneToHundred <= 100; oneToHundred++)
{
    if (oneToHundred % 2 != 0) {
        continue;
    }
    else
    {
        console.log(oneToHundred);
    }
}

console.log("EXERCISE 1:\n==========\n");
*/
// Exercise 2 Section

/*for (let oneToHundred = 1; oneToHundred <= 100; oneToHundred++)
{
    if (oneToHundred % 3 == 0 && oneToHundred % 5 != 0)
    {
        console.log("Fizz");
        continue;
    }

    if (oneToHundred % 5 == 0 && oneToHundred % 3 != 0)
    {
        console.log("Buzz");
        continue;
    }

    if (oneToHundred % 3 == 0 && oneToHundred % 5 == 0)
    {
        console.log("FizzBuzz");
        continue;
    }

    else (oneToHundred % 3 != 0 && oneToHundred % 5 != 0)
    {
        console.log(oneToHundred);
    }
      
 }


console.log("EXERCISE 2:\n==========\n");
 */
// Exercise 3 Section

// while loop

/*let oneToHundred = 0;

while (oneToHundred <= 100)
{
    console.log(oneToHundred);
    oneToHundred++;
}


while (oneToHundred <= 99)
{
    oneToHundred++; 

    if (oneToHundred % 3 == 0 && oneToHundred % 5 != 0)
    {
        console.log("Fizz");
        //continue;
    }

    if (oneToHundred % 5 == 0 && oneToHundred % 3 != 0) {
        console.log("Buzz");
        //continue;
    }

    if (oneToHundred % 3 == 0 && oneToHundred % 5 == 0) {
        console.log("FizzBuzz");
        //continue;
    }

    if (oneToHundred % 3 != 0 && oneToHundred % 5 != 0)
    {
        console.log(oneToHundred);
    }
}
*/

// Do/while loop

/*let oneToHundred = 1;

do
{
    console.log(oneToHundred);
    oneToHundred++;
}
while (oneToHundred <= 100);


let oneToHundred = 0;

do {
    oneToHundred++;

    if (oneToHundred % 3 == 0 && oneToHundred % 5 != 0) {
        console.log("Fizz");
        //continue;
    }

    if (oneToHundred % 5 == 0 && oneToHundred % 3 != 0) {
        console.log("Buzz");
        //continue;
    }

    if (oneToHundred % 3 == 0 && oneToHundred % 5 == 0) {
        console.log("FizzBuzz");
        //continue;
    }

    if (oneToHundred % 3 != 0 && oneToHundred % 5 != 0) {
        console.log(oneToHundred);
    }
}
while (oneToHundred <= 99);
*/

// Exercise 4
/*
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let iteration = 0; iteration <= n; iteration++)
{
    if (iteration == value)
    {
        console.log('Found value!');
        console.log(value);
        break;
    }
    if (iteration == n)
    {
        console.log('Did not find value.');
        console.log("Value is " +  value );
        console.log("Max is " + n);
    }
}
*/

// Exercise 5

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= n; i++)
{
    if (i % fizzDivisor == 0 && i % buzzDivisor != 0)
    {
        console.log("Fizz");
        continue;
    }

    if (i % buzzDivisor == 0 && i % fizzDivisor != 0)
    {
        console.log("Buzz");
        continue;
    }

    if (i % fizzDivisor == 0 && i % buzzDivisor == 0)
    {
        console.log("FizzBuzz");
        continue;
    }

    else (i % fizzDivisor != 0 && i % buzzDivisor != 0)
    {
        console.log(i);
    }

}
