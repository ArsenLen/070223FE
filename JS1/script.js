// Взаимодействие с браузером
// console.log('Hello World') // выведет строку Hello в консоли


//    // - однострочный комментарий 
//    /* комментарий */ - многострочный комментарий

/*
    Переменные - это именованное хранилище данных
        Для создания(объявление, определение) переменных используем:
            1)let
            2)const
            3)устаревшее var - сейчас не используется
    При объявлении переменной чаще всего устанавливают значение с помощью =(оператор присваивания)
    
    Правила именования переменных:
        -латинские буквы
        -цифры, но только не в начале слова; 1number - нельзя, а number1 - можно
        -чувствительны к регистру; age и Age - две разные переменные
        -осмысленные
        -не использовать транслитерацию let imya, vozrast

    let и const отличия
        1) let можно объявить без присваивания значение, const нельзя
        2) в let можно переприсваивать другое значение, const нельзя

    Assignment to constant variable - когда хотите переопределить значение переменной const
*/

/*
    let myName = "Arsen"
    let age = 24

    const arr = [10, 15, "Arsen"]
    arr[0] = 100
    [100, 15, 20]
*/

/* в let можно переприсваивать другое значение, const нельзя
    // переприсваивание значения let
    let degree = 10
    console.log(degree)
    // прошло 3 часа
    degree = 15
    console.log(degree)

    // переприсваивание значения const
    const number = 100
    console.log(number)
    number = 200 // не можем переопределить переменную
    console.log(number)
*/

//  let можно объявить без присваивания значение, const нельзя

// let myName
// myName = "Arsen"
// console.log(myName)

// // const myAge - обязательно = после создания переменной const
// const myAge = 24

/*
    ctrl+/ - комментарий
    ctrl+K+F - в js добавляет ; форматирует код
    ctrl+Alt+L
    cmd+K+F
    типы данных
        1) строка-string - "Hello", 'Arsen', 'IceCream', '1000'
        2) число-number - 100, 3.14, 50, 1000
*/

// const myName = prompt('Введите ваше имя') // prompt - запрашивает ввод данных у пользователя
// console.log(myName)

// Мат. операции
/*
    const num1 = 10
    const num2 = 20

    const sum = num1 + num2 // 30
    const sub = num2 - num1 // 10 subsctract - вычитание
    const mult = num1 * num2 // 200 multiplication - произведение
    const div = num2 / num1 // 2 divide - деление
    const mod = num2 % num1 // 20/10 = 2, 0 в остатке, 0. % - остаток от деления
*/
// 11/3 = 3 2/3 - 2 в остатке 11 % 3 - 2 

// Задача. Запросить у пользователя любое число и в консоль вывести 
// данное число увеличенное в 100 раз.
// const num = prompt('Введите число') // запрашиваем число и сохраняем в переменную num
// // const mult = num * 100
// console.log(num * 100) // выводим в консоль переменную * 100


// + математическое сложение, + - оператор конкатенации
// Конкатенация - склеивание строк
// const fullName = "Arsen" + "Iusupov"

// const firstName = "Arsen"
// const surname = "Iusupov"
// const fullName = firstName + "Iusupov" // конкатенация "Arsen"+"Iusupov" ArsenIusupov
// console.log(fullName)

// Задача. Запросить имя пользователя 
// в консоли вывести "Меня зовут {имя пользователя}"
// Меня зовут Арсен
// Меня зовут Руслан
// const name = prompt('Введите имя')
// console.log('Меня зовут ' + name)
// const str = "Меня зовут" + name 
// console.log(str)

// Задача. Если цена больше 1000, в консоли отображать "Скидка 10%", иначе - "Скидки нет"
// Если цена > 1500, отображаем "Скидка 15%"
/*
    const price = 700
    if(price > 1500) {
        console.log("Скидка 15%")
    } else if(price > 1000) {
        console.log("Скидка 10%")
    } else {
        console.log("Скидки нет")
    }
*/

// Задача. Попросить у пользователя ввести число. 
// Если число больше 20, то в консоли выводить "Больше"
// Если равно 20, выводить "равно"
// Если меньше 20, выводить "меньше"

/*
    = - оператор присваивания
    == - оператор сравнения
    > - больше
    < - меньше
    >= - больше или равно
    <= - меньше или равно

    if - условный опереатор
    if(условие) {
        действие
    } else if() {

    } else {
        действие
    }
*/

    // 50 // 5000

/*
    camelCase - первое слово с маленькой буквы, следующие слова начинаются с большой
        myName, priceWithDiscount
    snake_case - каждое слово с маленькой буквы, _ между словами
    kebab-case - для классов
*/