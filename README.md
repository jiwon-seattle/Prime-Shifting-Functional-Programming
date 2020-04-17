# [Prime Sifting](https://github.com/jiwon-seattle/Prime-Shifting-Functional-Programming.git)

#### Functional programming exercise at [Epicodus](https://www.epicodus.com/), 04.16.2020

#### By **Jiwon Han**

## Description

**Using the Sieve of Eratosthenes and recursion, given a number, write a method that returns all of the prime numbers less than that number.**

## Specs

A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers. A natural number greater than 1 that is not prime is called a composite number. For example, 5 is prime because the only ways of writing it as a product, 1 × 5 or 5 × 1, involve 5 itself.

Find a number up to a given number:

1. Create a list of numbers from 2 through n: 2, 3, 4, ..., number.
2. Initially, let prime equal 2, the first prime number.
3. Starting from prime, remove all multiples of prime from the list.
4. Increment prime by 1.
5. When you reach number, all the remaining numbers in the list are primes.


## Comments on Functional Programming

I encountered many erros regarding maximum call stack excess. When calling a certain much amount of iteration, I would use iterative function such as for loop. It also takes longer than iterative method.

## Screenshots

<image src="js\prime1.png" width="750px" />
<image src="js\prime3.png" width="750px" />
<image src="js\prime2.png" width="750px" />

## Setup/Installation Requirements

- Clone this [repository](https://github.com/jiwon-seattle/Prime-Shifting-Functional-Programming.git) 
- Open Index.html with internet browser

## Known Bugs

No known bugs at this time.

## Support and contact details

Email jiwon1.han@gmail.com with any questions, feedbacks, or concerns.

## Technologies Used

- Webpack
- Node.js

### License

This console application is licensed under the MIT license.

Copyright (c) 2020 **Jiwon Han**
