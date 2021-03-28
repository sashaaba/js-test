/* Придумать название для переменных, которые описывают (let, const)
имя (постоянное)
фамилия (постоянное)
возраст (может изменяться)
информация о пользователе ( может изменяться)
 */

const firstName = 'Alex';
const lastName = 'Kuharenok';
let age = 34;
let userInfo = 'Информация о пользователе';


//! Что будет в консоле и почему:

/* // 1 -- undefined значение переменной не определено, но она существует, var всплыл.
console.log(test); 
var test = 'string'; */

/* // 2 -- string 2. Во второй строке произошло переопределение переменной x, var позволяет определять переменную
var x = 'string';
var x = 'string 2';
console.log(x); */

/* // 3 -- будет ошибка, переменная test не обявлена. Let не всплывает 
console.log(test); 
let test = 'string'; */

/* // 4 -- будет ошибка, константу не возможно объявить дважды и переопределять её значение  
const x = 'string';
const x = 'string 2';
console.log(x); */

/* // 5 -- будет ошибка, let не возможно объявить дважды, но можно пререопредеить её значение  
let num = 12;
let num = 1;
console.log(num); */


//! Строки

let string = "string test example";

//? Получить первую и последнюю букву строки
const firstLastLetter = (str) =>
  `первая буква: ${string[0]}, последняя буква: ${str.slice(-1)}`; //str[string.length -1]
// const firstLastLetter = str => string[0] + str.slice(-1); //str[string.length -1]
// console.log(firstLastLetter(string));

//? Сделать первую и последнюю буквы в верхнем регистре
const firstLastUp = (str) => str[0].toUpperCase() + str.slice(1, -1) + str.slice(-1).toUpperCase();
// console.log(firstLastUp(string));

//? Найти положение слова string в строке
const index = (str) => (newStr = str.indexOf("string"));
// console.log(index(string));

//? Найти положение второго пробела
const spaceTwo = (str) => str.indexOf(" ", str.indexOf(" ") + 1);
// console.log(spaceTwo(string));

//* Получить строку со 2-ого символа длинной 6 букв
const twoSix = (str) => str.substr(1, 6);
// console.log(twoSix(string));

//? Получить строку с 1 по 7 символ
const oneSeven = (str) => str.slice(0, 7);
// console.log(oneSeven(string));

//? Получить из ух переменных типа number x = 20, y = 21 получить строку '2021'
const string2021 = (x = 20, y = 21) => String(x) + y; // x + '' + y || y.toString()
// console.log(string2021());


//! Числа

//? Получить число Pi из Math и округлить его до двух знаков после точки
const piRound = () => Math.round(Math.PI * 100) / 100;
// console.log(piRound());

//? Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1
const minMax = (arr = [10, 17, 5, 12, 15, 99, 1]) => ({
  "Минимальное из ряда": Math.min(10, 17, 5, 12, 15, 99, 1),
  "Максимальное из ряда": Math.max(10, 17, 5, 12, 15, 99, 1),
  "Минимальное из массива": Math.min.apply(this, arr),
  "Максимальное из массива": Math.max.apply(Math, arr)
});
// console.table(minMax());

//? С помощью Math.random:
//? получить случайное число и округлить его до двух цифр после запятой
const random = () => Math.round(Math.random() * 100) / 100;
// console.log(random());

//? получить случайное число от 0 до Х
const randomX = (x = 10) => Math.round(Math.random() * x);
// console.log(randomX());

//? Получить число из строки '100$'
const toString100 = (x = "100$") => parseInt(x);
// console.log(toString100());


//! Объекты

//? Создать объект с полем 'notebook' равным 'MacBook'
const objComputer = {
    notebook: 'MacBook'
};

//? Добавить в объект из предыдущей задачи поле 'price', равное 1500 и поле currensy, равная 'dollar'
objComputer.price = 'dollar';

//? Добавить поле details, которое будет содержать объект с полями model и color (значения этих полей задайте сами)
objComputer.details = {
    model: 'late 2021',
    color: 'silver'
};
// console.table(objComputer);


//! Выражения и операторы. Преобразование типов.

//? Записать в коротком виде:
const shortEntry = (a = 1, b = 2, c = 3, d = 4, k = 5, l = 6, m = 7) => {
    a += 5;         //a = a + 5;
    b *= 15;        //b = b * 15;
    c -= 3;         //c = c - 3;
    d %= 2;         //d = d % 2;
    k += a;         //k = a + k;
    l *= b;         //l = l * b;
    m *= 3 * k;     //m = m * 3 * k;
    console.log(b);
};
// shortEntry();

//? Возвести переменную в куб, используя краткую запись.
const exponentPower = (x = 4) => x ** 3; //Math.pow(x, 3)
// console.log(exponentPower(5));

//? Если переменная равна “маленький”, присвоить ей значение “большой”, иначе “маленький”. Сделать тоже самое, используя тернарный оператор.
const ifElse = (x = 'маленький') => {
    if (x === 'маленький') {
        x = 'большой';
    } else {
        x = 'маленький';
    }
    return x;
};
// console.log(ifElse('маленький'));

const ifElseTern = (x = 'маленький') => x = x === 'маленький' ? 'большой' : 'маленький'; // 'x =' не нужно в контексте этой функции, написал только для того что бы соблюсти уcловиt задачии (вне функции условие будеv писать 'x = x === 'маленький' ? 'большой' : 'маленький';')
// console.log(ifElseTern());

//? Записать условие, используя условный оператор if: если переменная меньше нуля: присвоить ей строку “меньше нуля” если переменная равна нулю: присвоить 1 если больше нуля: используя краткую запись, умножить переменную на 10 Сделать тоже самое, используя тернарный оператор.
const ifElseIf = (x = 0) => {
    if (x < 0) {
        return x = 'меньше нуля';
    } else if (x === 0) {
        return x = 1;
    } else if (x > 0) {
        return x *= 10;
    }
};
// console.log(ifElseIf());

const ifElseIfTern = (x = 0) => x < 0 ? 'меньше нуля' : x === 0 ? 1 : x > 0 ? x * 10 : NaN;
// console.log(ifElseIfTern());

//? Используя конструктор switch, записать следующее условие:
// if(a == 'котик') {
//     console.log('котик');
//   } else if(a == 'собака') {
//     console.log('собака');
//   } else if(a == 'хомячок') {
//     console.log('хомячок');
//   } else {
//     console.log('неизвестное науке животное');
//   }
//   Важно: в консоли вы должны увидеть только одно условие из 4х.
const switchFn = (a = 'котик') => {
    switch (a = 'котик') {
        case 'котик':
            // console.log('котик');
            break;
        case 'собака':
            // console.log('собака');
            break;
        case 'хомячок':
            // console.log('хомячок');
            break;
        default:
            // console.log('неизвестное науке животное');
            break;
    }
    return a;
};
// console.log(switchFn());

//? Чему равен x в каждом из примеров, объясните почему:
// логический оператор || (или) вернет первый true(истенное значение) , если такого нету -- вернет последнее значение
// let x = 0 || 'строка';       // -- 'строка' в булевов исчеслении это true
// let x = n ull || 1;          // -- 1; null это ложь
// let x = null || 0 || 1;      // -- 1; 0 и null это ложь

// логический оператор && (and) вернет первый false(ложное значение) , если такого нету -- вернет последнее значение
// let x = 1 && 'строка';       //'строка' оба операнта истены, вернет последний
// let x = null && 1;           //null 
// let x = 1 && null;           //null
// let x = null && 0 && 1;      //null
// console.log(x);


//? Чему равен x в каждом из примеров, объясните почему:
// let x = 1 + 2 + '3'; // строка '33' первый плюс сумирует числа 1+2, второй конкатенирует строку '3'
// let x = 1 + 2 - '1'; // 2 первый оператор суммирует числа 1+2 второй пытается вычесть строку из чила и преобразовывает строку в число 1 (3-1=2)
// let x = '1' + 2 - 1; // 11 конкатенируется строка '1' и число 2. Получаем строку '12'. Из нее пытаемся вычесть число, поэтому она преобразовывается в число (12-1=11)
// let x = true + 1; // 2 true преобразовывается в число 1
// let x = +'1' + 2; // 3;  + преобразовывает строку '1' в число 1
// let x = null + 2; // 2 null преобразовывается в число 0
// let x = undefined + 2; // NaN; undefined не возможно преобразовать в цифры
// let x = true + undefined; // NaN; undefined не возможно преобразовать в цифры
// console.log(x);


//! Циклы

//? В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"
// Первый вараинт через цикл for
function firstToUpperCaseFn(str = 'Я стану крутым программистом', space = ' ') {
    let res = [];
    str = str.split(' '); 

    for (let i = 0; i < str.length; i++) {
        res[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }

    return res.join(space);
};
// console.log(firstToUpperCaseFn());


// второй вариант через перебирающий метод Map
const firstToUpperCaseFnMap = (str = 'привет', space) => { 
    return str.split(' ')
            .map(str => str[0].toUpperCase() + str.slice(1))
            .join(space);
};
// console.log(firstToUpperCaseFnMap('Я стану крутым программистом', ' '));

//? Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 21 или 6! = 654321) .

function factorialFn(x = 9) {
    let res = 1;
    for (let i = 0; i < x; i++) {
        res *= (x - i);
    }
    return res;
}
// console.log(factorialFn(9));

//второй вариант
const factorial = (x) => x != 1 ? x * factorial(x - 1): 1;
// console.log(factorial(9));

//? Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
function forFn(y = 'Просветление наступит через:') {
    let x = '';
    for (let i = 10; i > 0; i--) {
        x +=` ${i}`; // x += ' ' + i;
    }
    return y+x;
}
// console.log(forFn());

//? Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.
function oddFn(x = 1, y = 20) {
    for (x; x <= y; x++ ){
        x % 2 ? console.log(x) : false;
    }
}
oddFn(1, 20);

//? На основе строки "теперь я мастер циклов javascript" создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы. 

function firstToUpperCaseFnLet(str = 'теперь я мастер циклов javascript', space = '') {
    let res = [];
    str = str.split(' '); 

    for (let i = 0; i < str.length; i++) {
        res[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    let res2; 
    return res2 = res.join(space);
};
console.log(firstToUpperCaseFnLet());



