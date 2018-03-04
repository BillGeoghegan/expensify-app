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

// // database.ref('notes').push({
// //     title: 'ToDo',
// //     body: 'Go For a run!'
// // });
// // database.ref('notes').push({
// //     title: 'Course topics',
// //     body: 'React, Redux, Firebase, ES6, Babel, Enzyme, Jest!'
// // });

// // database.ref('notes/-L6l3WfkfM6tH-uN-yy6').update({
// //     body: 'React, Redux, Firebase, ES6, Babel, Enzyme, Jest, JSX!'
// // });

// // Challenge:
// // Setup "expenses" with three items (desc, note, amount, createdAt)
// // database.ref('expenses').push({
// //     description: 'Rent',
// //     note: 'Notey note note',
// //     amount: 123456,
// //     createdAt: 1242354
// // });
// // database.ref('expenses').push({
// //     description: 'Phone bill',
// //     note: 'Notey note note 2',
// //     amount: 456456,
// //     createdAt: 456456
// // });
// // database.ref('expenses').push({
// //     description: 'Dank memes',
// //     note: 'Notey note note 3',
// //     amount: 76578,
// //     createdAt: 456
// // });


// // const firebaseNotes = {
// //     notes: {
// //         note1: {
// //             title: 'note 1',
// //             body: 'this is note 1'
// //         },
// //         note2: {
// //             title: 'note 2',
// //             body: 'this is note 2'
// //         }
// //     }
// // };

// // // Proof firebase does not really support arrays properly
// // const notes =[{
// //     id: '123',
// //     title: 'First Note!',
// //     body: 'This is my note.'
// // },{
// //     id: '456',
// //     title: 'Another Note!',
// //     body: 'This is my other note.'
// // }];

// // database.ref('notes').set(notes);