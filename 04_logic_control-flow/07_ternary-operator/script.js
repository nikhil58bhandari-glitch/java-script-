const age = 12;

// using an if statement
if(age >= 18){
    console.log('you can vote!');
}else {
    console.log('you can not vote');
}

// using a ternary operator
age >= 18 ? console.log('you can vote!'):
 console.log('you can not vote');

 // Assigning a condition value to a variable
 const canVote = age >= 18 ? true : false;
 const canVote2 = age >= 18 ? 'you can vote!' : 'you can not vote';

 console.log(canVote);
 console.log(canVote2);

 // Multiple Statements

 const auth = true;
 // let redirect;

//  if(auth){
//     alert ('welcome to dashboard');
//     redirect = '/dashboard';
//  }else{
//     alert('Access Denied');
//     redirect = '/login';
//  }

// const redirect = auth ? (alert('welcome to the dashbaord'), '/deshboard') : (alert('Access Denied'), '/login');

//  console.log(redirect);

 auth ? console.log('welcom to the dashboard') : null;

 auth && console.log('welcome to the dashboard');