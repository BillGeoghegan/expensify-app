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

// // Child removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // Child changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // Child added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // const onValueChange = database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //     console.log(expenses)
// // });

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];
// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });
// //         console.log(expenses);
// //     });

