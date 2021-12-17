/////////////////

let city1 = {};
city1.name = "ГородN";
city1.population = 10000000;

console.log("название: " + city1.name + " " + "население: " + city1.population);

/////////////////

let city2 = {name: "ГородM", population: "1e6"};
console.log("название: " + city2.name + " " + "население: " + city2.population);

/////////////////

function getName(){
    return this.name;
}

city1.getName = getName;
city2.getName = getName;
console.log(city1.getName());
console.log(city2.getName());

/////////////////

function exportStr() {
    return this.name + "\n" + "population=" + this.population + "\n";
}

city1.exportStr = exportStr;
city2.exportStr = exportStr;  
console.log(city1.exportStr());
console.log(city2.exportStr());

/////////////////

function getObj (){
    return this 
}
 
city1.getCity = getObj;
city2.getCity = getObj;
console.log("Название: " + city1.getCity().name + " " + "население: " + city1.getCity().population);
console.log("Название: " + city2.getCity().name + " " + "население: " + city2.getCity().population);

/////////////////

let d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log(d1[6])
console.log(d1[7])

/////////////////

let d2 = [45, 78, 10, 3];
let sum3 = 0;
for(let i in d2){
    sum3 += d2[i];
} 
console.log(sum3);

/////////////////

let d3 = [45, 78, 10, 3];
d3[7] = 100;
let sum4 = 0;
for(let i in d3){
    sum4 += d3[i];
} 
console.log(sum4);

/////////////////

let d4 = [45, 78, 10, 3];

function my(a,b){
    return (b - a)
}

console.log(d4.sort(my))

/////////////////

function Vector(x, y) {
    this.x = x;
    this.y = y;
}

function plus(otherVector) {
    let x = this.x + otherVector.x;
    let y = this.y + otherVector.y;
    return new Vector(x, y);
};
function minus(otherVector) {
    let x = this.x - otherVector.x;
    let y = this.y - otherVector.y;
    return new Vector(x, y);
};
function toString() {
    return "Vector{x: " + this.x + ", y: " + this.y + "}";
}

Object.defineProperty(Vector.prototype, "length", {
    get: function () {
      return Math.sqrt(Math.pow(this.y, 2) + Math.pow(this.x, 2));
    }
})


Vector.prototype.plus = plus;
Vector.prototype.minus = minus;
Vector.prototype.toString = toString;

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);

/////////////////


function logFive(obj) {
    newArr = obj.slice(0, Math.min(5, obj.length));
    newArr.map(function(element){
            console.log(element);
    });
}

function ArraySeq(arr) {
        return arr;
}

function RangeSeq(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
   return arr;
}

logFive(ArraySeq([1, 2]));
logFive(RangeSeq(100, 1000));

/////////////////


function card(from, to){
    this.from = from;
    this.to = to;
    this.show = function(){
        return `${this.from},${this.to}`;
    }
}

c1 = new card("Екатеринбург","Москва");
console.log(c1.show());



class Human {
    constructor (name, age, height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    getInfo() {
        return `${this.name},${this.age},${this.height}`
    }

    get firstname(){
        return this.name;
    }
}

humans = [
    new Human("Коля",23,180),
    new Human("Даша",19,170),
    new Human("Ваня",18,192),
    new Human("Петя",45,178),
    new Human("Вася",34,197),
    new Human("Джони",37,160),
    new Human("Катя",37,160),
    new Human("Петя",37,160),
    new Human("Соня", 21,172),
    new Human("Женя",25,175)
]

console.log(humans);
console.log(humans[1].getInfo());
console.log(humans[2].firstname);

/////////////////

dt1 = new Date(2045, 0, 1, 0, 0, 0);
console.log(dt1)


/* 20) Напишите функцию getDays, которая принимает год и месяц (пусть январь будет — 1, февраль — 2 и т.д.), 
а возвращает количество дней в месяце */

function getDays(y, m) {
    return new Date(y,m,0).getDate();
}

console.log(getDays(2004, 01) + " дн.");
console.log(getDays(1999, 02) + " дн."); 
console.log(getDays(2021, 03) + " дн.");
