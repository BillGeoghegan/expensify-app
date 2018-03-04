// import * as firebase from 'firebase';

// const config = {
//     apiKey: "AIzaSyCPFvFTGPWEKjFlv_KM4vbQi6UoPSeBUFA",
//     authDomain: "expensify-bg.firebaseapp.com",
//     databaseURL: "https://expensify-bg.firebaseio.com",
//     projectId: "expensify-bg",
//     storageBucket: "expensify-bg.appspot.com",
//     messagingSenderId: "1074338876318"
// };


// firebase.initializeApp(config);
// const database = firebase.database();

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val)
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(snapshot.val());
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref().off();


// // Fetch Data once:
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         console.log('Successfully fetched value');
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('This has failed:',e);
//     });

// database.ref().set({
//     name: 'Bill Geoghegan',
//     age: 25,
//     stressLevel: 8,
//     job:{
//         title: 'Software Developer',
//         company: 'WBT Systems'
//     },
//     isSingle: true,
//     location: {
//         city: 'Dublin',
//         country: 'Ireland'
//     }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This has failed:',e);
// });

// // Update all data:
// database.ref().set('This is my data.');

// // Update a single attribute
// database.ref('age').set(25);

// // Update a sub attribute
// database.ref('location/city').set('Straffan');

// // Challenge - Add attributes with height and weight
// database.ref('attributes').set({
//     height: 73,
//     weight: 160
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This has failed:',e);
// });

// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This has failed:',e);
// });

// database.ref().update({
//     stressLevel: 7,
//     'job/company':'Facebook',
//     'location/city':'San Francisco'
// });


