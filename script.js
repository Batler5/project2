"use strict"

let num = 50;

while (num < 55){
    console.log(num);
    num++;
}

do {
    console.log(num);
    num--;
}
while (num > 50)

for(let i=1; i< 10; i++){
if (i===6){
    // break;
    continue;
}
console.log(i);
}


 num = 500;
if (num < 49){
    console.log('error !');
} else if (num > 100){
    console.log('more !');
} else console.log("ok !");

(num === 50) ? console.log("ok !"): console.log('error !');

num = '50';

switch (num) {
    case '49': console.log('Less !');
    break;
    case '50': console.log('OK !');
    break;
    case '100': console.log('error !(More)');
    break;
}
