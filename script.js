"use strict"

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('test');
    }
};

// options.makeTest();
// console.log(Object.keys(options).length);

const {border, bg} = options.colors;
const {width}=options;
console.log(width);
// console.log(options.name);
// delete options.name;
// console.log(options);
// let counter=0;
// for (let key in options){
//     if(typeof(options[key])==='object'){
//         for(let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);

//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
        
//     }
// counter++;
// }
// console.log(counter);
//learnJS('JavaScript', first);
function first(){
    console.log('я прошел этот урок');
}
function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}
// let str = "test/FEED";
// let arr = [1,4,9,3,2,43,23];
// str.toLocaleUpperCase();
// str.toLowerCase();


// // fruit.indexOf('q');
// let logg = 'Hello world!';

// logg.substr(6,3);

// let num = 12.49;
// console.log(Math.round(num));
// let fruit = '12px';
// console.log(parseFloat(fruit));

// console.log(Calc(10, 20));
// function Calc(i, j){
    
//     let num = i+j;
//     return num;
// }
// let logger = function(){
// console.log('hello');
// };
// logger();

// let calc = (a,b)=> {return a+b};
// console.log(calc(4,5));
//  num = 50;

// while (num < 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num--;
// }
// while (num > 50)

// for(let i=1; i< 10; i++){
// if (i===6){
//     // break;
//     continue;
// }
// console.log(i);
// }


//  num = 500;
// if (num < 49){
//     console.log('error !');
// } else if (num > 100){
//     console.log('more !');
// } else console.log("ok !");

// (num === 50) ? console.log("ok !"): console.log('error !');

// num = '50';

// switch (num) {
//     case '49': console.log('Less !');
//     break;
//     case '50': console.log('OK !');
//     break;
//     case '100': console.log('error !(More)');
//     break;
// }