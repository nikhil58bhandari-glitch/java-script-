/*
 Execution Context => When you run any javaScrip, a special environment is created to handle the transformation & execution of code.
This is called the execution context. it contain the currently runnuing code and everything that aids in its execution 

there is a global execution context as well as function execution context for every function invoked.
*/

const x = 100;
const y = 50;

function getSum(n1,n2){
    const sum = n1 + n2;
    return sum;
}

const sum1 = getSum(x,y);
const sum2 = getSum(10,5);

console.log(sum1, sum2);