// import 'babel-pollyfill';
console.log(Array.from('sssss'));

const sum=(a,b)=>a+b;
let c=sum(2,222);
console.log(c);
// Sets
var s = new Set();
s.add("hello").add("goodbye").add("hello");
console.log(s);
console.log(s.size);
console.log(s.has("hello"));

// Maps
var m = new Map();
m.set("hello", 42);
m.set(s, 34);
console.log(m.get(s));

let students = [
    {name: 'Anna', grade: 6},
    {name: 'John', grade: 4},
    {name: 'Maria', grade: 9}
];

const isApproved = student => student.grade >= 6;
const byName=obj=>obj.name;
var ss= students.filter(isApproved).map(byName);

console.log(ss);

const factorial = num => {
    if (num <= 0) {
        return 1;
    } else {
        return (num * factorial(num - 1));
    }
}

console.log(factorial(5));

const compose = (f,g) => x => f(g(x));

const toUpperCase = x => x.toUpperCase();
const exclaim = x => `${x}!`;

const angry = compose(exclaim, toUpperCase);

console.log(angry("stop this"));
const moreExclaim = x => `${x}!!!!!`;

const reallyAngry = compose(exclaim, compose(toUpperCase, moreExclaim));
console.log(reallyAngry("go out"));


const [a, ...b] = [1, 2, 3,5,77,88];
console.log(a, b);


const student = name => grade => `Name: ${name} | Grade: ${grade}`;

student("Matt")(8);

const add = x => y => x + y;

const increment = add(1);
const addFive = add(5);

increment(3);
//4

addFive(10);
// 15

var array = [1, 2, 3];
//传统写法
array.forEach(function(v, i, a) {
    console.log(v,i,a);
});
//ES6
array.forEach(v => console.log(v));

var getJSON = function(url) {
  var promise = new Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    // client.send();

    function handler() {
      if ( this.readyState !== 4 ) {
        return;
      }
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };
  });

  return promise;
};

getJSON("posts.json").then(function(json) {
  console.log(json);
}, function(error) {
  console.error('出错了', error);
});

function testable(target) {
  target.isTestable = true;
}

@testable
class MyTestableClass {}

console.log(MyTestableClass.isTestable)
