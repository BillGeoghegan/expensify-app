console.log('destructuring');

const person = {
    name: 'Bill',
    age: 25,
    location: {
        city: 'Dublin',
        temp: 7
    }
};

//Can fetch object properties
const {name,age} = person;
console.log(`${name} is ${age}`);

//Can also fetch nested object properties
const {city, temp: temperature} = person.location;
if(city && temperature){
    //console.log(`It's ${person.location.temp} degrees in ${person.location.city}`);
    console.log(`It's ${temperature} degrees in ${city}`);
}

const person2 = {
    age2: 25,
    location2: {
        city2: 'Dublin',
        temp2: 7
    }
};

const {name2 = 'defaultName', age2: ageTest } = person2;
console.log(`${name2} is ${ageTest}`);


//Challenge:
const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Default Publisher'} = book.publisher;
console.log(publisherName);