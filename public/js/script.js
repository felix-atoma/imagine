
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
const person = {
    username: 'felix-atoma',
    age: 73,
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

