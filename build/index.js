"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import 'babel-pollyfill';
console.log(Array.from('sssss'));

var sum = function sum(a, b) {
  return a + b;
};
var c = sum(2, 222);
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

var students = [{ name: 'Anna', grade: 6 }, { name: 'John', grade: 4 }, { name: 'Maria', grade: 9 }];

var isApproved = function isApproved(student) {
  return student.grade >= 6;
};
var byName = function byName(obj) {
  return obj.name;
};
var ss = students.filter(isApproved).map(byName);

console.log(ss);

var factorial = function factorial(num) {
  if (num <= 0) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(5));

var compose = function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
};

var toUpperCase = function toUpperCase(x) {
  return x.toUpperCase();
};
var exclaim = function exclaim(x) {
  return x + "!";
};

var angry = compose(exclaim, toUpperCase);

console.log(angry("stop this"));
var moreExclaim = function moreExclaim(x) {
  return x + "!!!!!";
};

var reallyAngry = compose(exclaim, compose(toUpperCase, moreExclaim));
console.log(reallyAngry("go out"));

var a = 1;
var b = [2, 3, 5, 77, 88];

console.log(a, b);

var student = function student(name) {
  return function (grade) {
    return "Name: " + name + " | Grade: " + grade;
  };
};

student("Matt")(8);

var add = function add(x) {
  return function (y) {
    return x + y;
  };
};

var increment = add(1);
var addFive = add(5);

increment(3);
//4

addFive(10);
// 15

var array = [1, 2, 3];
//传统写法
array.forEach(function (v, i, a) {
  console.log(v, i, a);
});
//ES6
array.forEach(function (v) {
  return console.log(v);
});

var getJSON = function getJSON(url) {
  var promise = new Promise(function (resolve, reject) {
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    // client.send();

    function handler() {
      if (this.readyState !== 4) {
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

getJSON("posts.json").then(function (json) {
  console.log(json);
}, function (error) {
  console.error('出错了', error);
});

function testable(target) {
  target.isTestable = true;
}

var MyTestableClass = testable(_class = function MyTestableClass() {
  _classCallCheck(this, MyTestableClass);
}) || _class;

console.log(MyTestableClass.isTestable);