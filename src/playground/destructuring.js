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

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self-Published'} = book.publisher;


console.log(publisherName); // set default value of 'Self-Published'