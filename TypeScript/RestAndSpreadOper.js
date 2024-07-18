// let num1 = [1, 2, 3, 4]
// let num2 = [7, 8]
// let num3 = [num1, num2, 9, 10, 11]
// let num4 = [...num1, ...num2, 7, 8, 9, 10, 11]
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// console.log("Element of num3:", num3)
// console.log("Element of num4:", num4)
// //Get Objects from one varibale or object into another one - Spread Operator
// let address = {
//     state: "Maharashtra",
//     Dist: "Pune"
// }
// let employee = {
//     id: 1,
//     name: "Atharva",
//     designation: "SD",
//     salary: 100000,
//     ...address
// }
// console.log(employee)
// function add(a: number, b: number, c: string) {
//     console.log("Addition is: " + (a + b + c));
// }
// let numbers = [12, 10, 78];
// add(2, 4, 5);
// add(numbers[0], numbers[1], numbers[2]);
// //tuple
// let num: [number, number, string] = [10, 20, "PRASAD"];
// add(...num);
//REST AND SPREAD
var num1 = [1, 2, 3, 4];
var num2 = [7, 8];
var num3 = [num1, num2, 10, 9, 11];
var num4 = __spreadArray(__spreadArray(__spreadArray([], num1, true), num2, true), [7, 8, 9, 10, 11], false);
console.log("Elements of num3: ", num3);
console.log("Elements of num4: ", num4);
var address = {
    dist: "Pune",
    state: "Maharashtra"
};
var employee = __assign({ id: 1, name: "Sumat", designation: "SDE", salary: 2345 }, address);
console.log(employee);
function add(a, b, c) {
    console.log("Addition is: ", (a + b + c));
}
var numbers = [2, 3, 4];
// Correct usage of the add function with three arguments
add(4, 5, "Sumat");
// This call is incorrect because it provides only one argument
// Instead, split the calculation and pass three arguments
var sum = numbers[0] + numbers[1] + numbers[2];
add(sum, 0, ""); // Adjust the arguments to fit the function signature
// ---------TUPLE-------
var num = [10, 20, "Sumat"];
add.apply(void 0, num); // Using the spread operator correctly
//-------------REST PARAMETER---------(...)
// REST parameter is part of function definition/signature
function show(msg) {
    var inputs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        inputs[_i - 1] = arguments[_i];
    }
    console.log(msg);
    for (var _a = 0, inputs_1 = inputs; _a < inputs_1.length; _a++) {
        var data = inputs_1[_a];
        console.log(data);
    }
}
show("Welcome to Cybage!!");
show("Welcome to ES6", 100, 102, 1012);
show("Sumat Jain", 24, 7485, 7857);
