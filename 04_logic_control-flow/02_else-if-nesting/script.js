const d = new Date(4,29,2026,9,0,0);
const hour = d.getHours();

if(hour < 12){
    console.log('Good Morning');
}
else if(hour < 18){
    console.log('Good Afternoon');
}
else {
    console.log('Good Night');
}

// Nested if

if(hour < 12){
    console.log('Good Morning');

    if (hour === 6){
        console.log('wake up!');
    }
}
else if(hour < 18){
    console.log('Good Afternoon');
}
else {
    console.log('Good Night');

    if(hour >= 20){
        console.log('zzzzzzzzzzzzz');
    }
}

if(hour >= 7 && hour < 15){
    console.log('it is  work time!');

}
if (hour === 6 || hour === 20 ){
    console.log('Brush your teeth!');
}