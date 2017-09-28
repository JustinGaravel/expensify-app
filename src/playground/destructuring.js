// OBJECT DESTRUCTURING

// const person = {
//   name: 'Justin',
//   age: 29,
//   location: {
//     city: 'Osaka',
//     temp: '34'
//   }
// };

// // const name = person.name;
// // const age = person.age;

// const { name:firstName = 'Anonymous',age } = person;

// console.log(`${firstName} is ${age}.`);

// const { temp: temperature, city } = person.location;

// if (temperature && city) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;


// console.log(publisherName); // set default value of 'Self-Published'


// ARRAY DESTRUCTURING

const address = ['1299 South Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state = 'Connecticut'] = address;
console.log(`You are in ${city}, ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , medPrice] = item;
console.log(`A medium ${itemName} costs ${medPrice}.`);