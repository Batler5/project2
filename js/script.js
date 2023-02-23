"use strict"

const numberFilms = +prompt('Сколько фильмов вы уже посмотрели ?', '');

let personalMovieDB = 
{
    count : numberFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};


for (let i =0; i<2; i++){
    let a = prompt('Один из последних просмотренных фильмов ?', ''),
     b = prompt('На сколько оценете его ?', '');
    if (a!=null && a.length < 50 && a != '' && b>=0 && b<=10){
       personalMovieDB.movies[a]=b;
       console.log('OK!');
    } else {
        console.log('error !');
        i--;
        alert('Введены не корректные данные, повторите ещё раз.');
    }
};
// let i=0
// while (i<2){
//     let a = prompt('Один из последних просмотренных фильмов ?', ''),
//      b = prompt('На сколько оценете его ?', '');
//     if (a!=null && a.length < 50 && a != '' && b>=0 && b<=10){
//        personalMovieDB.movies[a]=b;
//        console.log('OK!');
//     } else {
//         console.log('error !');
//         i--;
//         alert('Введены не корректные данные, повторите ещё раз.');
//    }
//    i++;
// }
if(personalMovieDB.count<=10){
    alert('Просмотрено довольно мало фильмов.');
} else if (personalMovieDB.count >10 && personalMovieDB.count <=30){
    alert('Вы классический зритель.');
} else if(personalMovieDB.count>30){alert('Вы киноман!');}
else {console.log('Произошла ошибка.');}

console.log(personalMovieDB);

// console.log("arr"+" - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

//     // ++incr;
//     // --decr;
//     console.log(5113%25);

//     console.log(2+2*2!='6');
    
//     const isChecked = false,
//     isClose = false;
//     console.log(isChecked || !isClose);


    // const answers = [];

// answers[0] = prompt('Ваше имя', '');
// answers[1] = prompt('Ваш возраст', '');
// answers[2] = prompt('Ваш вес', '');

// console.log(typeof(answers));
// console.log(typeof(null));
// const answer = +prompt("Вам есть 18 ?", "18");
// console.log((answer)+5);

// const result = confirm("Are you here ?");
// console.log(result);


// alert('Hello mf');




// const obj = {
// name : "John",
// age: 25,
// isMarried:false
// };

//  console.log(obj ['name']);
// let arr = ['plum.png', 'orange.jpeg', 'apple.bmp',6 , {fal: true}, [false, true, false]];

// console.log(arr[3]);

// let a = 4.6;
// console.log(-4/0);
// console.log('string'*9);

// const persone = "Alex";

// const bool = false;

// let something;
// console.log(something);

// console.log(39247);
// let number = 7;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const Obj = {
// a:50

// }
// Obj.a=10;
// console.log(Obj);


// var name = 'Ivan'; name = 'Alex';console.log(name);


// {

//     var result = 50;
// }
// console.log(result);

// alert(5);
// [].push('a');