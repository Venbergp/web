let message;
message = "#";
for (let i = 1; i < 8; i++) {
    console.log(message);
    message = message + '#';
}

#########
for (let number = 0; number < 101; number++) {
    if (number % 3 == 0) {
        console.log("Fizz");
        continue;
    }
    if (number % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
    
}

for (let number = 0; number < 101; number++) {
    if (number % 15 == 0) {
        console.log("FizzBuzz");
    }
    if (number % 3 == 0) {
        console.log("Fizz");
        continue;
    }
    if (number % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(number);
    }
    
}

##########

let message = "";
for (let i = 0; i < 8; i++) {
    if (i % 2 == 0) {
        message += "# # # # \n";
    } else {
        message += " # # # #\n";
    }
}
console.log(message);

#############

function findMin(x, y) {
    if (x < y) {
        return x;
    } else {
        return y;
    }
}

console.log(findMin(3, 5));

###############


function countBs(s) {
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == 'B')
            ans++;
    }
    return ans;
}

function countChar(s, c) {
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == c)
            ans++;
    }
    return ans;
}

console.log(countBs("BBB"));
console.log(countChar("ABCA", "A"));




###########

function range(a, b, c = 1) {
    let arr = [];
    if (c > 0){
        for (let i = a; i < b + 1; i += c)
            arr.push(i);
    } else {
        for (let i = a; i > b - 1; i += c)
            arr.push(i)
    }
    return arr;
}

function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum
}

let ans = range(5, 2, -1);
console.log(ans);
console.log(sum(ans));



###########


function reverseArray(arr) {
    let newArr = []
    for (let i = arr.length - 1; i > -1; i --) {
        newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseArray([1, 2, 3, 4]))

function reverse(arr) {
    for (let i = 0; i < arr.length / 2 + 1; i ++) {
        let x = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = arr[i];
        arr[i] = x;
    }
    return arr
}

console.log(reverse([1, 2, 3, 4]))


##########


function arrayToList(arr) {
    let list = {};
    let firstElem = list;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        list["value"] = arr[i];
        list["nextElem"] = new Object();
        list = list["nextElem"];
        list["value"] = null;
        list["nextElem"] = null;
    }
    return firstElem;
}

let list = arrayToList([1, 2, 3, 4]);
console.log(list);

function prepend(list, x) {
    let firstElem = new Object();
    firstElem["value"] = x;
    firstElem["nextElem"] = list
    return firstElem;
}

list = prepend(list, 4)
console.log(list)


function nth(list, p) {
    let x = 0;
    let ans = undefined;
    while (x <= p && list["nextElem"] != null) {
        if (x == p) {
            ans = list["value"];
        }
        list = list["nextElem"];
        x += 1;
    }
    return ans
}

console.log(nth(list, 5))


############

