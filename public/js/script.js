
const btn = document.getElementById('btn');
btn.onclick = function()  {
    const name = prompt('Enter your full name.');
    document.getElementById('name').innerText = name;
}

// Variables
const pi = 3.142;
let username = 'felix.-atoma';
let age = 73;
let present = false;

// Objects
const person =  {
    present: false,
    child: {
        name: 'Gracia',
        friend:{
            name: 'Dela'
        }
    }
}

person.age =40;
console.log(person.username);
console.log(person.age);
console.log(person.present);
console.log(person);

person.username = 'kojo';
console.log(person.username);

person.child.name = 'sheila';
console.log(person.child.name);


// Arrays
const bottle1 = {
    size: 'large',
    color: 'yellow'
  }
  
  const bottle2 ={
    size: 'small',
    color: 'blue'
  }
  
  
  const bottles =[bottle1,bottle2];
  bottles;
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  bottles[1].color;
  // if/Else
  const date = new Date();
  date.getDay();
//   const age = 19;
  if (age>=18) {
    'you are true';
  }else{
    'you are false'
  }
  // For loops
  for (let i =0; i<=5; i+=3) {
   console.log('We did it!', i) 
  }

  // functions
// Defining a function
function login(username, password) {
  // Validate username and password
  if (!username|| !password) {
    return 'Username or password not provided';
  }
  // Verify username and password
  if (username == "felix-atoma" && password == "1234") {
    return "User is logged in";
  } else {
    return "Invalid username or password";
  }
  // Array map
const users = [
  {firstname: 'Felix', lastname:'Atoma'},
  {fistname: 'John', lastname: 'Ofusu'},
  {fistname: 'Ismael', lastname: 'Awudu'},
  {firstname: 'Ibrahim', lastname: 'Yakubu'},
  {firstame:'Godwin', lastname: 'Akolbila'},
  {firstname:'Michael', lastname:'Madu'},
]
users.map(fullName);
// Square of numbers
function square(number){
  return number ** 2
}
square(5);
const numbers = [4,15,20,19];
numbers.map(square);


// Array filter
function isEven(number){
  return number % 2===0;
}
isEven(8);
numbers.filter(isEven);



}
// Invoking a function
login('felix-atoma');



// Basic Arithmetic Operation 
11 + 12;
1+0.5;
43-12;
45/7;


Math.floor(45/24);
45%24;
Math.random() * 100;
Math.max(40,45,23);
2* (3+4) - 5/2;
Number('ty') + 2

// Strings in JavaScript
// Concatenation
const firstname = 'felix';
const lastname = 'Atoma';
const middlename= '';
firstname + ' ' + middlename + ' ' + lastname;
// String Methods
let fullName = "felix atoma"
fullName.length
fullName.toUpperCase()
fullName.toLowerCase()
fullName.charAt(8)
fullName.slice(7,12)
fullName.split("")
fullName.replace("atoma", "Johnson")
fullName.indexOf("lix")
// string conversion
Number("4.123")
parseInt("4.123")
parseFloat("4.123")
 let amount = 12000
 console.log('GHS${amount}')
amount.toString()
// Arrays in JavaScript
const users = [
  {
  username: 'felix-atoma',
  password: '1234',
  email: 'felixatoma2@gmail.com'
  },
  {
    username:'felixatoma2',
    email: 'atomafelix2@gmail.com'
  }
]


