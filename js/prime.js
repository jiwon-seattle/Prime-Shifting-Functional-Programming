/*
OBJ: 
Given a number, write a method that returns all of the prime numbers less than that number.

1. Create a list of numbers from 2 through n: 2, 3, 4, ..., number.
2. Initially, let prime equal 2, the first prime number.
3. Starting from prime, remove all multiples of prime from the list.
4. Increment prime by 1.
5. When you reach number, all the remaining numbers in the list are primes.
*/

///////////////////////// iterative programming /////////////////////////

// function Prime(number){
//   arr = []
//   for (i = 2; i < number; i++)
//   arr.push(i);
//   console.log('arr is ' + arr)

//   for(j = 0; j < arr.length; j++)
//   {
//     for (x = 1; x < arr.length; x++)
//     {
//       if(arr[x] == arr[j])
//       {
//         continue;
//       }
//       else if (arr[x] % arr[j] === 0 )
//       {
//         console.log('j is ' + j)
//         arr.splice(x, 1);
//         console.log(arr);
//       }
//     } 

//   } return arr;
// }

///////////////////////// fuctional programming /////////////////////////

$(document).ready(function() {
  $("#input-form").submit(function(event) {
      event.preventDefault();

      var number = $("#user-input").val();

      function Prime(number, index = 2, Arr = []) {
          if (index == number) return Arr;
          else {
              return Prime(number, index + 1, [...Arr, index]);
          }
      }

      const PrimeCheck = (number, counter = 0) => {
          var Arr = Prime(number);
          if (counter == Arr.length - 1)
              return Arr
          else {
              return function PrimeInnercheck(innerCounter = 1) {
                  if (counter >= Arr.length) {
                      return Arr;
                  }
                  if (innerCounter >= Arr.length) {
                      counter += 1;
                      return PrimeInnercheck(counter + 1);
                  } else {
                      console.log('first inner counter' + innerCounter);
                      console.log('first counter' + counter);
                      console.log(Arr);
                      if (Arr[innerCounter] % Arr[counter] == 0 && Arr[counter] != Arr[innerCounter]) {
                          Arr.splice(innerCounter, 1);
                          console.log('second innercounter ' + innerCounter);
                          console.log('second counter ' + counter)
                          return PrimeInnercheck(innerCounter + 1);
                      } else {
                          return PrimeInnercheck(innerCounter + 1);
                      }
                  }
              }
          }
      }

      var result = PrimeCheck(number)();
      $("#result").text(result);
  });
});