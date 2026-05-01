// -: print/log numbers from 1 to 100-:

for (let i = 1; i<= 100; i++){
    console.log(i);

}

// WHILE LOOP-
let i = 1;
while(i <= 100){
    console.log(i);
    i++;
}

// Q2-: for multiples of three print "Fizz" insted of the number -

for(let i = 1; i <= 100; i++ ){
    if(i % 3 === 0){
        console.log('fizz');
    }else{
        console.log(i);
    }
}

// - For multiple of five print "Buzz"

let j = 1;
while (j <= 100){
    if(j % 5 === 0){
        console.log('Fizz');
    }else {
        console.log(j);
    }
    j++;
}

// - for numbers which are multiples of both three and five print "FizzBuzz"

for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 || i % 5 === 0){
        console.log('FizzBuzz');
    } else {
        console.log(i);
    }
}

for(let i = 1; i <= 100; i++){
    if(i % 15 === 0){
        console.log('FizzBuzz');
    } else if(i % 3 === 0){
        console.log('Fizz');
    }else if(i % 5 === 0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}