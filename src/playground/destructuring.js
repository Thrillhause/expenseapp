// const person = {
// 	name: 'Dean',
// 	age: 32,
// 	location: {
// 		city: 'California',
// 		temp: 60
// 	}
// };

// const { name: firstName = 'Default', age } = person;
// const { city, temp: temperateure } = person.location;

// console.log(`${firstName} is ${age}. It is ${temperateure} in ${city}`);

// const book = {
// 	title: 'Ego is the enemy',
// 	author: 'Ryan Holiday',
// 	publisher: {
// 		name: 'Penguin'
// 	}
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// const address = ['123 S. Fake Street', 'Somewhere', 'State', '123456'];

// const [, city, state = 'Default'] = address;

// console.log(`You are in ${city} ${state} `);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, , medium] = item;

console.log(`A medium ${drink} costs ${medium}`);
