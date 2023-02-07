import React from "react";
import  ReactDOM  from "react";

function add(a,b){
    let sum = a+b;
    return sum;
}

function sub(a,b){
    let minus = a-b;
    return minus;
}

function div(a,b){
    let di = a/b;
    di = di.toFixed(2);
    return di;
}

function multi(a,b){
    let multiply = a*b;
    return multiply;
}

export {add,sub,div,multi};
