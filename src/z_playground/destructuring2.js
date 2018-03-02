//Array destructuring

const address = ['5 The Glebe','Straffan City','Kildare Nation','EIRCODE123'];
//Square brackets for array destructuring
const [street,city,state,zip = 'default_zip_code_if_entry_empty'] = address; //Leave blank comma to ignore spaces in array
console.log(`You are in ${street}`);




const item = ['Coffee (hot)','$2.00','$2.50','$3.00']
const [coffee,,med,] = item;
console.log(`${coffee} costs ${med}`);