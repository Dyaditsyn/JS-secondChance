"use strict";
// BASE
// ----------------------------------------------------------------------------------------------------------------------
// Необхідно написати програму, яка виконує складання чисел від N до M 
// (N та M – задаються користувачем), а також програма має вміти пропускати парні числа. 
// Нижче приведено алгоритм, що потрібно зробити.
// ----------------------------------------------------------------------------------------------------------------------

// Отримайте у користувача число(N) від якого ми будемо складати. 
// Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!

// Перевірте, чи є передане значення N ЦІЛИМ числом. 
// (Підказка: якщо при конвертації в ціле число ми отримали NaN – це число нам не підходить)

// Отримайте у користувача число(M) до якого ми будемо складати (включно). 
// Отримати число можна за допомогою prompt. Пам'ятайте, ЧИСЛО, не РЯДОК!

// Перевірте, чи є передане значення M ЦІЛИМ числом. 
// (Підказка: якщо при конвертації в ціе число ми отримали NaN – це число нам не підходить)

// Отримайте у користувача булевий параметр(true/false), який підкаже нам чи потрібно пропускати парні числа. 
// TRUE – потрібно, FALSE – не потрібно. Використовуйте функцію confirm

// Напишіть цикл, який буде складати числа від раніше отриманих N и M

// В циклі додайте перевірку – чи потрібно пропускати при складанні парні числа. 
// (Використовуйте для цього if/else). Якщо парні числа потрібно пропускати не додавайте їх до суми.

// Виведіть результат

// Приклад: користувач ввів такі значення для N=10, M=100, ПропускатиПарні=TRUE – сума чисел виведена на екрані буде === 2475
// Приклад: користувач ввів такі значення для N=10, M=100, ПропускатиПарні=FALSE – сума чисел виведена на екрані буде === 5005
// Приклад: користувач ввів такі значення для N=1, M=10, ПропускатиПарні=FALSE – сума чисел виведена на екрані буде === 55

const firstNum = numValidation("first");
const secondNum = numValidation("second");

const skipEven = confirm("To skip even numbers for sum?")

const sum = twoWaySum(firstNum, secondNum, skipEven);

console.log(`First number is ${firstNum}
Second number is ${secondNum}
To skip even numbers for sum? ${skipEven}
The sum is ${sum}`);

//---------------------------------------------------------------------------------------------------------------------------

function numValidation(order){

let isNumValid = false;
let input = "";

do{
  input = prompt(`Please enter the ${order} number to sum`);
  if (Number.isInteger(+input) && input != "" && input != " " && input != null) {
    isNumValid = true;
    input = +input;
  }
} while (!isNumValid);

return input;
}


function twoWaySum (num1, num2, cond){

  let sum = 0;

  for (let i = Math.min(num1, num2); i <= Math.max(num1, num2); i++){
    if (cond){
      if( i%2 !==0 ){
        sum += i;
      }
    }
    else{
      sum += i;
    }
  }

  return sum;
}

