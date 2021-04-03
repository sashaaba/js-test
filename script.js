/* Придумать название для переменных, которые описывают (let, const)
имя (постоянное)
фамилия (постоянное)
возраст (может изменяться)
информация о пользователе ( может изменяться)
 */

const firstName = 'Alex';
const lastName = 'Kuharenok';
let age;
let userInfo;


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


//! 2 Строки

let string = "string test example";

//? 2.1 Получить первую и последнюю букву строки
const firstLastLetter = (str) =>
  `первая буква: ${string[0]}, последняя буква: ${str.slice(-1)}`; //str[string.length -1]
// const firstLastLetter = str => string[0] + str.slice(-1); //str[string.length -1]
// console.log(firstLastLetter(string));

//? 2.2 Сделать первую и последнюю буквы в верхнем регистре
const firstLastUp = (str) => str[0].toUpperCase() + str.slice(1, -1) + str.slice(-1).toUpperCase();
// console.log(firstLastUp(string));

//? 2.3 Найти положение слова string в строке
const index = (str) => (newStr = str.indexOf("string"));
// console.log(index(string));

//? 2.4 Найти положение второго пробела
const spaceTwo = (str) => str.indexOf(" ", str.indexOf(" ") + 1);
// console.log(spaceTwo(string));

//? 2.5 Получить строку со 2-ого символа длинной 6 букв
const twoSix = (str) => str.substr(1, 6);
// console.log(twoSix(string));

//? 2.6 Получить строку с 1 по 7 символ
const oneSeven = (str) => str.slice(0, 7);
// console.log(oneSeven(string));

//? 2.7 Получить из ух переменных типа number x = 20, y = 21 получить строку '2021'
const string2021 = (x = 20, y = 21) => String(x) + y; // x + '' + y || y.toString()
// console.log(string2021());


//! 3 Числа

//? 3.1 Получить число Pi из Math и округлить его до двух знаков после точки
const piRound = () => Math.round(Math.PI * 100) / 100;
// console.log(piRound());

//? 3.2 Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1
const minMax = (arr = [10, 17, 5, 12, 15, 99, 1]) => ({
  "Минимальное из ряда": Math.min(10, 17, 5, 12, 15, 99, 1),
  "Максимальное из ряда": Math.max(10, 17, 5, 12, 15, 99, 1),
  "Минимальное из массива": Math.min.apply(this, arr),
  "Максимальное из массива": Math.max.apply(Math, arr)
});
// console.table(minMax());

//? 3.3 С помощью Math.random:
//? 3.3.1 получить случайное число и округлить его до двух цифр после запятой
const random = () => Math.round(Math.random() * 100) / 100;
// console.log(random());

//? 3.3.2 получить случайное число от 0 до Х
const randomX = (x = 10) => Math.round(Math.random() * x);
// console.log(randomX());

//? 3.3.3 Получить число из строки '100$'
const toString100 = (x = "100$") => parseInt(x);
// console.log(toString100());


//! 4 Объекты

//? 4.1 Создать объект с полем 'notebook' равным 'MacBook'
const objComputer = {
    notebook: 'MacBook'
};

//? 4.2 Добавить в объект из предыдущей задачи поле 'price', равное 1500 и поле currensy, равная 'dollar'
objComputer.price = 'dollar';
objComputer['price'] = 'dollar';

//? 4.3 Добавить поле details, которое будет содержать объект с полями model и color (значения этих полей задайте сами)
objComputer.details = {
    model: 'late 2021',
    color: 'silver'
};
// console.table(objComputer);


//! 5 Выражения и операторы. Преобразование типов.

//? 5.1 Записать в коротком виде:
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

//? 5.2 Возвести переменную в куб, используя краткую запись.
const exponentPower = (x = 4) => x ** 3; //Math.pow(x, 3)
// console.log(exponentPower(5));

//? 5.3 Если переменная равна “маленький”, присвоить ей значение “большой”, иначе “маленький”. Сделать тоже самое, используя тернарный оператор.
const ifElse = (x = 'маленький') => {
    if (x === 'маленький') {
        x = 'большой';
    } else {
        x = 'маленький';
    }
    return x;
};
// console.log(ifElse('маленький'));

const ifElseTern = (x = 'маленький') => x = x === 'маленький' ? 'большой' : 'маленький'; // 'x =' не нужно в контексте этой функции, написал только для того что бы соблюсти уcловие задачии (вне функции условие будеv писать 'x = x === 'маленький' ? 'большой' : 'маленький';')
// console.log(ifElseTern());

//? 5.4 Записать условие, используя условный оператор if: если переменная меньше нуля: присвоить ей строку “меньше нуля” если переменная равна нулю: присвоить 1 если больше нуля: используя краткую запись, умножить переменную на 10 Сделать тоже самое, используя тернарный оператор.
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

//? 5.5 Используя конструктор switch, записать следующее условие:
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

//? 5.6 Чему равен x в каждом из примеров, объясните почему:
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


//? 5.7 Чему равен x в каждом из примеров, объясните почему:
// let x = 1 + 2 + '3'; // строка '33' первый плюс сумирует числа 1+2, второй конкатенирует строку '3'
// let x = 1 + 2 - '1'; // 2 первый оператор суммирует числа 1+2 второй пытается вычесть строку из чила и преобразовывает строку в число 1 (3-1=2)
// let x = '1' + 2 - 1; // 11 конкатенируется строка '1' и число 2. Получаем строку '12'. Из нее пытаемся вычесть число, поэтому она преобразовывается в число (12-1=11)
// let x = true + 1; // 2 true преобразовывается в число 1
// let x = +'1' + 2; // 3;  + преобразовывает строку '1' в число 1
// let x = null + 2; // 2 null преобразовывается в число 0
// let x = undefined + 2; // NaN; undefined не возможно преобразовать в цифры
// let x = true + undefined; // NaN; undefined не возможно преобразовать в цифры
// console.log(x);


//! 6 Циклы

//? 6.1 В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре"
// Первый вараинт через цикл for
function firstToUpperCaseFn(str = 'Я стану крутым программистом', space = ' ') {
    let res = [];
    str = str.split(' '); 

    // for (let i = 0; i < str.length; i++) {
    //     res[i] = str[i][0].toUpperCase() + str[i].slice(1);
    // }
    for (let value of str) {
        res.push(value[0].toUpperCase() + value.slice(1))
    }

    return str = res.join(space);
};
// console.log(firstToUpperCaseFn());

// второй вариант через перебирающий метод Map
const firstToUpperCaseFnMap = (str = 'привет', space) => { 
    return str = str.split(' ')
            .map(str => str[0].toUpperCase() + str.slice(1))
            .join(space);
};
// console.log(firstToUpperCaseFnMap('Я стану крутым программистом', ' '));

//? 6.2 Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 21 или 6! = 654321) .

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

//? 6.3 Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
function forFn(y = 'Просветление наступит через:', z = 10) {
    let x = '';

    // for (let i = 10; i > 0; i--) {
    //     x +=` ${i}`; // x += ' ' + i;
    // }

    // while(z--){
    //     x +=` ${z+1}`; 
    // }

    do {
        x +=` ${z}`; 
    } while(z--);

    return y + x;
}
// console.log(forFn());

//? 6.4 Найти и вывести в консоль все нечетные числа от 1 до 20 включительно.
function oddFn(x = 1, y = 20) {
    for (x; x <= y; x++ ){
        x % 2 ? console.log(x) : false;
    }
}
// oddFn(1, 20);

//? 6.5 На основе строки "теперь я мастер циклов javascript" создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы. 

function firstToUpperCaseFnLet(str = 'теперь я мастер циклов javascript', space = ' ') {
    let res = [];
    str = str.split(' '); 

    for (let i = 0; i < str.length; i++) {
        res[i] = str[i][0].toUpperCase() + str[i].slice(1);
    }
    let str2; 
    return  str2 = res.join(space);
};
// console.log(firstToUpperCaseFnLet('теперь я мастер циклов javascript', ''));

//! 7 Массивы

//? 7.1 Используя функцию, найти последний элемент массива, не изменяя его.
const lastEl = (x = []) => x[x.length - 1]; 
// console.log(lastEl([1, 23, 'last element']));

//? 7.2 Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].

const concat = (arr = []) => arr.concat(arr);
// console.log(concat([1,3,6]));

//? 7.3 Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.
function arrOfNumber(y = 20) {
    const arr = [];
    for (let x = 1; x <= y; x++ ){
        arr.push(x);
    }
    return arr;
}
// console.log(arrOfNumber(5));

//? 7.4 Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"
function arguments () {
    const arr = [];
    for (let i = 0; i < arguments.length; i++){
        //arguments[i].shift();
        arr.push(arguments[i].slice(1));
    }
    return arr;
}
// console.log(arguments([1, 2, 3], ["x", "y", "z"]));

//? 7.5 Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").

const sortReverse = (str = "екважбигёзд") => 
    str
    .split("")
    .sort(function (a, b) {
        return new Intl.Collator().compare(b, a);
    })
    .join("");

// console.log(sortReverse());

//? 7.6 Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.
const revers = (arr = [5, 2, -1, 6, 9, -9, 3]) => arr.reverse();
// console.log(revers());


//? 7.7 Создать функцию, которая принимает 3 аргумента: любой произвольный массив начальный номер элемента в массиве конечный номер
//? Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам (с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы.
const arr3 = ['а', 'б', 'в', 'г', 'д', 'е'];
const spliceFn = (arr = ['а', 'б', 'в', 'г', 'д', 'е'], start = 1, end = 3) => {
    Array.isArray(arr) && Number.isInteger(end) && Number.isInteger(start) 
        ? arrNew = arr.slice().splice(start, end) 
        : 'не верно переданы аргументы';
    return arrNew;
};

// console.log(spliceFn(arr3, 1, 3), arr3);

//? 7.8 Удвоить элементы массива, не используя циклы.
const arr4 = [1, 2, 3, 6, 11];
const doubleElArr = arr => arr.forEach((item, i, arr) => arr[i] *= 2);
doubleElArr(arr4);
// console.log(arr4);

//? 7.9 Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.
const delElArr = (arr = [1, 2, 3, 4, 5]) => {
    arr.splice(1, 2); 
    // console.log(arr);
};
delElArr();
//? 7.10 Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.
const delAddElArr = (arr = [1, 2, 3, 4, 5]) => {
    arr.splice(2, 2, 'три', 'четере');
    // console.log(arr);
};
delAddElArr();

//? 7.11 Вставить в произвольный массив любое значение после второго элемента.
const addToArr = (arr, ind, add) => {
    arr.splice(ind, 0, add);
    // console.log(arr);
};
addToArr([1, 2, 3, 4, 5], 2, 'два с плюсом');

//? 7.12 Отсортировать массив массив таким образом, чтобы вначале шли массивы с наименьшей длиной. Создать копию произвольного массив"

const arrArrs = [
    [1, 2, 45, 18, 'test'],
    ['яблоко', 'апельсин', 'манго', 'груша'],
    ['alex', 24, 'minsk'],
    ['3', '97', '42', '24', 'Александр', 'Минск']];

const arrsSortFn = arr => arr.slice().sort((a, b) => a.length - b.length);
const newArr = arrsSortFn(arrArrs);
// console.table(arrArrs);
// console.table(newArr);

//? 7.13 Отсортировать массив объектов по возрастающему количеству ног животных: [ {kind: "tarantula", info: {legs: 8, eyes: 8}}, {kind: "french bulldog", info: {legs: 4, eyes: 2}}, {kind: "human", info: {legs: 2, eyes: 2}}, {kind: "lobster", info: {legs: 10, eyes: 2}} ]

const arrObjKind = [
    { kind: "tarantula", info: { legs: 8, eyes: 8 } },
    { kind: "french bulldog", info: { legs: 4, eyes: 2 } },
    { kind: "human", info: { legs: 2, eyes: 2 } },
    { kind: "lobster", info: { legs: 10, eyes: 2 } },
  ];

const ArrsObjSortFn = arr => arr.sort((a, b) => a.info.legs - b.info.legs);

// console.log(ArrsObjSortFn(arrObjKind));


//? Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг, а также возвращает все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему. const services = [ {service: "service1", executionTime: 56}, {service: "service2", executionTime: 97}, {service: "service3", executionTime: 23}, {service: "service4", executionTime: 65}, {service: "service5", executionTime: 2}, {service: "service6", executionTime: 73}, {service: "service7", executionTime: 82}, {service: "service8", executionTime: 19}, {service: "service9", executionTime: 33}, {service: "service10", executionTime: 42}, ]
// Например, filterServices(services, 20, 60).

const services = [
    { service: "service1", executionTime: 56 },
    { service: "service2", executionTime: 97 },
    { service: "service3", executionTime: 23 },
    { service: "service4", executionTime: 65 },
    { service: "service5", executionTime: 2 },
    { service: "service6", executionTime: 73 },
    { service: "service7", executionTime: 82 },
    { service: "service8", executionTime: 19 },
    { service: "service9", executionTime: 33 },
    { service: "service10", executionTime: 42 },
];

const filterServices = (services, x = 20, y = 60) => {
    return JSON.parse(JSON.stringify(services))
    .filter(time => time.executionTime >= x && time.executionTime <= y)
    .sort((a, b) => a.executionTime - b.executionTime);
};

// console.log(filterServices(services, 20, 60));

//! 8 функции
//? 8.1 Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль.

const multiplay = (...args) => args.length 
                        ? args.reduce((acc, el) => acc += el , 0) 
                        : 0;
// console.log(multiplay(1, 8, 12));


//? 8.2 С помощью ри курсе вычислить факториал числа 10.

const factorialRec = (x) => x != 1 ? x * factorial(x - 1): 1;
// console.log(factorialRec(10));


//? 8.3 Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset'.

const reversStr = x => [...x].reverse().join('');
// console.log(reversStr('test'));


//? 8.4 Написать функцию, которая проверяет является ли слово палиндромом

const palindrome = str => 
    [...str.replace(/\s+/g, '')] //  /\s+/g -- регулярное вырожение, нужно разобраться в этом)) \s символ пробела, \s+ один или несколько пробелов
    .reverse()
    .join('')
    .toUpperCase() 
    == 
    str.replace(/\s+/g, '')
    .toUpperCase()
        ? `строка "${str}" является палиндромом`
        : `строка "${str}" не палиндром`;

console.log(palindrome('а роза упала на лапу Азора'));

