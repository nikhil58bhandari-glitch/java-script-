const socials = ['Twitter', 'linkedIn', 'FaceBool', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach( function (item) {
//     console.log(item);
// });

// socials.forEach((item, index, arr)  =>
   //  console.log(`${index} - ${item}`));

function logSocials(social){
    console.log(social);
}

// socials.forEach(logSocials);

const socialObjs = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'FaceBook', url: 'https://facebook.com'},
{name: 'Instagram', url: 'https://instagram.com'},
{name: 'Linkedin', url: 'https://linkedin.com'}
];

socialObjs.forEach((item) => console.log(item));
socialObjs.forEach((item) => console.log(item.url));