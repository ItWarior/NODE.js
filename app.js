// Linux навигация и поиск
// Файловая структура
// /
// --/var/
// ----/www/
// ------/html/
// --------/index.html
// --------/404.html
// --------/.htaccess
// ----/logs/
// ------/access.log
// Задание
// Напишите набор команд с комментарием их работы которые вы примените для решения следующих задач:

// Выведите список всех файлов в папке html
// заходимо в папку html
// dir - виведе в консоль всі доступні папки
// заходими в папку var потім www потім в html
// cd var
// cd www
// cd html
// В консоль виводиться вміст папки html
// Найдите в файле access.log все упоминания строки "404"
// доступаємось до файлу та робимо пошук по заданому параметру
// $grep User / 404 / access.log
// На основании файла 404.html сделайте файл 403.html заменив в его содержимом все упоминания 404 на 403
// cp
// Модифицируйте права доступа и владельца файла index.html следующим образом: Текущий пользователь должен иметь права на чтение/запись Группа www-data на чтение Все остальные не имеют доступа к файлу
// chmod 775 /data/www/index.html
// Сделайте символическую ссылку на файл access.log в папке html.
// Выведите на экран все файлы в папке var
// dir var 
// Создайте новый файл 503.html в папке html с следующим содержимым:
// переходимо в директорію html та створюємо нові дерикторії з файлом в середині
// mkdir -p /head/title
// заходимо в title та створюємо файл
// touch 503.html
// <html>
//     <head>
//         <title>503</title>
//     </head>
// </html>
// Пример решения
// # Упаковать папку logs в архив logs_backup.zip
// cd /var/ # Перехожу в папку var
// zip -v # Проверяю наличие пакета zip
// sudo apt install zip # Устанавливаю пакет zip
// zip -r ./logs_backup.zip ./logs # Упаковываю содержимое папки logs в файл logs_backup.zip с флагом -r для рекурсивного добавления файлов
// GIT внесение изменений
// Рабочее окружение
// У вас чистая операционнная система с установленными программами git, nano, ssh. Ваш публичный ключь уже добавлен к git репозиторию и вы имеете полный доступ на чтение/запись, но он отсутствует на вашем компьютере. Репозиторий: git@example.com:example/test.git Ветки: master, dev, stage, release

// Задание
// Внести изменения в ветке dev репозитория git@example.com:example/test.git, добавив в корень файл Readme.md с текстом ### May be in future и залить их на удаленный репозиторий. Напишите набор команд для решения этой задачи с коментариями.
//Клонуємо репозиторій на Git та скачуємо його.
// git clone git@example.com: example / test.git: ItWarior / your - project.git
// // Далі вибираємо проект на нашому компютері та заходимо в нього
// cd your - project
// //переходимо на вітку dev
// git checkout dev
// //створюємо файл Readme.md та фіксуємо зміни
// git add Readme.md
// // збурігаємо зміни та записуємо коментар
// git commit - m "May be in future"
// // заливаємо дані на віддалений репозиторій
// git push git@example.com:example/test.git dev


// JS логика
// Данные для заданий
// let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
// let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
// let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]
// let testData4 = [{"name":"Vasya","email":"vasya@example.com","age":20},{"name":"Dima","email":"dima@example.com","age":34},{"name":"Colya","email":"colya@example.com","age":46},{"name":"Misha","email":"misha@example.com","age":16},{"name":"Ashan","email":"ashan@example.com","age":99},{"name":"Rafshan","email":"rafshan@example.com","age":11},1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[[[[1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[{"name":"Rafshan","email":"rafshan@example.com","age":11}]]]]]]
// Задание
// Напишите функцию cloneDeep таким образом, чтобы она была способна клонировать переданный как параметр объект.
// let person = {
//    name: "Taras",
//    age: 29
// };
// function cloneDeep(obj) {
//    let copy = Object.assign({}, obj);
//    return copy;
// }
// console.log(person);
// let clone = cloneDeep(person);
// clone.name = "Slavyk";
// console.log(clone);

// Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.
// var arrays = [[1, 2, 3], [4, 5], [6]];
// // Ваш код
// function concatArr(mas) {
//    let conc = mas.reduce(function (acc, next) {
//          return acc.concat(next);
//    }, [])
//    return conc
// }
// console.log(concatArr(arrays));
// // → [1, 2, 3, 4, 5, 6]
//       3.  Допустим, у вас есть функция primitiveMultiply, которая в 50% случаев перемножает 2 числа, а в остальных случаях выбрасывает исключение типа MultiplicatorUnitFailure. Напишите функцию, обёртывающую эту, и просто вызывающую её до тех пор, пока не будет получен успешный результат.
// function MultiplicatorUnitFailure() {}
// function primitiveMultiply(a, b) {
//   if (Math.random() < 0.5)
//     return a * b;
//   else
//     throw new MultiplicatorUnitFailure();
// }
// function reliableMultiply(a, b) {
//    try {
//       let res = primitiveMultiply(a, b);
//       if (typeof(res) === "number") {
//          return res
//       }
//    } catch (e) {
//       if (typeof(e) === "object") {
//         return reliableMultiply(a, b)
//       }
//    }
// }
// console.log(reliableMultiply(8, 8));
//      4. Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.
// var arr = [1, 2, 3];
// Array.prototype.append = function (element) {
//    let a = this.splice(0, this.length, element);
//    this.push(...a);
//    console.log(this);
// };
// arr.append(0);
//[0, 1, 2, 3]
//      5. Выведите все элементы массива используя рекурсию.

// var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi'];
// let flag = 0;
// function recuseLog(mas) {
//    if (flag < mas.length) {
//       console.log(mas[flag]);
//       ++flag;
//       recuseLog(mas);
//    } else {
//       return
//    }
// };
// recuseLog(arr);
//      6. Написать функцию для выполнения параллельных вычислений без использования Promise.

// var a = function(one, two) {
//   return one + two
// }
// var b = function() {
//   return false;
// }
// function paralell(mas, callback) {
//    let result = [mas[0][0](mas[0][1][0], mas[0][1][1]),mas[1][0]()];
//    return callback(result);
// }
// paralell([[a, [1, 2]], [b]], function(results) {
//     console.log(results); // [3, false]
// });
// //      7. Сделать функцию поиска значений в массиве.

// Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null
// // Пример: 
// let result = array_find(testData, '/^raf.*/i') // ["Rafshan"]
// let result2 = array_find(testData, "Rafshan") // ["Rafshan"]

// let testData = ["Hello", "from", "hello", "hello", "Java", "Scrypt"];
// function array_find(mas, value) {
//   let sortMas = mas.filter(function (element) {
//      if (element.match(value) != null) {
//         return element
//      }
//   })
//    if (sortMas.length <= 0) {
//       return null
//    } else {
//       return sortMas
//    }
// }
// console.log(array_find(testData, /^[^h]/i));
//      8. Сделать функцию которая обрезает массив до указанного значения.

// Синтаксис: array_skip_until(arr: array, value: any): any[]
// Пример: 
// let result = array_skip_until(testData, 2) // [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
// let result2 = array_skip_until(testData, "Rafshan") // ["Rafshan", "ashan@example.com", true, false]
// let result3 = array_skip_until(testData, "asd") // []
// let mas = [2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
// function array_skip_until(arr, value) {
//    let res = arr.findIndex(element => {
//       if (element === value) {
//          return element;
//       }
//    });
//    if (res >= 0) {
//       for (let i = 0; i < res; i++) {
//          arr.shift();
//       }
//       return arr;
//    } else {
//       return [];
//    }
// }
// console.log(array_skip_until(mas, 85));
//      9. Создать функцию которая нормализует данные в массиве исключая или преобразуя не подходящие.

// Доступные шаблоны: 
// 'string' => строки, 
// 'number' => числа, 
// 'int' => целые числа, 
// 'float' => числа с плавающей точкой, 
// 'bool' => true | false, 
// 'function' => функция, 
// 'array' => массив, 
// Object => объект {name: 'string'}
// Синтаксис: array_normalize(arr: array, shema: string|Object[, transform: bool = false]): any[]
// Пример: 
// let result = array_normalize(testData4, 'string') // ['Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result2 = c // ['1', '2', '1990', '85', '24', 'Vasya', 'colya@example.com', 'Rafshan', 'ashan@example.com']
// let result3 = array_normalize(testData4, {age: 'float'}) // []
// let result4 = array_normalize(testData4, {age: 'float'}, true) // [{age: 20}, {age: 34}, {age: 46}, {age: 16}, {age: 99}, {age: 11}]
// let testData4 = [
//    { "name": "Vasya", "email": "vasya@example.com", "age": 20 },
//    { "name": "Dima", "email": "dima@example.com", "age": 34 },
//    { "name": "Colya", "email": "colya@example.com", "age": 46 },
//    { "name": "Misha", "email": "misha@example.com", "age": 16 },
//    { "name": "Ashan", "email": "ashan@example.com", "age": 99 },
//    { "name": "Rafshan", "email": "rafshan@example.com", "age": 11 },
//    1, 2, 1990, 85, 24,
//    "Vasya", "colya@example.com", "Rafshan", "ashan@example.com",
//    true, false,
//    [[[[1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false, [{ "name": "Rafshan", "email": "rafshan@example.com", "age": 11 }]]]]]];
// function array_normalize(mas, type, transform) {
//    if (transform && transform === true && typeof (type) != "object") {
//       let resMas = mas.reduce(function (sortMas, nextValue) {
//          if (typeof (nextValue) != "object") {
//             sortMas.push(nextValue.toString())
//             return sortMas
//          }
//             return sortMas
//       }, [])
//       return resMas
//    } else if (typeof (type) === "object"&&arguments.length===2) {
//       let resMas = mas.reduce(function (sortMas, nextValue) {
//          if (typeof (nextValue) === "object") {
//             let obj = {};
//             for (const key in nextValue) {
//                if (type[key] === nextValue[key]) {
//                   obj[key] = nextValue[key];
//                   sortMas.push(obj);
//                }
//             }
//          }
//             return sortMas

//       }, [])
//       return resMas;
//    } else if (typeof (type) === "object" && transform === true) {
//       let resMas = mas.reduce(function (sortMas, nextValue) {
//          if (typeof (nextValue) === "object") {
//             let obj = {};
//             for (const key in nextValue) {
//                if (type[key]!= undefined) {                  
//                   obj[key] = nextValue[key];
//                   sortMas.push(obj);
//                }
//             }
//          }
//             return sortMas

//       }, [])
//       return resMas;
//    } else {
//       let resMas = mas.reduce(function (sortMas, nextValue) {
//          if (typeof (nextValue) === type) {
//             sortMas.push(nextValue);
//             return sortMas
//          } else {
//             return sortMas
//          }
//       }, [])
//       return resMas
//    }
// }
// console.log(array_normalize(testData4, "string", true));
//      10. Сделать функцию которая возвращает уникальные элементы массива.

// Синтаксис: array_unique(arr: array): any[]
// Пример:
// let result = array_unique(testData.concat(testData2)) // [1, 2, 1990, 85, 24, 5, 7, 8.1, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false]
// let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
// let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
// function array_unique(arr) {
//    let newMas = [];
//    for (let i = 0; i < arr.length; i++) {
//       let b = newMas.indexOf(arr[i])
//       if (b<0) {
//          newMas.push(arr[i])
//       }
//    }
//    return newMas;
// }
// console.log(array_unique(testData.concat(testData2)));
//      11. Сделать функцию которая сможет делать срез данных с ассоциативного массива.

// Синтаксис: array_pluck(arr: array, path: string): any[]
// Пример:
// let result = array_pluck(testData3, 'name') // ["Vasya", "Dima", "Colya", "Misha", "Ashan", "Rafshan"]
// let result2 = array_pluck(testData3, 'skills.php') // [0, 5, 8, 6, 0, 0]

// function array_pluck(mas, searchValue) {
//    let generMas = [];
//    let str = searchValue.match(/\./);
//    let strMas = [];
//    if (str[0] > '') {
//       strMas = str.input.split(".")      
//       for (const obj of mas) {
//          for (const key in obj) {
//             if (strMas[0] === key) {
//                generMas.push(obj[key][strMas[1]]);
//             }
//          }
//       }
//    } else {      
//       for (const obj of mas) {
//          for (const key in obj) {
//             if (searchValue === key) {
//                generMas.push(obj[key]);
//             }
//          }
//       }
//    }
//    return generMas;
// }
// console.log(array_pluck(testData3, "skills.js"));
//      12. Создать функцию которая создает объект на основании двух представленных массивов используя один как ключи, а другой как значения. Не подходящие ключи массивов должны быть исключены.

// Синтаксис: array_combine(keys: array, values: array): Object
// Пример: 
// let result = array_combine(testData, testData2) // {1: 1, 2: 2, 1990: 1990, 85: 85, 24: 24, "Vasya": 5, "colya@example.com": 7, "Rafshan": 8.1, "ashan@example.com": undefined}
// function array_combine(mas1, mas2) {
//    let obj = {};
//    if (mas1.length >= mas2.length) {
//       for (let i = 0; i < mas2.length; i++) {
//          obj[mas1[i]] = mas2[i];
//       }
//    } else {
//       for (let i = 0; i < mas1.length; i++) {
//          obj.mas1[i] = mas2[i];
//       }
//    }
//    return obj;
// }
// console.log(array_combine([1, 2, 3, 4, 5], ["hello", "from", "js",119]));
// Mongo
// Рабочее окружение
// База данных MongoDB содержит коллекции:

// posts - Записи - 
// {
//   "properties": {
//     "_id": { "bsonType": "objectId" },
//     "title": { "bsonType": "string" },
//     "content": { "bsonType": "string" },
//     "author": { "bsonType": "string" },
//     "like": { "bsonType": "int" },
//     "dislike": { "bsonType": "int" }
//   }
// }

// Все команды вы выполняете в mongo shell

// Задание
// Напишите команды для получения следующих значений:

// Выведите 5 записей из коллекции posts пропустив первые 5
// > b.posts.find().skip(5);
// Выведите все записи у которых like больше 100
// > db.posts.find({like:{$gt:100}});
// Добавьте новую запись в коллекцию posts
// > db.posts.insert({title:"some title", content: "some masage", author: "Max", like: 120, dislike: 20});
// Выведите список авторов и их общее количество like
// db.posts.aggregate([
//    {
//       $group: {
//          _id: "$author",
//          count:{$sum: "$like"}
//       }
//    }
// ])ыы