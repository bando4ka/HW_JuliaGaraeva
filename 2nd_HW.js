﻿//Part 1
//Чему равно а, почему?

//1
let a = 0 || 'string';
console.log(a);
//Ответ "string"

/*Возвращает первый операнд, если он может быть преобразован в true; в противном случае возвращает второй операнд. Таким образом, при использовании булевых величин в качестве операндов, оператор || возвращает true, если один из операндов true; если же оба false, то возвращает false. В нашем случае 0 возвращает false, 'string' не пустая строка, поэтому возвращает  true, поэтому получаем в ответе "string". */


//2
let a = 1 && 'string';
console.log(a);
//Ответ "string"

/*Возвращает первое значение, если оно может быть преобразовано в false; иначе возвращает второе значение. Таким образом, при использовании с величинами типа Boolean оператор && вернет true, если оба операнда могут быть преобразованы в true; иначе оператор && вернет false. И 1 и 'string' возвращают true, но первое значение 1 не преобразуется в false, поэтому 1 будет проигнорирован и в в ответе получим второе значение"string" */

//3
let a = null || 25;
console.log(a);
//Ответ 25

/*Как и в первом примере null может быть преобразован в false, поэтому возвращает в ответе второе значение 25, которое может быть преобразовано в true.*/

//4
let a = null && 25;
console.log(a);
//Ответ null

/*Возвращает значение, которое может быть преобразовано в false. Так как выражение null && 25 идентично false && true, условие что оба выражения возвращают true не выполняется и первый аргумент - false, Он и возвращается, а второй аргумент игнорируется.*/

//5
let a = null || 0 || 35;
console.log(a);
//Ответ 35

/* null и 0 не могут быть преобразованы в true, поэтому ответом будет первое значение, возвращающее true, в нашем случае это 35.*/


//6

let a = null && 0 && 35;
console.log(a);
//Ответ null

/* Идентично false && false && true, то есть условие что все значения должны преобразоваться в true не выполняется, поэтому возвращается первое значение, которое может быть преобразовано в false, в нашем случае это null.*/

//Part 2
//Что отобразится в консоли. Почему?

//1
12 + 14 + '12'
//"2612"
/* Когда оператор плюс помещается между операндами, где один является строкой, он преобразует другое число или логическое значение в строку и объединяет их. Добавление в JavaScript имеет ассоциативность слева направо. Это означает, что когда у нас есть пример с несколькими операторами сложения, самый левый оператор оценивается первым. В нашем случае оператор сложения возвращает сумму числовых операндов, затем объединяет строки со строковым значением.  Т.е. сначала выполнится арифменическое действие 12 + 14, что даст нам 26, затем из-за добавления стринга '' число 26 будет преобразовано в стринг "26" и  после добавления значения стринга '12' - в "2612".*/

//2
3 + 2 - '1'
//4
/* Сначала происходит операция сложения 3+2, что даст нам 5, далее из-за того, что оператор вычитания определяется только для чисел.  Знак минус перед -'1' является унарным минус оператором , который будет фактически принуждать стринг превратиться  в число. Следовательно, '1' преобразуется в число 1, которое вычитается из 5. В итоге получим 4. */

//3
'3' + 2 - 1
//31
/* Как и в первом случае, сложение в JavaScript имеет ассоциативность слева направо. Это означает, что когда у нас есть пример с несколькими операторами, самый левый оператор оценивается первым. У нас это стринг. Происходит конкатенация '3' с разностью цифр 2 и 1, что даст нам 31. Не понимаю почему в итоге это не стринг.*/

//4
true + 2
//3
/* В JavaScript, когда оператор «плюс» помещается между числом и логическим значением, логическое значение приводится (конвертируется) в число. False -> 0, true -> 1. Другими словами вычисление происходит по принципу 1 + 2 = 3. */

//5
+'10' + 1
//11
/* + перед стрингом, содержащим число преобразует его в число, затем происходит операция сложения 10 и 1, что даст 11 */

//6
undefined + 2
//NaN
/*В JS undefined + число и в обратном порядке тоже дает Not a Number, так как выражение идентично NaN + 2, что даст NaN. */

//7
null + 5
//5
/* null -> 0, 0 + 5 = 5 */

//8

true + undefined
//NaN
/* В JS true + undefined дает Not a Number, так как выражение идентично 1 + NaN, что даст NaN. */


//Part 3 - If else

//1
var a = "hidden";

if(a = "hidden"){
  console.log(a = "visible");
} else {
  console.log(a = "hidden");
};
//"visible"

//2
var a = 10;

if(a === 0){
  console.log(a === 1);
} else if(a < 0){
  console.log(a = "less then zero");
}else if(a > 0){
  console.log(a *=10);
};
//100

//3

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }
if(car.age > 5) {
  console.log("Need Repair");
  car.needRepair = true;
 }else{
  car.needRepair = false;
};
console.log(car);

//4
 let item = { name: 'Intel core i7', price: '100$', discount: '15%' }
 if(item.discount !== undefined ) {
   item.priceWithDiscount = parseInt(item.price) * (100 - parseInt(item.discount))/100;
   console.log(`Your price is ${item.priceWithDiscount}US$`);
 } else{
   console.log(`Your price is ${item.price}US$`);
 };

//5
let product = {
name: "Яблоко",
price: "25$"
}
  let min = 10;
  let max = 20;

if(((parseInt(product.price)) >= min) && ((parseInt(product.price)) <= max)){

  console.log(product.name);
} else {
  console.log("Товаров не найдено");
};


//Part 4 - Объекты

let phone = {
  product: 'iphone'
}

phone.price = 1000;
phone.currency = 'dollar';
//phone += {details: modelkey3: "value3"};
let details = {};
phone.details = details;
phone.details.model = "X";
phone.details.color = "Gold/Pink";

console.log(phone);